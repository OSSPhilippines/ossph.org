export interface Social {
  name: string;
  icon: string;
  link: string;
}

export interface TeamMember {
  name: string;
  username: string;
  role: string;
  bio: string;
  photo: string;
  group: string;
  active?: boolean;
  socials: Social[];
}

export const team: TeamMember[] = [
  {
    name: "Joff",
    username: "joff",
    role: "Founder",
    bio: "Visionary leader who founded OSSPH to unite Filipino developers in the open source movement. Passionate about building communities and empowering local tech talent to contribute to global open source projects.",
    photo: "joff.png",
    group: "founders",
    active: true,
    socials: [
      { name: "Website", icon: "website", link: "https://jofftiquez.dev" },
      { name: "GitHub", icon: "github", link: "https://github.com/jofftiquez" },
      { name: "Twitter", icon: "twitter", link: "https://twitter.com/jrtiquez" },
      { name: "LinkedIn", icon: "linkedin", link: "https://linkedin.com/in/jofftiquez" }
    ]
  },
  {
    name: "Waren",
    username: "waren",
    role: "Co-Founder",
    bio: "Co-architect of OSSPH's mission to promote open source culture in the Philippines. Dedicated to mentoring developers and creating opportunities for Filipinos to make their mark in the global tech community.",
    photo: "waren.png",
    group: "founding-circle",
    active: true,
    socials: [
      { name: "GitHub", icon: "github", link: "https://github.com/warengonzaga" },
      { name: "Twitter", icon: "twitter", link: "https://twitter.com/warengonzaga" },
      { name: "LinkedIn", icon: "linkedin", link: "https://linkedin.com/in/warengonzaga" }
    ]
  },
  {
    name: "Trista",
    username: "trista",
    role: "Operations Manager",
    bio: "Keeps OSSPH running smoothly by coordinating team activities and managing day-to-day operations. Ensures that initiatives are executed efficiently and volunteers have the support they need to succeed.",
    photo: "trista.png",
    group: "management",
    active: true,
    socials: [
      { name: "GitHub", icon: "github", link: "https://github.com/tristagile" },
      { name: "Twitter", icon: "twitter", link: "https://twitter.com/tristagile" },
      { name: "LinkedIn", icon: "linkedin", link: "https://linkedin.com/in/tristaiegile" }
    ]
  },
  {
    name: "Avie",
    username: "avie",
    role: "Community Leader",
    bio: "Fosters meaningful connections within the OSSPH community by organizing events and facilitating discussions. Committed to creating an inclusive space where developers of all skill levels can learn and grow together.",
    photo: "avie.png",
    group: "founding-circle",
    active: true,
    socials: [
      { name: "Twitter", icon: "twitter", link: "https://twitter.com/AvieDev" }
    ]
  },
  {
    name: "Kristian",
    username: "kristian",
    role: "Community Leader",
    bio: "Champions community engagement and helps bridge the gap between newcomers and experienced contributors. Passionate about making open source accessible to everyone in the Filipino tech community.",
    photo: "kristian.png",
    group: "technology",
    active: true,
    socials: [
      { name: "Twitter", icon: "twitter", link: "https://twitter.com/k_quirapas" }
    ]
  },
  {
    name: "Jet",
    username: "jet",
    role: "Social Media Associate",
    bio: "Amplifies OSSPH's voice across social platforms by crafting engaging content and building our online presence. Helps spread the word about open source opportunities and community achievements.",
    photo: "jet.png",
    group: "content",
    active: true,
    socials: [
      { name: "Twitter", icon: "twitter", link: "https://twitter.com/metaljet1" }
    ]
  },
  {
    name: "Geo",
    username: "geo",
    role: "Technical Writer",
    bio: "Transforms complex technical concepts into clear, accessible documentation. Helps developers understand and contribute to open source projects through well-crafted guides and tutorials.",
    photo: "geo.png",
    group: "technology",
    active: true,
    socials: [
      { name: "GitHub", icon: "github", link: "https://github.com/geodelapaz" }
    ]
  },
  {
    name: "Kate",
    username: "kate",
    role: "Technical Writer",
    bio: "Creates comprehensive documentation and educational content that empowers developers to navigate the open source landscape. Believes that great documentation is key to successful projects.",
    photo: "kate.png",
    group: "content",
    active: true,
    socials: [
      { name: "Twitter", icon: "twitter", link: "https://twitter.com/redkathh" }
    ]
  },
  {
    name: "Pau",
    username: "pau",
    role: "Technical Writer",
    bio: "Bridges the gap between code and comprehension through thoughtful technical writing. Dedicated to making open source knowledge accessible to the Filipino developer community.",
    photo: "pau.png",
    group: "content",
    active: true,
    socials: [
      { name: "Twitter", icon: "twitter", link: "https://twitter.com/codewithpau" },
      { name: "GitHub", icon: "github", link: "https://github.com/paulaxisabel" },
      { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/paulasigno/" }
    ]
  },
  {
    name: "Angelo",
    username: "angelo",
    role: "Technical Writer",
    bio: "Crafts developer-friendly documentation and technical content that helps newcomers get started with open source. Passionate about clear communication and knowledge sharing.",
    photo: "angelo.png",
    group: "technology",
    active: true,
    socials: [
      { name: "Twitter", icon: "twitter", link: "https://twitter.com/angelo_fallaria" },
      { name: "GitHub", icon: "github", link: "https://github.com/angelofallars" }
    ]
  },
  {
    name: "Carl",
    username: "carl",
    role: "Web Developer",
    bio: "Contributed to building and maintaining OSSPH's web presence. Helped create digital experiences that showcase the Filipino open source community to the world.",
    photo: "carl.png",
    group: "technology",
    active: false,
    socials: [
      { name: "GitHub", icon: "github", link: "https://github.com/carlolol" }
    ]
  },
  {
    name: "Jemson",
    username: "jemson",
    role: "Quality Assurance",
    bio: "Ensured the quality and reliability of OSSPH projects through thorough testing and review. Helped maintain high standards for community-driven open source initiatives.",
    photo: "jem.png",
    group: "technology",
    active: false,
    socials: [
      { name: "GitHub", icon: "github", link: "https://github.com/jemstone" }
    ]
  },
  {
    name: "Paolo",
    username: "paolo",
    role: "Developer/Maintainer",
    bio: "Actively develops and maintains OSSPH projects, ensuring they remain up-to-date and functional. Dedicated to writing clean, maintainable code that others can build upon.",
    photo: "paolo.png",
    group: "technology",
    active: true,
    socials: [
      { name: "GitHub", icon: "github", link: "https://github.com/MahoMuri" },
      { name: "Twitter", icon: "twitter", link: "https://twitter.com/mahomuri" }
    ]
  },
  {
    name: "Denz",
    username: "denz",
    role: "Developer/Maintainer",
    bio: "Contributed to the development and maintenance of OSSPH's technical infrastructure. Helped build tools and platforms that support the Filipino open source community.",
    photo: "denz.png",
    group: "technology",
    active: false,
    socials: [
      { name: "GitHub", icon: "github", link: "https://github.com/denzdelvillar" },
      { name: "LinkedIn", icon: "linkedin", link: "https://linkedin.com/in/denzdelvillar" },
      { name: "Twitter", icon: "twitter", link: "https://twitter.com/denzvryan" }
    ]
  },
  {
    name: "Chris",
    username: "chris",
    role: "Code Contributor",
    bio: "Actively contributes code to OSSPH projects and helps improve existing features. Believes in the power of collaborative development to create meaningful software.",
    photo: "chris.png",
    group: "technology",
    active: true,
    socials: [
      { name: "GitHub", icon: "github", link: "https://github.com/cblanquera" }
    ]
  },
  {
    name: "EJ",
    username: "ej",
    role: "Discord Admin",
    bio: "Helped manage and moderate the OSSPH Discord community, creating a welcoming environment for developers to connect, learn, and collaborate on open source projects.",
    photo: "ejcenteno.png",
    group: "technology",
    active: false,
    socials: [
      { name: "GitHub", icon: "github", link: "https://github.com/ejcenteno" },
      { name: "LinkedIn", icon: "linkedin", link: "https://linkedin.com/in/ejcenteno" },
      { name: "Facebook", icon: "facebook", link: "https://facebook.com/ejcenteno69" }
    ]
  },
  {
    name: "Justin",
    username: "justin",
    role: "Community Leader",
    bio: "Guides and nurtures the OSSPH community through mentorship and leadership. Helps create pathways for developers to discover and contribute to open source projects.",
    photo: "no-photo.png",
    group: "management",
    active: true,
    socials: [
      { name: "GitHub", icon: "github", link: "https://github.com/purefunctor" }
    ]
  },
  {
    name: "Sofia",
    username: "sofia",
    role: "Discord Admin",
    bio: "Contributed to building a positive and supportive Discord community where Filipino developers could share knowledge and collaborate on open source initiatives.",
    photo: "sofia.png",
    group: "technology",
    active: false,
    socials: [
      { name: "Facebook", icon: "facebook", link: "https://www.facebook.com/profile.php?id=100082625676953" }
    ]
  },
  {
    name: "Soc Virnyl",
    username: "soc-virnyl",
    role: "Discord Admin",
    bio: "Maintains a vibrant and helpful Discord community where developers can ask questions, share projects, and find collaborators. Passionate about fostering open source culture.",
    photo: "uncomfy.png",
    group: "technology",
    active: true,
    socials: [
      { name: "GitHub", icon: "github", link: "https://github.com/uncomfyhalomacro" }
    ]
  },
  {
    name: "Liz",
    username: "liz",
    role: "Event coordinator / Artist",
    bio: "Brings creativity and organization to OSSPH events and visual identity. Combines artistic talent with event planning skills to create memorable community experiences.",
    photo: "felise.png",
    group: "management",
    active: true,
    socials: []
  },
  {
    name: "Felix",
    username: "felix",
    role: "Content Creator / Code Contributor",
    bio: "Wears multiple hats as both a content creator and code contributor. Creates engaging content while actively contributing to OSSPH's technical projects.",
    photo: "felix.png",
    group: "technology",
    active: true,
    socials: [
      { name: "GitHub", icon: "github", link: "https://github.com/felixmacaspac" },
      { name: "LinkedIn", icon: "linkedin", link: "https://github.com/felixmacaspac" }
    ]
  },
  {
    name: "Phil",
    username: "phil",
    role: "Code Contributor",
    bio: "Contributes to OSSPH's codebase with a focus on quality and collaboration. Enjoys solving problems and helping build tools that benefit the developer community.",
    photo: "phil.png",
    group: "technology",
    active: true,
    socials: [
      { name: "GitHub", icon: "github", link: "https://github.com/philgerardsoto" },
      { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/philgerardsoto/" },
      { name: "Facebook", icon: "facebook", link: "https://www.facebook.com/philgerardsoto" }
    ]
  },
  {
    name: "Phoebe",
    username: "phoebe",
    role: "Discord Admin",
    bio: "Helps keep the OSSPH Discord community organized and welcoming. Ensures that members have a positive experience and can easily find help and resources.",
    photo: "phoebe.png",
    group: "technology",
    active: true,
    socials: [
      { name: "GitHub", icon: "github", link: "https://github.com/il-pb" },
      { name: "LinkedIn", icon: "linkedin", link: "https://linkedin.com/in/phoebe-mae-ilustre/" }
    ]
  },
  {
    name: "Jester",
    username: "jester",
    role: "Discord Admin",
    bio: "Moderates and supports the OSSPH Discord community, helping developers connect and collaborate. Committed to maintaining a friendly and productive environment for all members.",
    photo: "jester.png",
    group: "technology",
    active: true,
    socials: [
      { name: "GitHub", icon: "github", link: "https://github.com/mrjxtr" },
      { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/mrjxtr/" }
    ]
  }
];

export const activeVolunteers = team.filter(m => m.active);
export const pastVolunteers = team.filter(m => !m.active);
export const roles = [...new Set(team.map(m => m.role))];

// Helper to find member by username
export function getMemberByUsername(username: string): TeamMember | undefined {
  return team.find(m => m.username === username);
}

// Get all usernames for static generation
export function getAllUsernames(): string[] {
  return team.map(m => m.username);
}
export const groups = [...new Set(team.map(m => m.group))];

// Group display names
export const groupLabels: Record<string, string> = {
  "founders": "Founder",
  "founding-circle": "Founding Circle",
  "management": "Management",
  "technology": "Technology",
  "content": "Content",
};

// Group order for display
export const groupOrder = ["founders", "founding-circle", "management", "technology", "content"];
