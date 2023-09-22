<script>
  export let data = [];
</script>

<ul class="timeline space-y-12">
  {#each data as { date, title, description }, index}
    <li
      data-animate
      data-animation-direction={index % 2 == 0 ? "left" : "right"}
      class="timeline-container {index % 2 == 0
        ? 'left md:text-right'
        : 'right'}"
    >
      <p class="date heading-2 text-pink">{date}</p>
      <div class="content space-y-2">
        <h3 class=" heading-2 text-pink">{title}</h3>
        <p>
          {description}
        </p>
      </div>
    </li>
  {/each}
</ul>

<style>
  .timeline {
    position: relative;
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding: 15px 0;
    counter-reset: section;
  }

  .timeline::before {
    content: "";
    position: absolute;
    width: 2px;
    background: #d434fe;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }

  .timeline-container {
    padding: 15px 30px;
    position: relative;
    background: inherit;
    width: 50%;
  }

  .timeline-container.left {
    left: 0;
  }

  .timeline-container.right {
    left: 50%;
  }

  .timeline-container::after {
    content: "";
    position: absolute;
    top: calc(50% - 8px);
    background: #ffffff;
    border-radius: 16px;
    z-index: 1;

    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3em;
    height: 3em;
    background: linear-gradient(270deg, #903aff 0%, #d434fe 100%);
    outline: 0.5em solid #150e28;
    border-radius: 50%;
    counter-increment: section;
    content: counter(section);
    text-shadow: 0 1px 0 #424242;
  }
  .timeline-container.left::after {
    left: 100%;
    transform: translateX(-50%);
  }
  .timeline-container.right::after {
    /* right: 100%; */
    transform: translateX(-110%);
  }

  .timeline-container .date {
    position: absolute;
    display: inline-block;
    top: calc(50% + 8px);
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 1;
  }

  .timeline-container.left .date {
    right: -220px;
  }

  .timeline-container.right .date {
    left: -220px;
  }

  .timeline-container .content {
    max-width: 300px;
    padding: 30px;
  }
  .timeline-container.left .content {
    margin-left: auto;
  }
  /* .timeline-container.right .content {
    padding: 30px 30px 30px 90px;
  } */

  @media (max-width: 767.98px) {
    .timeline::before {
      left: 30px;
    }

    .timeline-container {
      width: 100%;
      padding-left: 60px;
    }

    .timeline-container.right {
      left: 0%;
    }

    .timeline-container.left::after,
    .timeline-container.right::after {
      left: 10px;
      bottom: -15px;
    }

    .timeline-container.left::after,
    .timeline-container.right::after {
      transform: unset;
      top: unset;
    }
    .timeline-container .content {
      margin-left: unset;
      max-width: unset !important;
    }

    .timeline-container .date {
      padding-left: 90px;
      text-align: left;
      right: 0px !important;
      left: 0px !important;
      bottom: 0;
      top: unset;
    }
  }
</style>
