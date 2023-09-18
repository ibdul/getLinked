<script>
  import "../app.css";
</script>

<div class="bg-dark min-h-screen text-white">
  <header>
    <div class="max-w-6xl container flex items-center justify-between py-6">
      <a href="/">
        <h2 class="text-[26px] heading-1">
          get<span class="text-pink">linked</span>
        </h2>
      </a>
      <nav class="flex gap-10 items-center">
        <ul class="flex items-center gap-8">
          <li><a href="/#timeline">Timeline</a></li>
          <li><a href="/#overview">Overview</a></li>
          <li><a href="/#faqs">FAQs</a></li>
          <li><a href="/contact-us">Contact</a></li>
        </ul>
        <a href="/register" class="btn"> Register </a>
      </nav>
    </div>
  </header>
  <slot />
</div>
