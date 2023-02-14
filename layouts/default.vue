<template>
<Disclosure as="nav" v-slot="{ open }">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 justify-between">
      <div class="flex">
        <div class="-ml-2 mr-2 flex items-center md:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-shrink-0 items-center">
          <img src="../assets/images/ossph-logo-text-blue.png" alt="OSSPH Logo" width="100">
          <!-- <img class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
          <img class="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" /> -->
        </div>
        <div class="hidden md:ml-6 md:flex md:items-center md:space-x-4">
          <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
        </div>
      </div>
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <button type="button" class="relative inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">
            <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            <span>New Job</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <DisclosurePanel class="md:hidden">
    <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
      <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
    </div>
  </DisclosurePanel>
</Disclosure>
<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  <div class="pa-5 bg-primary">
    <h1 class="text-primary">foo</h1>
  </div>
  <slot/>
</div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { PlusIcon } from '@heroicons/vue/20/solid';
export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    // MenuContainer: Menu,
    // MenuButton,
    // MenuItem,
    // MenuItems,
    Bars3Icon,
    // BellIcon,
    XMarkIcon,
    PlusIcon,
  },
  setup () {
    const user = {
      name: 'Tom Cook',
      email: 'tom@example.com',
      imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    };
    const navigation = [
      { name: 'Dashboard', href: '#', current: true },
      { name: 'Team', href: '#', current: false },
      { name: 'Projects', href: '#', current: false },
      { name: 'Calendar', href: '#', current: false },
    ];
    return {
      user,
      navigation,
    };
  },
};
</script>
