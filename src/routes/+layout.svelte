<script>
  import "../app.css";
  import HamburgerIcon from "$lib/components/icons/HamburgerIcon.svelte";
  // import AnimatedBlobs from "$lib/components/AnimatedBlobs.svelte";
  import Cursor from "$lib/components/Cursor.svelte";
  // import StarrySky from "$lib/components/StarrySky.svelte";
  // import Blob from "../lib/components/Blob.svelte";
  import AnimatedStarField from "../lib/components/AnimatedStarField.svelte";

  import ProgressBar from "@prgm/sveltekit-progress-bar/ProgressBar.svelte";

  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { onNavigate } from "$app/navigation";
  import { page } from "$app/stores";

  let site_origin = "";

  const page_links = [
    { title: "timeline", href: "/#timeline" },
    { title: "overview", href: "/#overview" },
    { title: "FAQs", href: "/#faqs" },
    { title: "contact", href: "/contact-us" },
  ];
  const sections = page_links
    .filter((link) => {
      return link.href.indexOf("#") !== -1;
    })
    .map((link) => {
      return `#${link.title.toLowerCase()}`;
    });
  let currentSection;

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
        if ($page.route.id !== "/") {
          currentSection = undefined;
        }
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
    site_origin = window.location.origin;
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
    let sticky_header_classes =
      "sticky top-0 !py-2 backdrop-blur-[2px] bg-dark/60 header-sticky".split(
        " "
      );
    var header_observer = new IntersectionObserver(
      (entries) => {
        // no intersection
        if (entries[0].intersectionRatio === 0)
          header.classList.add(...sticky_header_classes);
        // fully intersects
        else if (entries[0].intersectionRatio == 1)
          header.classList.remove(...sticky_header_classes);
      },
      { threshold: [0, 1] }
    );
    header_observer.observe(header_top);

    let scrollY = 0;
    const handleScroll = () => {
      if (window.scrollY < scrollY) {
        header.classList.remove("!py-2");
      } else {
        if (header) {
          header.classList.add("!py-2");
        }
      }
      if ($page.route.id == "/") {
        scrollY = window.scrollY;
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.querySelector(sections[i]);
          if (
            scrollY < section.offsetTop ||
            scrollY > section.offsetTop + section.scrollHeight
          ) {
            if (currentSection == sections[i]) {
              currentSection = undefined;
            }
            continue;
          }
          currentSection = sections[i];
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Call handleScroll once onMount to set the initial currentSection value
    handleScroll();
  });
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>get-linked pre-hackathon</title>
  <meta
    name="description"
    content="Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!"
  />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={site_origin} />
  <meta property="og:title" content="get-linked pre-hackathon" />
  <meta
    property="og:description"
    content="Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!"
  />
  <meta property="og:image" content="{site_origin}/getlinked-banner.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={site_origin} />
  <meta property="twitter:title" content="get-linked pre-hackathon" />
  <meta
    property="twitter:description"
    content="Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!"
  />
  <meta
    property="twitter:image"
    content="{site_origin}/get-linked-banner.png"
  />

  <!-- Meta Tags Generated with https://metatags.io -->
</svelte:head>

{#if showCursor}
  <Cursor />
{/if}

<ProgressBar class="text-pink-200 z-40" />

<div
  class="layout_wrapper overflow-clip bg-dark text-white selection:bg-pink selection:text-dark"
>
  <div
    class="menu z-[90] bg-dark min-h-screen fixed inset-0 flex items-center px-10"
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
        <a
          href="/register"
          on:click={closeMenu}
          class="relative btn-base block"
        >
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
        <a href="/register" on:click={closeMenu} class="btn">Register</a>
      {/if}
    </nav>
  </div>
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
    <header
      class="transition-default hover:opacity-100 hover:backdrop-blur-[1px] z-10 py-6 border-b border-white/[5%]"
    >
      <div class="max-w-6xl container flex items-center justify-between">
        <a href="/">
          <h2 class="text-[26px] heading-1">
            get<span class="text-pink">linked</span>
          </h2>
        </a>

        <button class="md:hidden" on:click={openMenu}><HamburgerIcon /></button>

        <nav
          class="header-nav max-md:hidden flex gap-10 items-center transition-default"
        >
          <ul class="capitalize flex items-center gap-8 transition-default">
            {#each page_links as page_link}
              <li>
                <a
                  href={page_link.href}
                  class="transition-default {currentSection ===
                    `#${page_link.title.toLowerCase()}` ||
                  $page.route.id == page_link.href
                    ? 'bg-gradient-to-r font-bold from-purple via-pink-100 to-pink-100 text-transparent bg-clip-text '
                    : ''}"
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
  :global(header.header-sticky nav.header-nav),
  :global(header.header-sticky nav.header-nav ul) {
    gap: 12px;
  }
</style>
