<script>
  import "../app.css";
  import HamburgerIcon from "$lib/components/icons/HamburgerIcon.svelte";
  import AnimatedBlobs from "$lib/components/AnimatedBlobs.svelte";
  import Cursor from "$lib/components/Cursor.svelte";

  let menu_open = false;
  function openMenu() {
    menu_open = true;
  }
  function closeMenu() {
    menu_open = false;
  }
</script>

<Cursor />

<div class="bg-dark text-white selection:bg-pink selection:text-dark">
  <div class="fixed inset-0 pointer-events-none">
    <AnimatedBlobs />
  </div>
  <div class=" min-h-screen">
    <header>
      <div class="max-w-6xl container flex items-center justify-between py-6">
        <a href="/">
          <h2 class="text-[26px] heading-1">
            get<span class="text-pink">linked</span>
          </h2>
        </a>
        <button class="md:hidden" on:click={openMenu}><HamburgerIcon /></button>
        <div
          class="menu bg-dark min-h-screen fixed inset-0 {menu_open
            ? 'flex'
            : 'hidden'} items-center z-10 px-10 text-5xl"
        >
          <button
            class="border rounded-full w-6 h-6 p-8 hover:p-10 hover:rotate-90 transition-default flex items-center justify-center absolute top-0 right-0 m-12"
            on:click={closeMenu}
          >
            &times;
          </button>
          <ul class="space-y-4 w-full">
            <li class="group">
              <a class="block" on:click={closeMenu} href="/#timeline"
                >Timeline</a
              >
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
