export interface Project {
  name: string;
  link: string;
  icon: string;
  description: string;
}

export const projects: Project[] = [
  {
    name: "Vue Stripe",
    link: "https://github.com/vue-stripe",
    icon: "vue-stripe-logo-variant-1-small.png",
    description: "Stripe Checkout & Elements for Vue.js"
  },
  {
    name: "OSSPH Website",
    link: "https://github.com/OSSPhilippines/ossph.org",
    icon: "github-logo.png",
    description: "Official website of Open Source Software PH"
  },
  {
    name: "Paymongo for Node.js",
    link: "https://paymongo.ossph.org",
    icon: "github-logo.png",
    description: "Node.js wrapper for Paymongo's REST API"
  },
  {
    name: "Pinoy-Made",
    link: "https://github.com/OSSPhilippines/pinoy-made",
    icon: "github-logo.png",
    description: "A collection of Filipino-made open source projects"
  },
  {
    name: "Freefolio",
    link: "https://github.com/OSSPhilippines/freefolio",
    icon: "github-logo.png",
    description: "A collection of fast and free static portfolio websites"
  },
  {
    name: "Hacktoberfest 2022 Participants",
    link: "https://github.com/OSSPhilippines/hacktober-fest-2022-participants",
    icon: "github-logo.png",
    description: "List of Hacktoberfest 2022 participants"
  },
  {
    name: "V Animate CSS",
    link: "https://github.com/OSSPhilippines/v-animate-css",
    icon: "github-logo.png",
    description: "A Vue.js plugin for Animate CSS"
  },
  {
    name: "My Philippines Travel Level Map",
    link: "https://github.com/OSSPhilippines/philippine-map-app",
    icon: "github-logo.png",
    description: "A website to help you visualize your travel history across the Philippines"
  }
];
