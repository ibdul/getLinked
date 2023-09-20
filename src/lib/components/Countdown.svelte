<!-- src/components/Countdown.svelte -->

<script>
  import Countup from "svelte-countup";

  import { onMount, onDestroy, tick } from "svelte";

  let interval;
  let targetDate = new Date("2023-12-31T23:59:59").getTime(); // Replace with your target date and time

  let currentTime = 0;
  let elapsedMilliseconds = 0;

  // Function to update the countdown values
  function updateCountdown() {
    const now = new Date().getTime();
    elapsedMilliseconds = now - currentTime;
  }

  onMount(() => {
    currentTime = new Date().getTime();
    updateCountdown();
    interval = setInterval(updateCountdown, 1000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  // Function to format milliseconds into HH:MM:SS format
  function formatTime(milliseconds) {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedHours = hours < 10 ? `0${hours}` : hours;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
</script>

<div class="countdown">
  <div class="countdown-item">
    <span>{formatTime(elapsedMilliseconds)}</span>
  </div>
</div>

<Countup
  initial={0}
  value={200}
  duration={3000}
  step={1}
  roundto={1}
  format={true}
/>

<style>
  /* Add your countdown styles here */
</style>
