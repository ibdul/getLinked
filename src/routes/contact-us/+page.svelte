<script>
  import Blob from "../../lib/components/Blob.svelte";
</script>

<main class="min-h-[80vh] flex items-center justify-center">
  <div class="max-w-5xl container grid grid-cols-2 py-20 items-center">
    <div class="space-y-6">
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
        <ul class="flex items-center gap-2">
          {#each [1, 2, 3, 4] as _}
            <li class="bg-white w-4 h-4" />
          {/each}
        </ul>
      </div>
    </div>
    <div
      class="space-y-8 max-w-lg bg-white/[3%] px-10 py-20 rounded-md shadow-md"
    >
      <div>
        <h2 class="heading-2 text-pink">Questions or need assistance?</h2>
        <h2 class="heading-2 text-pink">Let us know about it!</h2>
      </div>
      <form class="space-y-4">
        <fieldset>
          <input type="text" name="first name" placeholder="First name" />
        </fieldset>
        <fieldset>
          <input type="email" name="email" placeholder="Email" />
        </fieldset>
        <fieldset>
          <textarea name="message" placeholder="Message" />
        </fieldset>
        <div class="flex justify-center">
          <button class="btn">Submit</button>
        </div>
      </form>
    </div>
  </div>

  <div class="absolute left-0 translate-x-[-30%]">
    <Blob />
  </div>
</main>
