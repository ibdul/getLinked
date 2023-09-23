<script>
  import app_fetch from "$lib/app_fetch";
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import animatePage from "$lib/animations.js";
  import viewTransition from "$lib/viewTransitions";

  const modal_timeline = new gsap.timeline({ paused: true, reversed: true });

  function openSuccessModal() {
    modal_timeline.play();
  }
  function closeSuccessModal() {
    modal_timeline.reverse();
  }

  let form_data = {
    email: "",
    phone_number: "",
    team_name: "",
    group_size: "",
    project_topic: "",
    category: "",
    privacy_poclicy_accepted: false,
  };

  let categories = [];

  onMount(async () => {
    animatePage();
    // fetch categories
    app_fetch("categories-list").then(async (response) => {
      categories = await response.json();
    });

    modal_timeline
      .to(".page_wrapper", {
        duration: 0.4,
        scale: 0.9,
        opacity: 0.5,
        filter: "blur(8px)",
      })
      .from(
        ".modal_wrapper",
        { duration: 0.5, autoAlpha: 0, ease: "Power4.easeOut" },
        "-=0.5"
      )
      .from(
        ".modal_body",
        {
          duration: 0.5,
          y: 140,
          scale: 2,
          filter: "blur(4px)",
          ease: "Power4.easeOut",
        },
        "-=0.5"
      )
      .from(
        ".modal_element",
        {
          duration: 0.2,
          y: 40,
          stagger: 0.1,
          opacity: 0,
          scale: 2,
          ease: "Power4.easeOut",
        },
        "-=0.6"
      );
  });

  let errors = [];
  let busy = false;

  async function submitForm() {
    // reset states

    viewTransition(() => {
      busy = true;
      errors = [];
    });

    // validate data
    if (
      form_data.email == "" ||
      form_data.phone_number == "" ||
      form_data.team_name == "" ||
      form_data.group_size == "" ||
      form_data.project_topic == "" ||
      form_data.category == "" ||
      !form_data.privacy_poclicy_accepted
    ) {
      viewTransition(() => {
        errors = ["Please fill in information properly"];
      });
      return;
    }
    await app_fetch("registration", {
      method: "POST",
      body: JSON.stringify(form_data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        await response
          .json()
          .then((result) => {
            if (result.id) {
              openSuccessModal();
              form_data = {
                email: "",
                phone_number: "",
                team_name: "",
                group_size: "",
                project_topic: "",
                category: "",
                privacy_poclicy_accepted: false,
              };
            }
            viewTransition(() => {
              errors = [...errors, ...Object.values(result)];
            });
          })
          .catch((err) => {
            viewTransition(() => {
              errors = [
                ...errors,
                "Something went wrong, please try again later",
              ];
            });
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
  <title>getLinked - Register for our hackathon</title>
</svelte:head>

<main class="page_wrapper min-h-[80vh] flex items-center justify-center">
  <div
    class="max-w-6xl container lg:grid grid-cols-2 space-y-4 py-10 lg:py-20 items-center"
  >
    <div class="hidden max-lg:block">
      <h2 class="heading-1 text-pink">Register</h2>
    </div>

    <div
      data-animate
      data-animation="pop"
      data-animation-is-not-scroll-triggered
      class="relative"
    >
      <div class="pointer-events-none absolute inset-0">
        <img
          src="/images/stars/star2.png"
          loading="lazy"
          alt="star"
          class="not-sr-only -top-12 left-0 absolute animate-pulse scale-50"
        />
        <img
          src="/images/stars/star2.png"
          loading="lazy"
          alt="star"
          class="not-sr-only bottom-0 -right-12 z-10 absolute animate-pulse scale-50"
        />
        <img
          src="/images/stars/star.png"
          loading="lazy"
          alt="star"
          class="not-sr-only bottom-0 -left-12 z-10 absolute animate-pulse scale-50"
        />
      </div>
      <img
        class="max-lg:mx-auto max-lg:w-[80%]"
        src="/images/3d-graphic-designer-showing-thumbs-up.webp"
        alt="3d graphic designer showing thumbs up"
      />
    </div>
    <div
      data-animate
      data-animation-direction="down"
      data-animation-delay=".5"
      data-animation-is-not-scroll-triggered
      class="relative space-y-8 max-w-lg container lg:bg-white/[3%] px-2 lg:px-10 py-6 lg:py-20 rounded-md lg:shadow-md backdrop-filter backdrop-blur-sm border border-white/[1%]"
    >
      <div class="pointer-events-none absolute inset-0">
        <img
          src="/images/stars/star.png"
          alt="star"
          loading="lazy"
          class="not-sr-only top-0 right-16 absolute animate-pulse scale-75"
        />
        <img
          src="/images/stars/star.png"
          alt="star"
          loading="lazy"
          class="not-sr-only -bottom-4 right-12 absolute animate-pulse scale-50"
        />
      </div>
      <div class="space-y-6">
        <h2 class="heading-1 text-pink max-lg:hidden">Register</h2>
        <p class="lg:text-sm max-lg:text-center">
          Be part of this movement 🚶🏾‍♂️🚶🏾‍♂️
        </p>
      </div>
      <h2 class="text-3xl max-lg:text-center lg:text-[20px]">
        CREATE YOUR ACCOUNT
      </h2>
      <form class="space-y-4" on:submit|preventDefault={submitForm}>
        <div class="grid lg:grid-cols-2 gap-4">
          <fieldset>
            <label>
              Team's Name
              <input
                type="text"
                name="team's name"
                placeholder="Enter the name of your group"
                required
                bind:value={form_data.team_name}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              Phone
              <input
                type="tel"
                name="phone number"
                placeholder="Enter your phone number"
                required
                bind:value={form_data.phone_number}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                bind:value={form_data.email}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              Project Topic
              <input
                type="text"
                name="topic"
                placeholder="Enter your group project topic"
                required
                bind:value={form_data.project_topic}
              />
            </label>
          </fieldset>
          <div class="lg:col-span-2 grid grid-cols-2 gap-4">
            <fieldset>
              <label>
                Category
                <select
                  name="category"
                  bind:value={form_data.category}
                  required
                >
                  <option value="" disabled selected>Select a category</option>
                  {#each categories as category}
                    <option value={category.id}>
                      {category.name}
                    </option>
                  {/each}
                </select>
              </label>
            </fieldset>
            <fieldset>
              <label>
                Group Size
                <input
                  type="number"
                  name="group size"
                  placeholder="Enter a group size"
                  min="1"
                  max="20"
                  required
                  bind:value={form_data.group_size}
                />
              </label>
            </fieldset>
          </div>
        </div>
        <p class="text-pink-200 italic text-sm">
          Please review your registration details before submitting
        </p>
        <p class="text-sm">
          <label class="flex items-center gap-2 relative max-md:gap-4">
            <input
              type="checkbox"
              name="terms and conditions"
              class="w-min"
              required
              bind:value={form_data.privacy_poclicy_accepted}
            />
            <span class="checkmark" />
            <span class="checkmark_ghost" />
            I agreed with the event terms and conditions and privacy policy
          </label>
        </p>
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
    </div>
  </div>
</main>

<div
  class="modal_wrapper invisible fixed inset-0 z-10 min-h-screen items-center justify-center"
>
  <button
    class="absolute inset-0 bg-dark/90 cursor-default"
    on:click={closeSuccessModal}
  />
  <div class="relative w-max container text-center p-10">
    <div
      class="modal_body max-w-xl container border-pink border rounded-sm flex flex-col items-center gap-6 p-10"
    >
      <img
        class="modal_element"
        src="/images/congratulation.webp"
        alt="boy jumping up in happiness"
      />
      <h2 class="modal_element font-bold">
        Congratulations
        <span class="block">you have successfully Registered!</span>
      </h2>
      <p class="modal_element text-sm">
        Yes, it was easy and you did it!<br />check your mail box for next step
      </p>
      <button class="modal_element btn w-full" on:click={closeSuccessModal}
        >Back</button
      >
    </div>
  </div>
</div>

<style>
</style>
