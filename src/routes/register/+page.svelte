<script>
  import Blob from "../../lib/components/Blob.svelte";
</script>

<main class="min-h-[80vh] flex items-center justify-center">
  <div
    class="max-w-6xl container lg:grid grid-cols-2 space-y-4 lg:py-20 items-center"
  >
    <div class="hidden max-lg:block">
      <h2 class="heading-1 text-pink">Register</h2>
    </div>

    <div>
      <img
        src="/images/3d-graphic-designer-showing-thumbs-up.png"
        alt="3d graphic designer showing thumbs up"
      />
    </div>
    <div
      class="space-y-8 max-w-lg lg:max-lg:container lg:bg-white/[3%] lg:px-10 lg:py-20 rounded-md lg:shadow-md"
    >
      <div class="space-y-6">
        <h2 class="heading-1 text-pink max-lg:hidden">Register</h2>
        <p class="text-sm">Be part of this movement 🚶🏾‍♂️🚶🏾‍♂️</p>
      </div>
      <h2 class="font-[20px]">CREATE YOUR ACCOUNT</h2>
      <form class="space-y-4">
        <div class="grid lg:grid-cols-2 gap-4">
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
              Project Topic
              <input
                type="text"
                name="topic"
                required
                placeholder="What is your group project topic"
              />
            </label>
          </fieldset>
          <div class="lg:col-span-2 grid grid-cols-2 gap-4">
            <fieldset>
              <label>
                Category
                <input
                  type="text"
                  name="category"
                  required
                  placeholder="Select"
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
          <button class="btn lg:w-full">Submit</button>
        </div>
      </form>
    </div>
  </div>

  <div class="absolute left-0 translate-x-[-30%]">
    <Blob />
  </div>
</main>

<div class="relative bg-dark/90 min-h-screen">
  <div class="absolute inset-0 h-screen text-center">
    <div
      class="max-w-xl container border-pink border rounded-sm flex flex-col items-center gap-6 p-10"
    >
      <img src="/images/congratulation.png" alt="boy jumping up in happiness" />
      <h2 class="font-bold">
        Congratulations
        <span class="block">you have successfully Registered!</span>
      </h2>
      <p class="text-sm">
        Yes, it was easy and you did it!<br />check your mail box for next step
      </p>
      <button class="btn w-full">Back</button>
    </div>
  </div>
</div>
