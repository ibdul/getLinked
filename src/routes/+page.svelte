<script>
  import socials from "$lib/socials";
  const judging_criteria = [
    {
      title: "Innovation and Creativity",
      description:
        "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel  way or introduces innovative features.",
    },
    {
      title: "Functionality",
      description:
        "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
    },
    {
      title: "Impact and Relevance",
      description:
        "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social,  economic, or environmental benefits.",
    },
    {
      title: "Technical Complexity",
      description:
        "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
    },
    {
      title: "Adherence to Hackathon Rules",
      description:
        "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
    },
  ];
  const FAQs = [
    {
      question: "Can I work on a project I started before the hackathon?",
      answer:
        "Yes, you can work on a project you started before the hackathon. However, you must disclose this information to the judges during the judging process.",
    },
    {
      question: "What happens if I need help during the hackathon?",
      answer:
        "We will have mentors available to help you with any technical or non-technical issues you may face during the hackathon. You can also reach out to the organizers via the Discord server.",
    },
    {
      question: "What happens if I don't have an idea for a project?",
      answer:
        "We will have mentors available to help you with any technical or non-technical issues you may face during the hackathon. You can also reach out to the organizers via the Discord server.",
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer:
        "You can join a team or come with one. If you don't have a team, we will have a team formation session at the beginning of the hackathon where you can meet other participants and form a team.",
    },
    {
      question: "What happens after the hackathon ends",
      answer:
        "Each team's project would be evaluated by the judges, and the winners would be announced. The top three teams would be awarded prizes. The other teams would be mentored to help them improve and  complete their projects.",
    },
  ];
  const timeline = [
    {
      date: "November 18, 2023",
      title: "Hackathon Announcement",
      description:
        "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
    },
    {
      date: "November 18, 2023",
      title: "Teams Registration begins",
      description:
        "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
    },
    {
      date: "November 18, 2023",
      title: "Teams Registration ends",
      description: "Interested Participants are no longer Allowed to register",
    },
    {
      date: "November 18, 2023",
      title: "Announcement of the accepted teams and ideas",
      description:
        "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
    },
    {
      date: "November 18, 2023",
      title: "Getlinked Hackathon 1.0 Offically Begins",
      description:
        "Accepted teams can now proceed to build their ground breaking skill driven solutions",
    },
    {
      date: "November 18, 2023",
      title: "Demo Day",
      description:
        "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
    },
  ];

  const partners = [
    {
      title: "liberty-assured",
    },
    {
      title: "liberty-pay",
    },
    {
      title: "win-wise",
    },
    {
      title: "whispersms",
    },
    {
      title: "paybox",
    },
    {
      title: "vusual-plus",
    },
  ];
</script>

<svelte:head>
  <title>getLinked Hackathon 1.0</title>
</svelte:head>

<main class="divide-y divide-white/[18%]">
  <section id="hero" class="max-lg:text-center">
    <div
      class="relative max-w-6xl container lg:grid grid-cols-2 items-center space-y-4"
    >
      <h2
        class="lg:absolute top-0 right-0 font-bold text-[20px] lg:text-[24px] italic lg:px-4"
      >
        Igniting a Revolution in <span class="relative"
          >HR Innovation <img
            src="/images/stroke.svg"
            class="absolute inset-x-0 -bottom-4"
            alt="stroke"
          /></span
        >
      </h2>
      <div class="space-y-8">
        <div class="space-y-4">
          <h1 class="title-1">
            getlinked Tech
            <br />
            Hackathon <span class="text-pink">1.0</span><span
              class="text-[30px]">🔗🔥</span
            >
          </h1>
          <p class="max-w-md max-lg:container max-lg:max-w-lg">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
        </div>
        <p>
          <a href="/register" class="btn">Register</a>
        </p>

        <p class="space-x-4">
          <span class="font-special text-[40px]">00</span>H
          <span class="font-special text-[40px]">00</span>M
          <span class="font-special text-[40px]">00</span>S
        </p>
      </div>
      <div class="lg:min-h-[80vh] relative">
        <img
          src="/images/hero-stary-field.png"
          alt="hero stary field"
          class="absolute inset-x-0"
        />
        <img
          src="/images/man-wearing-smart-glasses-touching-virtual-screen.png"
          alt="man wearing smart glasses touching virtual screen"
        />
      </div>
    </div>
  </section>
  <section id="overview">
    <div
      class="max-w-6xl container grid lg:grid-cols-2 max-lg:gap-6 max-lg:text-center items-center"
    >
      <div>
        <img
          src="/images/the-big-idea.png"
          alt="infographic showing different elements and how they link together to form an idea"
        />
      </div>
      <div class="space-y-4">
        <h2 class="heading-1">
          Introduction to getlinked
          <span class="text-purple block"> tech Hackathon 1.0 </span>
        </h2>
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </div>
  </section>
  <section>
    <div
      class="max-w-6xl container grid lg:grid-cols-2 max-lg:text-center items-center"
    >
      <div class="space-y-4">
        <h2 class="heading-1">
          Rules and
          <span class="block text-purple">Guidelines</span>
        </h2>
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <div class="max-lg:order-first">
        <img src="/images/woman-with-tab.png" alt="woman with tablet" />
      </div>
    </div>
  </section>
  <section>
    <div
      class="max-w-6xl container lg:grid grid-cols-2 max-lg:text-center items-center"
    >
      <div>
        <img
          src="/images/two-people-doing-some-analysis.png"
          alt="two people doing some analysis"
        />
      </div>
      <div class="space-y-8">
        <h2 class="heading-1">
          Judging Criteria
          <span class="block text-purple">Key attributes</span>
        </h2>
        <ul class="space-y-4">
          {#each judging_criteria as { title, description }}
            <li>
              <h3 class="text-pink-200 font-bold inline">
                {title}:
              </h3>

              <p class="inline">
                {description}
              </p>
            </li>
          {/each}
        </ul>
        <a href="#" class="btn">Read More</a>
      </div>
    </div>
  </section>
  <section id="faqs">
    <div class="max-w-6xl container lg:grid grid-cols-2">
      <div class="space-y-12">
        <div class="space-y-4 max-lg:text-center">
          <h2 class="heading-1">
            Frequently Asked
            <span class="block text-purple">Questions</span>
          </h2>
          <p>
            We got answers to the questions that you might want to ask about <span
              class="font-bold">getlinked Hackathon 1.0</span
            >
          </p>
        </div>
        <ul class="divide-y divide-pink">
          {#each FAQs as { question, answer }}
            <li>
              <div class="flex items-center justify-between py-4">
                <h3>{question}</h3>
                <span class="text-pink text-[20px]">+</span>
              </div>
            </li>
          {/each}
        </ul>
      </div>
      <div>
        <img
          src="/images/man-thinking.png"
          alt="man sitting on cloud and thinking"
        />
      </div>
    </div>
  </section>
  <section id="timeline">
    <div class="max-w-6xl container">
      <div class="text-center max-w-sm container">
        <h2 class="heading-1">Timeline</h2>
        <p>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <ul class="space-y-8">
        {#each timeline as { date, title, description }, index}
          <li class="flex justify-between items-center">
            <h3 class="heading-2 text-pink">{date}</h3>
            <div
              class="w-6 h-6 rounded-full bg-pink flex items-center justify-center"
            >
              {index + 1}
            </div>
            <div class="space-y-4 max-w-sm">
              <h3 class="heading-2 text-pink">{title}</h3>
              <p>{description}</p>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </section>
  <section>
    <div class="max-w-6xl container lg:grid grid-cols-2 max-lg:space-y-12">
      <div class="text-center lg:hidden">
        <h2 class="heading-1">
          Prizes and
          <span class="text-purple block">Rewards</span>
        </h2>
        <p>
          Highlight of the prizes or rewards for winners and for participants.
        </p>
      </div>
      <div>
        <img src="/images/trophy.png" alt="trophy for winner" />
      </div>
      <div class="space-y-32">
        <div class="max-lg:hidden">
          <h2 class="heading-1">
            Prizes and
            <span class="text-purple block">Rewards</span>
          </h2>
          <p>
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
        <ul
          class="flex items-center justify-center gap-4 text-2xl font-bold text-center"
        >
          <li
            class="relative pt-20 pb-10 bg-pink/[12%] px-2 sm:px-6 border border-pink rounded-md"
          >
            <div
              class="absolute inset-x-0 top-0 translate-y-[-50%] flex justify-center"
            >
              <img
                src="/images/silver_medal.png"
                alt="silver medal"
                class="w-[70%]"
              />
            </div>
            <h3>2nd</h3>
            <p class="text-lg font-semibold">Place</p>
            <p class="text-pink">N300,000</p>
          </li>
          <li
            class="relative pt-32 pb-10 bg-purple/[12%] px-2 sm:px-6 border border-purple rounded-md"
          >
            <div
              class="absolute inset-x-0 top-0 translate-y-[-50%] flex justify-center"
            >
              <img src="/images/gold_medal.png" alt="gold medal" />
            </div>
            <h3>1st</h3>
            <p class="text-lg font-semibold">Place</p>
            <p class="text-purple">N400,000</p>
          </li>
          <li
            class="relative pt-20 pb-10 bg-pink/[12%] px-2 sm:px-6 border border-pink rounded-md"
          >
            <div
              class="absolute inset-x-0 top-0 translate-y-[-50%] flex justify-center"
            >
              <img
                src="/images/bronze_medal.png"
                alt="bronze medal"
                class="w-[70%]"
              />
            </div>
            <h3>2nd</h3>
            <p class="text-lg font-semibold">Place</p>
            <p class="text-pink">N150,000</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section>
    <div class="max-w-6xl container text-center space-y-8">
      <div class="max-w-lg container space-y-4">
        <h2 class="heading-1">Partners and Sponsors</h2>
        <p>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div
        class="w-full border border-pink rounded-sm min-h-[100px] flex items-center justify-center p-10"
      >
        <ul class="grid grid-cols-3 gap-16 md:gap-20 items-center relative">
          {#each partners as partner}
            <li class="flex items-center justify-center md:px-10">
              <img
                src="/images/partners/{partner.title}.png"
                alt="{partner.title} logo"
              />
            </li>
          {/each}
          <div class="absolute inset-0 pointer-events-none">
            <div class="absolute inset-0 flex items-center">
              <span class="w-full h-[2px] bg-pink" />
            </div>
            <div
              class="px-10 absolute inset-0 flex items-center justify-around"
            >
              <span class="h-full w-[2px] bg-pink" />
              <span class="h-full w-[2px] bg-pink" />
            </div>
            <div
              class="px-10 absolute inset-0 flex items-center justify-around"
            >
              <span class="rounded-full my-auto h-6 w-6 bg-dark" />
              <span class="rounded-full my-auto h-6 w-6 bg-dark" />
            </div>
          </div>
        </ul>
      </div>
    </div>
  </section>
  <section>
    <div class="max-w-6xl container lg:grid grid-cols-2 max-lg:text-center">
      <div class="space-y-8">
        <div class="space-y-2">
          <h2 class="heading-1">
            Privacy Policy and
            <span class="text-purple block">Terms</span>
          </h2>
          <p>Last updated on September 12, 2023</p>
        </div>
        <p>
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>
        <div
          class="border border-pink rounded-[4px] p-16 bg-[#D9D9D9]/[3%] space-y-10"
        >
          <p>
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <div class="space-y-4 text-left">
            <div class="font-bold">
              <h3 class="text-pink">Licensing Policy</h3>
              <p>Here are terms of our Standard License:</p>
            </div>
            <ul class="space-y-4">
              <li class="flex items-start gap-4">
                <img
                  src="/images/privacy-item.svg"
                  alt="check sign"
                  class="py-1"
                />
                <p>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </li>
              <li class="flex items-start gap-4">
                <img
                  src="/images/privacy-item.svg"
                  alt="check sign"
                  class="py-1"
                />
                <p>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </li>
            </ul>
          </div>
          <div class="flex justify-center">
            <a href="#" class="btn">Read More</a>
          </div>
        </div>
      </div>
      <div class="relative">
        <img
          src="/images/sheild-lock.png"
          class="absolute inset-0"
          alt="lock inside shield"
        />
        <img src="/images/man-lock.png" alt="man standing on lock" />
      </div>
    </div>
  </section>
</main>
<footer class="bg-[#100B20] text-sm py-12">
  <div class="max-w-6xl container space-y-6">
    <div class="max-lg:space-y-8 lg:grid grid-cols-2">
      <div class="max-lg:space-y-8 space-y-16">
        <div class="space-y-2">
          <a href="/">
            <h2 class="text-[26px] heading-1">
              get<span class="text-pink">linked</span>
            </h2>
          </a>
          <p class="max-w-sm">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
        </div>
        <ul class="flex items-center divide-x-2 divide-purple">
          <li class="pr-4"><a href="#">Terms of Use</a></li>
          <li class="pl-4"><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div class="max-lg:space-y-8 lg:grid grid-cols-2">
        <div class="space-y-4">
          <nav class="space-y-2">
            <h2 class="font-bold text-pink">Useful Links</h2>
            <ul class="space-y-2">
              <li><a href="/#overview">Overview</a></li>
              <li><a href="/#timeline">Timeline</a></li>
              <li><a href="/#faqs">FAQs</a></li>
              <li><a href="/register">Register</a></li>
            </ul>
          </nav>
          <div class="flex gap-4 items-center">
            <h2 class="font-bold text-pink">Follow us</h2>
            <ul class="flex items-center gap-2">
              {#each $socials as social_link}
                <li>
                  <a
                    href={social_link.link}
                    title="share on {social_link.title}"
                  >
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
        <nav class="space-y-2">
          <h2 class="font-bold text-pink">Contact Us</h2>
          <ul class="space-y-2">
            <li><a href="tel:+234 679 81819">+234 679 81819</a></li>
            <li><a href="#">27,Alara Street Yaba 100012 Lagos State</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="text-center py-4">
      <p>All rights reserved. © getlinked Ltd.</p>
    </div>
  </div>
</footer>
