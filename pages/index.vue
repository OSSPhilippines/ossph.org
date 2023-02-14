<template>
<div class="isolate bg-primary">
  <main>
    <div class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
        <div>
          <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">Open Source Software PH</h1>
          <p class="mt-6 text-lg leading-8 text-gray-600 text-justify font-roboto">Open Source Software PH (OSSPH) is a developer-led initiative to grow the community of developers building open source software across the Philippines. Our goal is to help open source maintainers to get proper support for their projects. Our future plans include virtual meetups, training for new OSS maintainers, connecting them with mentors and companies that can potentially support them.</p>
          <div class="mt-8 flex gap-x-4 sm:justify-center">
            <a href="#" class="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
              Join Us
              <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
            </a>
            <a href="#" class="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Help Us Grow
              <span class="text-gray-400" aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <!-- <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
            <defs>
              <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0060A0" />
                <stop offset="1" stop-color="#0060A0" />
              </linearGradient>
            </defs>
          </svg>
        </div> -->
      </div>
    </div>
  </main>
</div>
</template>

<script>
import { ref } from 'vue';
// import { Dialog, DialogPanel } from '@headlessui/vue';
export default {
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    // Dialog,
    // DialogPanel,
  },
  setup () {
    const navigation = [
      { name: 'The Team', href: '/the-team' },
      { name: 'Projects', href: '/projects' },
      { name: 'Blog', href: 'https://blog.ossph.org' },
    ];

    const mobileMenuOpen = ref(false);

    const people = [
      {
        name: 'Whitney Francis',
        role: 'Copywriter',
        imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
      // More people...
    ];

    return {
      mobileMenuOpen,
      navigation,
      people,
    };
  },
};
</script>
