<script>
  import "../app.css";
  import HamburgerIcon from "$lib/components/icons/HamburgerIcon.svelte";
  // import AnimatedBlobs from "$lib/components/AnimatedBlobs.svelte";
  import Cursor from "$lib/components/Cursor.svelte";
  // import StarrySky from "$lib/components/StarrySky.svelte";
  // import Blob from "../lib/components/Blob.svelte";
  // import AnimatedStarField from "../lib/components/AnimatedStarField.svelte";
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { onNavigate } from "$app/navigation";

  onNavigate((navigation) => {
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
        ".menu a",
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
  });
</script>

<Cursor />
<div
  class="layout_wrapper bg-dark text-white selection:bg-pink selection:text-dark"
  data-sveltekit-preload-code="viewport"
>
  <!-- <div
    class="min-h-screen fixed inset-0 overflow-hidden opacity-30"
    style="
    background: radial-gradient(ellipse at bottom, #150E28 0%, #090a0f 100%);
    "
  >
    <AnimatedStarField />
  </div> -->

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
          <ul class="space-y-4 w-full">
            <li class="group">
              <a class="block" on:click={closeMenu} href="/#timeline">
                Timeline
              </a>
            </li>
            <li class="group">
              <a class="block" on:click={closeMenu} href="/#overview"
                >Overview</a
              >
            </li>
            <li class="group">
              <a class="block" on:click={closeMenu} href="/#faqs">FAQs</a>
            </li>
            <li class="group">
              <a class="block" on:click={closeMenu} href="/contact-us"
                >Contact</a
              >
            </li>
          </ul>
        </div>
        <nav class="max-md:hidden flex gap-10 items-center">
          <ul class="flex items-center gap-8">
            <li><a href="/#timeline">Timeline</a></li>
            <li><a href="/#overview">Overview</a></li>
            <li><a href="/#faqs">FAQs</a></li>
            <li><a href="/contact-us">Contact</a></li>
          </ul>
          <a href="/register" class="btn"> Register </a>
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
