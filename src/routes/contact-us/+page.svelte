<script>
  import socials from "$lib/socials";
  import app_fetch from "$lib/app_fetch";
  import animatePage from "$lib/animations.js";
  import { onMount } from "svelte";
  import viewTransition from "$lib/viewTransitions";

  onMount(() => {
    animatePage();
  });

  const form_data = {
    email: "",
    phone_number: "",
    first_name: "",
    message: "",
  };

  let errors = [];
  let busy = false;
  let success = false;

  async function submitForm() {
    // reset states
    viewTransition(() => {
      errors = [];
      success = false;
      busy = true;
    });

    // validate data
    if (
      form_data.email == "" ||
      form_data.phone_number == "" ||
      form_data.first_name == "" ||
      form_data.message == ""
    ) {
      viewTransition(() => {
        errors = ["Please fill in information properly"];
      });
      return;
    }
    await app_fetch("contact-form", {
      method: "POST",
      body: JSON.stringify(form_data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        let result = await response.json();
        viewTransition(() => {
          success = true;
        });
      })
      .catch(async (err) => {
        viewTransition(() => {
          errors = [...errors, "Something went wrong, please try again later"];
        });
      })
      .finally(() => {
        viewTransition(() => {
          busy = false;
        });
      });
  }
</script>

<svelte:head>
  <title>getLinked - contact us - get more information about us</title>
</svelte:head>

<main class="min-h-[80vh] flex items-center justify-center">
  <div
    class="max-w-5xl container lg:grid grid-cols-2 items-center space-y-4 py-10 lg:py-20"
  >
    <div class="relative space-y-6 max-lg:hidden">
      <div class="pointer-events-none absolute inset-0">
        <img
          src="/images/stars/star.png"
          alt="star"
          class="not-sr-only animate-pulse scale-50"
        />
      </div>
      <h1
        class="heading-1 text-pink"
        data-animate-text
        data-animation-direction="left"
        data-animation-delay="1"
      >
        Get in touch
      </h1>
      <ul
        class="max-w-sm space-y-6"
        data-animate
        data-animation-direction="left"
        data-animation-delay="1"
      >
        <li>
          <p>
            Contact <span class="block">Information</span>
          </p>
        </li>
        <li>
          <p>
            27, Alara Street <span class="block"> Yaba 100012 </span>
            <span class="block"> Lagos State</span>
          </p>
        </li>
        <li><p>Call Us : <a href="tel:07067981819">07067981819</a></p></li>
        <li>
          <p>
            We are open from Monday-Friday <span class="block"
              >08:00am - 05:00pm</span
            >
          </p>
        </li>
      </ul>
      <div class="space-y-2">
        <h2
          class="heading-2 text-pink"
          data-animate-text
          data-animation-is-not-scroll-triggered
          data-animation-delay="1.5"
          data-animation-selection="letters"
        >
          Share on
        </h2>
        <ul
          class="flex items-center gap-4"
          data-animate
          data-animation-direction="up"
          data-animation-is-not-scroll-triggered
          data-animation-delay="1.8"
        >
          {#each $socials as social_link}
            <li>
              <a href={social_link.link} title="share on {social_link.title}">
                <img
                  src="/images/socials/{social_link.title}.webp"
                  alt="{social_link.title} icon"
                />
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    <div
      data-animate
      data-animation-direction="down"
      class="space-y-8 max-w-lg container lg:bg-white/[3%] px-2 lg:px-10 py-6 lg:py-20 rounded-md lg:shadow-md backdrop-filter backdrop-blur-sm border border-white/[1%]"
    >
      {#if success}
        <div
          class="flex-1 h-full space-y-2 text-center flex items-center flex-col justify-center"
        >
          <h2 class="max-lg:heading-1 heading-2 text-pink">Success</h2>
          <p class="text-sm">Your message was successfully sent</p>
        </div>
      {:else}
        <div class="space-y-2">
          <h2 class="max-lg:heading-1 heading-2 text-pink">
            Questions or need assistance?
            <br />Let us know about it!
          </h2>
          <p class="text-sm">
            Email us below to any question related to our event
          </p>
        </div>
        <form class="space-y-4" on:submit|preventDefault={submitForm}>
          <fieldset>
            <input
              type="text"
              name="first name"
              placeholder="Enter your first name"
              required
              bind:value={form_data.first_name}
            />
          </fieldset>
          <fieldset>
            <input
              type="tel"
              name="phone number"
              placeholder="Enter your phone number"
              required
              bind:value={form_data.phone_number}
            />
          </fieldset>
          <fieldset>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              bind:value={form_data.email}
            />
          </fieldset>
          <fieldset>
            <textarea
              name="message"
              placeholder="Enter your message"
              class="max-lg:min-h-[100px]"
              required
              bind:value={form_data.message}
            />
          </fieldset>

          <ul class="text-center text-red-500 text-sm">
            {#each errors as error}
              <li>{error}</li>
            {/each}
          </ul>
          <div class="flex justify-center submit-btns-wrapper">
            {#if busy}
              <button
                disabled
                class="flex items-center justify-center gap-2 btn-disabled"
              >
                <span
                  class="flex items-center justify-center w-4 h-4 border-2 border-t-transparent rounded-full animate-spin"
                >
                  <span
                    class="w-2 h-2 border-2 border-t-transparent rounded-full animate-spin"
                  />
                </span>
                submitting
              </button>
            {:else}
              <button class="btn" type="submit">Submit</button>
            {/if}
          </div>
        </form>
      {/if}
      <div class="lg:hidden space-y-2 text-center">
        <h2 class="heading-2 text-pink">Share on</h2>
        <ul class="flex items-center justify-center gap-4">
          {#each $socials as social_link}
            <li>
              <a href={social_link.link} title="share on {social_link.title}">
                <img
                  src="/images/socials/{social_link.title}.webp"
                  alt="{social_link.title} icon"
                />
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</main>
