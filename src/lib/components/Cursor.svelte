<script>
  import { onMount } from "svelte";

  onMount(() => {
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 25) + "px; left: " + (e.pageX - 25) + "px;"
      );
    });

    document.addEventListener("click", () => {
      cursor.classList.add("cursor-click");

      setTimeout(() => {
        cursor.classList.remove("cursor-click");
      }, 500);
    });

    document.addEventListener("scroll", () => {
      cursor.classList.add("cursor-scroll");

      setTimeout(() => {
        cursor.classList.remove("cursor-scroll");
      }, 500);
    });

    const interactiveElements = document.querySelectorAll(
      "a, button, .interactive"
    );
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        console.log("here");
        cursor.classList.add("hovering");
      });

      element.addEventListener("mouseleave", () => {
        cursor.classList.remove("hovering");
      });
    });
  });
</script>

<div class="cursor" />

<style>
  .cursor {
    position: absolute;
    width: 50px;
    height: 50px;
    background: linear-gradient(
      120deg,
      #ff1744,
      #e040fb,
      #2979ff,
      #00e5ff,
      #76ff03
    );
    background-size: 1600% 1600%;
    mix-blend-mode: overlay;
    pointer-events: none;
    z-index: 50;
    transition: 0.15s linear;
    animation: blobRadius 5s ease infinite, blobBackground 15s ease infinite;
  }

  @keyframes blobRadius {
    0%,
    100% {
      border-radius: 43% 77% 80% 40% / 40% 40% 80% 80%;
    }
    20% {
      border-radius: 47% 73% 61% 59% / 47% 75% 45% 73%;
    }
    40% {
      border-radius: 46% 74% 74% 46% / 74% 58% 62% 46%;
    }
    60% {
      border-radius: 47% 73% 61% 59% / 40% 40% 80% 80%;
    }
    80% {
      border-radius: 50% 70% 52% 68% / 51% 61% 59% 69%;
    }
  }

  @keyframes blobBackground {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  :global(.cursor.hovering) {
    width: 100px;
    height: 100px;
  }
</style>
