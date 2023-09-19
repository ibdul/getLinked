<script>
  import Blob from "../../lib/components/Blob.svelte";
  import socials from "$lib/socials";
</script>

<svelte:head>
  <title>getLinked - contact us - get more information about us</title>
</svelte:head>

<main class="min-h-[80vh] flex items-center justify-center">
  <div class="max-w-5xl container lg:grid grid-cols-2 space-y-4 lg:py-20">
    <div class="space-y-6 max-lg:hidden">
      <h1 class="heading-1 text-pink">Get in touch</h1>
      <ul class="max-w-sm space-y-6">
        <li><p>Contact <span class="block">Information</span></p></li>
        <li>
          <p>
            27,Alara Street <span class="block">Yaba 100012</span>
            <span class="block">Lagos State</span>
          </p>
        </li>
        <li><p>Call Us : 07067981819</p></li>
        <li>
          <p>
            we are open from Monday-Friday <span class="block"
              >08:00am - 05:00pm</span
            >
          </p>
        </li>
      </ul>
      <div class="space-y-2">
        <h2 class="heading-2 text-pink">Share on</h2>
        <ul class="flex items-center gap-4">
          {#each $socials as social_link}
            <li>
              <a href={social_link.link} title="share on {social_link.title}">
                <img
                  src="/images/socials/{social_link.title}.svg"
                  alt="{social_link.title} icon"
                />
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    <div
      class="space-y-8 max-w-lg lg:bg-white/[3%] lg:px-10 lg:py-20 rounded-md lg:shadow-md max-lg:flex max-lg:h-[80vh] flex-col justify-between"
    >
      <div class="space-y-2">
        <h2 class="max-lg:heading-1 heading-2 text-pink">
          Questions or need assistance?
          <br />Let us know about it!
        </h2>
        <p class="text-sm">
          Email us below to any question related to our event
        </p>
      </div>
      <form class="space-y-4">
        <fieldset>
          <input type="text" name="first name" placeholder="First name" />
        </fieldset>
        <fieldset>
          <input type="text" name="subject" placeholder="Enter message topic" />
        </fieldset>
        <fieldset>
          <input type="email" name="email" placeholder="Email" />
        </fieldset>
        <fieldset>
          <textarea
            name="message"
            placeholder="Message"
            class="max-lg:min-h-[100px]"
          />
        </fieldset>
        <div class="flex justify-center">
          <button class="btn">Submit</button>
        </div>
      </form>
      <div class="lg:hidden space-y-2 text-center">
        <h2 class="heading-2 text-pink">Share on</h2>
        <ul class="flex items-center justify-center gap-4">
          {#each socials as social_link}
            <li>
              <a href={social_link.link} title="share on {social_link.title}">
                <img
                  src="/images/socials/{social_link.title}.svg"
                  alt="{social_link.title} icon"
                />
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>

  <div class="absolute left-0 translate-x-[-30%]">
    <Blob />
  </div>
</main>
