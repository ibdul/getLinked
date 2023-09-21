<!-- src/routes/Star.svelte -->

<script>
  import { onMount } from "svelte";
  import Parallax from "parallax-js";

  let element = null;

  export let scrollY;
  export let size;
  export let opacity;
  export let top;
  export let left;
  export let blink;

  export let odd = false;

  let blinkDuration = blink ? `${0.3 + Math.random()}s` : "0s";

  export const depth = getRandomValue(1, 6);

  function getRandomValue(min = 8, max = 200) {
    return Math.random() * (max - min) + min;
  }
  onMount(() => {
    var parallaxInstance = new Parallax(element);
    // var scenes = document.querySelectorAll(".star");
    // scenes.forEach((scene) => {
    //   var parallaxInstance = new Parallax(scene);
    // });
  });
</script>

<div
  bind:this={element}
  class="star"
  style="
      width: {size}px;
      rotate: {Math.random() * size}deg;
      height: {size}px;
      opacity: {opacity};
      top: {top}%;
      left: {left}%;
      animation: blink {blinkDuration} infinite alternate;
    "
>
  <svg
    data-depth={depth}
    data-scalar-x={getRandomValue()}
    data-scalar-y={getRandomValue()}
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    id="Capa_1"
    viewBox="0 0 47.94 47.94"
    xml:space="preserve"
    class="w-full h-full"
  >
    <path
      class={odd ? "fill-pink-100" : "fill-white"}
      d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757  c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042  c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685  c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528  c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956  C22.602,0.567,25.338,0.567,26.285,2.486z"
    />
  </svg>
</div>
<svg
  class="star hidden"
  style="
    width: {size}px;
    height: {size}px;
    opacity: {opacity};
    left: {left}%;
    animation: blink {blink ? '0.5s' : '0s'} infinite alternate;
  "
  xmlns="http://www.w3.org/2000/svg"
  width="100"
  height="100"
  viewBox="0 0 100 100"
>
  <!-- Add special classes if the star is odd -->
  {#if odd}
    <path
      class="star-path star-special"
      d="M50 0 L55 40 H95 L60 60 L70 100 L50 75 L30 100 L40 60 L5 40 H45 Z"
    />
  {:else}
    <path
      class="star-path"
      d="M50 0 L55 40 H95 L60 60 L70 100 L50 75 L30 100 L40 60 L5 40 H45 Z"
    />
  {/if}
</svg>

<style>
  @keyframes blink {
    to {
      opacity: 0;
    }
  }

  .star {
    /* position: absolute; */
  }

  @keyframes blink {
    to {
      opacity: 0;
    }
  }
</style>
