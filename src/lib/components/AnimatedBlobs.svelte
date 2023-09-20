<div class="container">
  <div class="blob" />
  <div class="blob one" />
  <div class="blob two" />
  <div class="blob x" />
</div>

<style>
  /* aspect-square w-[400px] bg-purple/20 rounded-full blur-2xl block */
  .blob {
    position: absolute;
    background: rgb(144 58 255 / 0.2);
    filter: blur(20px);
    height: 200px;
    width: 200px;
    border-radius: 30% 50% 20% 40%;
    animation: transform 20s ease-in-out infinite both alternate,
      movement_one 40s ease-in-out infinite both;
    opacity: 0.7;
    /* position: absolute; */
    left: 70%;
    top: 50%;
    transition: 1s cubic-bezier(0.07, 0.8, 0.16, 1);
  }

  .blob:hover,
  .blob:active,
  .blob:focus {
    pointer-events: none;
  }
  .blob:hover {
    width: 520px;
    height: 520px;
    -webkit-filter: blur(30px);
    filter: blur(30px);
    box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.6),
      inset 100px 100px 0 0px #fa709a, inset 200px 200px 0 0px #784ba8,
      inset 300px 300px 0 0px #2b86c5;
  }

  .blob.x {
    width: 500px;
    height: 500px;
    mix-blend-mode: color-dodge;
    -webkit-animation: move 25s infinite alternate;
    animation: move 25s infinite alternate;
  }

  .blob.one {
    height: 500px;
    width: 500px;
    left: -200px;
    top: -150px;
    transform: rotate(-180deg);
    animation: transform 30s ease-in-out infinite both alternate,
      movement_two 60s ease-in-out infinite both;
  }

  .blob.two {
    height: 350px;
    width: 350px;
    left: 500px;
    top: -150px;
    transform: rotate(-180deg);
    animation: transform 30s ease-in-out infinite both alternate,
      movement_two 60s ease-in-out infinite both;
  }

  @keyframes transform {
    0%,
    100% {
      border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
    }
    20% {
      border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%;
    }
    40% {
      border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%;
    }
    60% {
      border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%;
    }
    80% {
      border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%;
    }
  }

  @keyframes movement_one {
    0%,
    100% {
      transform: none;
    }
    50% {
      transform: translate(50%, 20%) rotateY(10deg) scale(1.2);
    }
  }

  @keyframes movement_two {
    0%,
    500% {
      transform: none;
    }
    50% {
      transform: translate(50%, 20%) rotate(-200deg) scale(1.2);
    }
  }

  @-webkit-keyframes move {
    from {
      transform: translate(-100px, -50px) rotate(-90deg);
      border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
    }

    to {
      transform: translate(500px, 100px) rotate(-10deg);
      border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
    }
  }

  @keyframes move {
    from {
      transform: translate(-100px, -50px) rotate(-90deg);
      border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
    }

    to {
      transform: translate(500px, 100px) rotate(-10deg);
      border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
    }
  }
</style>
