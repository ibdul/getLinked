<!-- Typewriter.svelte -->

<script>
  import { onMount, onDestroy } from "svelte";

  let text = "";
  export let message = `<p>This is a <span style="position:relative;">typewriter effect</span> example.</p>`;
  let currentIndex = 0;
  let interval;
  const typingSpeed = 50; // Adjust the typing speed (milliseconds per character)
  let showStroke = false;

  function startTyping() {
    interval = setInterval(() => {
      if (currentIndex < message.length) {
        text += message[currentIndex];
        currentIndex += 1;
      } else {
        clearInterval(interval);
        showStroke = true;
      }
    }, typingSpeed);
  }

  onMount(startTyping);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="relative group">
  <h2 class="font-bold text-[20px] lg:text-[24px] italic lg:px-4">
    {@html text}
  </h2>
  <h2 class="font-bold text-[20px] lg:text-[24px] italic lg:px-4">
    <span class="opacity-0"> Igniting a Revolution in </span>
    <span class="relative">
      <span class="opacity-0"> HR Innovation </span>
    </span>
  </h2>
  <h2
    class="absolute inset-0 font-bold text-[20px] lg:text-[24px] italic lg:px-4"
  >
    <span class="opacity-0"> Igniting a Revolution in </span>
    <span class="relative">
      <span class="opacity-0"> HR Innovation </span>
      <span
        class="{showStroke
          ? 'max-sm:w-[100px] max-sm:translate-x-[-100%] w-[200px]'
          : 'w-0'} overflow-hidden transition-default absolute inset-x-0 -bottom-4"
      >
        <img src="/images/stroke.svg" class="" alt="stroke" />
      </span>
    </span>
  </h2>
</div>

<style>
  /* Add your typewriter styles here */
</style>
