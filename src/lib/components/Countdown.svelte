<!-- src/components/Countdown.svelte -->

<script>
  import { onMount, onDestroy } from "svelte";

  let interval;
  let targetTime = new Date("2024-12-31T23:59:59"); // Replace with your target date and time
  let timeLeft = 0;

  // Function to update the countdown values
  function updateCountdown() {
    const now = new Date();
    timeLeft = targetTime - now;
  }

  onMount(() => {
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

    return {
      seconds: formattedSeconds,
      minutes: formattedMinutes,
      hours: formattedHours,
    };
  }
</script>

<p class="space-x-4">
  <span class="font-special text-[40px]">{formatTime(timeLeft).hours}</span>H
  <span class="font-special text-[40px]">{formatTime(timeLeft).minutes}</span>M
  <span class="font-special text-[40px]">{formatTime(timeLeft).seconds}</span>S
</p>
