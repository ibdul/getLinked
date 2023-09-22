<script>
  import { gsap } from "gsap";
  import { onMount } from "svelte";

  onMount(() => {
    const cursorOuter = document.querySelector(".cursor--large");
    const cursorInner = document.querySelector(".cursor--small");
    let isStuck = false;
    let idleTimeout;

    function setCursorIdleStyle() {
      gsap.to(cursorInner, {
        duration: 0.15,
        width: "50px",
        height: "50px",
        borderRadius: "20",
        backgroundColor: "#903AFF",
      });
      gsap.to(
        cursorInner.querySelectorAll("span"),
        {
          opacity: 1,
        },
        "<"
      );
    }

    function resetCursorIdleTimer() {
      gsap.to(cursorInner, {
        duration: 0.15,
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "#ff26b9",
      });
      gsap.to(
        cursorInner.querySelectorAll("span"),
        {
          opacity: 0,
        },
        "<"
      );

      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(setCursorIdleStyle, 2000);
    }

    document.addEventListener("mousemove", resetCursorIdleTimer);
    resetCursorIdleTimer(); // Initial setup

    let mouse = {
      x: -100,
      y: -100,
    };

    // Just in case you need to scroll
    let scrollHeight = 0;
    window.addEventListener("scroll", function (e) {
      scrollHeight = window.scrollY;
    });

    let cursorOuterOriginalState = {
      width: cursorOuter.getBoundingClientRect().width,
      height: cursorOuter.getBoundingClientRect().height,
    };
    const buttons = document.querySelectorAll(
      "button, a, input, textarea, select, .interactive"
    );

    buttons.forEach((button) => {
      button.addEventListener("pointerenter", handleMouseEnter);
      button.addEventListener("pointerleave", handleMouseLeave);
    });

    document.body.addEventListener("pointermove", updateCursorPosition);
    document.body.addEventListener("pointerdown", () => {
      gsap.to(cursorInner, 0.15, {
        scale: 2,
      });
    });
    document.body.addEventListener("pointerup", () => {
      gsap.to(cursorInner, 0.15, {
        scale: 1,
      });
    });

    function updateCursorPosition(e) {
      mouse.x = e.pageX;
      mouse.y = e.pageY;
    }

    function updateCursor() {
      gsap.set(cursorInner, {
        x: mouse.x,
        y: mouse.y,
      });

      if (!isStuck) {
        gsap.to(cursorOuter, {
          duration: 0.15,
          x: mouse.x - cursorOuterOriginalState.width / 2,
          y: mouse.y - cursorOuterOriginalState.height / 2,
        });
      }

      requestAnimationFrame(updateCursor);
    }

    updateCursor();

    function handleMouseEnter(e) {
      isStuck = true;
      const targetBox = e.currentTarget.getBoundingClientRect();
      gsap.to(cursorOuter, 0.2, {
        x: targetBox.left,
        y: targetBox.top + scrollHeight,
        width: targetBox.width,
        height: targetBox.height,
        borderRadius: 0,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderColor: "#903AFF",
      });
    }

    function handleMouseLeave(e) {
      isStuck = false;
      gsap.to(cursorOuter, 0.2, {
        width: cursorOuterOriginalState.width,
        height: cursorOuterOriginalState.width,
        borderRadius: "50%",
        backgroundColor: "transparent",
        borderColor: "#FF26B9",
      });
    }
  });
</script>

<div class="cursor-wrapper overflow-hidden">
  <div class="cursor cursor--large" />
  <div class="cursor cursor--small flex items-center justify-center">
    <span class="text-dark font-bold animate-bounce">.</span><span
      class="text-dark font-bold animate-bounce del">.</span
    ><span class="text-dark font-bold animate-bounce">.</span>
  </div>
</div>

<style>
  :global(body) {
    cursor: none;
  }

  .cursor {
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    z-index: 100;
  }
  .cursor--large {
    --size: 40px;
    border: 1px solid #ff26b9;
  }
  .cursor--small {
    --size: 10px;
    background: #ff26b9;
    transform: translate(-50%, -50%);
  }
</style>
