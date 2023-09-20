<!-- src/routes/StarrySky.svelte -->

<script>
  import { onMount } from "svelte";
  import Star from "./Star.svelte";
  let stars = [];
  let scrollY = 0;
  let documentHeight;

  // Function to handle scroll event
  function handleScroll() {
    scrollY = window.scrollY;
  }

  // Function to generate a random star
  function generateStar() {
    const size = Math.random() * 10 * (3 - 1) + 10; // Random star size between 10 and 30
    return {
      top: Math.random() * documentHeight,
      size,
      opacity: Math.random() * (1 - 0.5) + 0.5, // Random opacity between 0.5 and 1
      left: Math.random() * 100, // Random left position
      blink: Math.random() < 0.02, // Randomly decide if the star should blink
    };
  }

  onMount(() => {
    documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );

    // Initialize stars
    for (let i = 0; i < 100; i++) {
      stars.push(generateStar());
    }

    window.addEventListener("scroll", handleScroll);
  });
</script>

<div class="starry-sky">
  {#each stars as star, i}
    <Star {scrollY} {...star} odd={i % 3 === 0} />
  {/each}
</div>

<style>
  .starry-sky {
    position: fixed; /* Fixed position to overlay the entire page */
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    /* background-color: #000; */
  }
</style>
