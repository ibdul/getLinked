<script>
  let x = Math.random() * 100; // Initial x-coordinate
  let y = Math.random() * 100; // Initial y-coordinate
  let size = Math.random() * 50 + 20; // Random size between 20 and 70
  let opacity = Math.random() * 0.3 + 0.1; // Random opacity between 0.2 and 0.8

  // Function to update blob position
  function updateBlobPosition() {
    x += Math.random() * 8 - 4; // Random horizontal movement between -4 and 4
    y += Math.random() * 8 - 4; // Random vertical movement between -4 and 4

    // Ensure the blob stays within the viewport
    x = Math.max(0, Math.min(100, x));
    y = Math.max(0, Math.min(100, y));
  }

  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "cyan",
    "magenta",
  ];

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  let color = getRandomColor(); // Initial random color

  // Function to get a random color

  // Update blob position and color periodically
  setInterval(() => {
    updateBlobPosition();
    // Update the color
    // color = getRandomColor();
  }, 100);
</script>

<svg
  class="blob transition-default duration-1000"
  width={size}
  height={size}
  style="fill:{color}; opacity:{opacity}; left:{x}%; top:{y}%;"
>
  <!-- Define your blob shape here -->
  <circle cx="50%" cy="50%" r="50%" />
</svg>

<style>
  .blob {
    position: absolute;
    background: rgb(144 58 255 / 0.2);
    filter: blur(20px);
    height: 200px;
    width: 200px;
    border-radius: 30% 50% 20% 40%;
    animation: transform 20s ease-in-out infinite both alternate,
      movement_one 40s ease-in-out infinite both;
    /* position: absolute; */
    left: 70%;
    top: 50%;
    transition: 1s cubic-bezier(0.07, 0.8, 0.16, 1);
  }
</style>
