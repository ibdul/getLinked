<script>
  import Blob from "../../lib/components/Blob.svelte";
</script>

<main class="min-h-[80vh] flex items-center justify-center">
  <div class="max-w-6xl container grid grid-cols-2 py-20 items-center">
    <div />
    <div
      class="space-y-8 max-w-lg bg-white/[3%] px-10 py-20 rounded-md shadow-md"
    >
      <div class="space-y-6">
        <h2 class="heading-1 text-pink">Register</h2>
        <p class="text-sm">Be part of this movement 🚶🏾‍♂️🚶🏾‍♂️</p>
      </div>
      <h2 class="font-[20px]">CREATE YOUR ACCOUNT</h2>
      <form class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <fieldset>
            <label>
              Team's Name
              <input
                type="text"
                name="team's name"
                placeholder="Enter the name of your group"
                required
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              Phone
              <input
                type="tel"
                name="phone number"
                required
                placeholder="Enter your phone number"
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              Email
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              Group Size
              <input
                type="text"
                name="group size"
                required
                placeholder="Select"
              />
            </label>
          </fieldset>
        </div>
        <p class="text-pink-200 italic text-sm">
          Please review your registration details before submitting
        </p>
        <p class="text-sm">
          <label class="flex items-center gap-2">
            <input
              type="checkbox"
              name="terms and conditions"
              class="w-min"
              required
            />
            I agreed with the event terms and conditions and privacy policy
          </label>
        </p>
        <div class="flex justify-center">
          <button class="btn w-full">Submit</button>
        </div>
      </form>
    </div>
  </div>

  <div class="absolute left-0 translate-x-[-30%]">
    <Blob />
  </div>
</main>
