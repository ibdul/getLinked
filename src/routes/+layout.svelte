<script>
  import "../app.css";
  import HamburgerIcon from "$lib/components/icons/HamburgerIcon.svelte";
  // import AnimatedBlobs from "$lib/components/AnimatedBlobs.svelte";
  import Cursor from "$lib/components/Cursor.svelte";
  // import StarrySky from "$lib/components/StarrySky.svelte";
  // import Blob from "../lib/components/Blob.svelte";
  import AnimatedStarField from "../lib/components/AnimatedStarField.svelte";
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { onNavigate } from "$app/navigation";
  import { page } from "$app/stores";

  const page_links = [
    { title: "timeline", href: "/#timeline" },
    { title: "overview", href: "/#overview" },
    { title: "FAQs", href: "/#faqs" },
    { title: "contact", href: "/contact-us" },
  ];

  let showCursor = true;

  onNavigate((navigation) => {
    showCursor = false;
    setTimeout(() => {
      showCursor = true;
    }, 100);

    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  const menu_open_timeline = gsap.timeline({ paused: true });
  const menu_close_timeline = gsap.timeline({ paused: true });

  function openMenu() {
    // menu_open = true;
    if (menu_open_timeline.progress() < 1) {
      menu_open_timeline.play();
    } else {
      menu_open_timeline.restart();
    }
  }
  function closeMenu() {
    if (menu_close_timeline.progress() < 1) {
      menu_close_timeline.play();
    } else {
      menu_close_timeline.restart();
    }
  }

  onMount(() => {
    gsap.set(".menu_close_btn", { y: "-120px", rotate: "-360" });
    menu_open_timeline
      .set(".menu_close_btn", { y: "-120px", rotate: "-360" })
      .set(".menu", { y: 0 })
      .to(".menu", { clipPath: "circle(150% at 100% 0)" })
      .fromTo(
        ".menu nav a",
        { y: "50px", x: 0, opacity: 0 },
        {
          y: "0px",
          opacity: 1,
          stagger: { amount: 0.5 },
        }
      )
      .to(".menu_close_btn", {
        y: 0,
        rotate: 0,
        ease: "back",
      });

    menu_close_timeline
      .to(".menu a", {
        x: "-150px",
        opacity: 0,
        stagger: { amount: 0.5 },
      })
      .to(".menu", { clipPath: "circle(0% at 100% 0)" })
      .set(".menu", { y: "100%" })
      .to(".menu a", {
        x: 0,
      });

    //sticky header
    let header_top = document.querySelector(".header-top");
    let header = document.querySelector("header");
    var observer = new IntersectionObserver(
      (entries) => {
        // no intersection
        if (entries[0].intersectionRatio === 0)
          header.classList.add("sticky_header");
        // fully intersects
        else if (entries[0].intersectionRatio == 1)
          header.classList.remove("sticky_header");
      },
      { threshold: [0, 1] }
    );
    observer.observe(header_top);
  });
</script>

{#if showCursor}
  <Cursor />
{/if}

<div
  class="layout_wrapper bg-dark text-white selection:bg-pink selection:text-dark"
>
  <div
    class="min-h-screen fixed inset-0 overflow-hidden opacity-30"
    style="
    background: radial-gradient(ellipse at bottom, #150E28 0%, #090a0f 100%);
    "
  >
    <AnimatedStarField />
  </div>

  <!-- <StarrySky /> -->

  <div class="overflow-hidden fixed inset-0 pointer-events-none">
    <!-- <AnimatedBlobs /> -->
    <!-- {#each Array(6) as _, i}
      <Blob />
    {/each} -->
  </div>
  <div class="relative min-h-screen">
    <div class="z-10 -space-y-20">
      <!-- <StarrySky /> -->
    </div>
    <div class="header-top" />
    <header>
      <div class="max-w-6xl container flex items-center justify-between py-6">
        <a href="/">
          <h2 class="text-[26px] heading-1">
            get<span class="text-pink">linked</span>
          </h2>
        </a>
        <!-- BASEN ON DRIBBBLE SHOT: https://dribbble.com/shots/2209627-UI8-Nav -->

        <button class="md:hidden" on:click={openMenu}><HamburgerIcon /></button>
        <div
          class="menu bg-dark min-h-screen fixed inset-0 flex items-center z-10 px-10 text-5xl"
        >
          <button
            class="menu_close_btn border rounded-full w-6 h-6 p-8 hover:p-10 hover:rotate-90 transition-default flex items-center justify-center absolute top-0 right-0 m-12"
            on:click={closeMenu}
          >
            &times;
          </button>
          <nav class="space-y-6">
            <ul class="capitalize space-y-4 w-full">
              {#each page_links as page_link}
                <li class="group">
                  <a class="block" on:click={closeMenu} href={page_link.href}>
                    {page_link.title}
                  </a>
                </li>
              {/each}
            </ul>

            {#if $page.route.id == "/register"}
              <a href="/register" class="relative btn-base block">
                <span
                  class="absolute inset-0 rounded-[inherit] bg-gradient-to-t from-pink-100 to-purple -m-1"
                />

                <p
                  class="bg-dark bg-clip-border absolute inset-0 flex justify-center items-center rounded-[inherit]"
                >
                  Register
                </p>
                <p class="invisible rounded-[inherit]">Register</p>
              </a>
            {:else}
              <a href="/register" class="btn">Register</a>
            {/if}
          </nav>
        </div>
        <nav class="max-md:hidden flex gap-10 items-center">
          <ul class="capitalize flex items-center gap-8">
            {#each page_links as page_link}
              <li>
                <a
                  href={page_link.href}
                  class={$page.route.id == page_link.href
                    ? "bg-gradient-to-r font-bold from-purple via-pink-100 to-pink-100 text-transparent bg-clip-text "
                    : ""}
                >
                  {page_link.title}
                </a>
              </li>
            {/each}
          </ul>

          {#if $page.route.id == "/register"}
            <a href="/register" class="relative btn-base">
              <span
                class="absolute inset-0 rounded-[inherit] bg-gradient-to-t from-pink-100 to-purple -m-1"
              />

              <p
                class="bg-dark bg-clip-border absolute inset-0 flex justify-center items-center rounded-[inherit]"
              >
                Register
              </p>
              <p class="invisible rounded-[inherit]">Register</p>
            </a>
          {:else}
            <a href="/register" class="btn">Register</a>
          {/if}
        </nav>
      </div>
    </header>
    <slot />
  </div>
</div>

<style>
  .menu {
    transform: translateY(100%);
    clip-path: circle(0% at 100% 0);
  }
</style>
