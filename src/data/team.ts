export interface Social {
  name: string;
  icon: string;
  link: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  group: string;
  active?: boolean;
  socials: Social[];
}

export const team: TeamMember[] = [
  {
    name: "Joff",
    role: "Founder",
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
    role: "Co-Founder",
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
    role: "Operations Manager",
    group: "management",
    photo: "trista.png",
    active: true,
    socials: [
      { name: "GitHub", icon: "github", link: "https://github.com/tristagile" },
      { name: "Twitter", icon: "twitter", link: "https://twitter.com/tristagile" },
      { name: "LinkedIn", icon: "linkedin", link: "https://linkedin.com/in/tristaiegile" }
    ]
  },
  {
    name: "Avie",
    role: "Community Leader",
    group: "founding-circle",
    photo: "avie.png",
    active: true,
    socials: [
      { name: "Twitter", icon: "twitter", link: "https://twitter.com/AvieDev" }
    ]
  },
  {
    name: "Kristian",
    role: "Community Leader",
    group: "technology",
    photo: "kristian.png",
    active: true,
    socials: [
      { name: "Twitter", icon: "twitter", link: "https://twitter.com/k_quirapas" }
    ]
  },
  {
    name: "Jet",
    role: "Social Media Associate",
    photo: "jet.png",
    group: "content",
    active: true,
    socials: [
      { name: "Twitter", icon: "twitter", link: "https://twitter.com/metaljet1" }
    ]
  },
  {
    name: "Geo",
    role: "Technical Writer",
    photo: "geo.png",
    group: "technology",
    active: true,
    socials: [
      { name: "GitHub", icon: "github", link: "https://github.com/geodelapaz" }
    ]
  },
  {
    name: "Kate",
    role: "Technical Writer",
    photo: "kate.png",
    group: "content",
    active: true,
    socials: [
      { name: "Twitter", icon: "twitter", link: "https://twitter.com/redkathh" }
    ]
  },
  {
    name: "Pau",
    role: "Technical Writer",
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
    role: "Technical Writer",
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
    role: "Web Developer",
    photo: "carl.png",
    group: "technology",
    active: false,
    socials: [
      { name: "GitHub", icon: "github", link: "https://github.com/carlolol" }
    ]
  },
  {
    name: "Jemson",
    role: "Quality Assurance",
    photo: "jem.png",
    group: "technology",
    active: false,
    socials: [
      { name: "GitHub", icon: "github", link: "https://github.com/jemstone" }
    ]
  },
  {
    name: "Paolo",
    role: "Developer/Maintainer",
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
    role: "Developer/Maintainer",
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
    role: "Code Contributor",
    photo: "chris.png",
    group: "technology",
    active: true,
    socials: [
      { name: "GitHub", icon: "github", link: "https://github.com/cblanquera" }
    ]
  },
  {
    name: "EJ",
    role: "Discord Admin",
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
    role: "Community Leader",
    photo: "no-photo.png",
    group: "management",
    active: true,
    socials: [
      { name: "GitHub", icon: "github", link: "https://github.com/purefunctor" }
    ]
  },
  {
    name: "Sofia",
    role: "Discord Admin",
    photo: "sofia.png",
    group: "technology",
    active: false,
    socials: [
      { name: "Facebook", icon: "facebook", link: "https://www.facebook.com/profile.php?id=100082625676953" }
    ]
  },
  {
    name: "Soc Virnyl",
    role: "Discord Admin",
    photo: "uncomfy.png",
    group: "technology",
    active: true,
    socials: [
      { name: "GitHub", icon: "github", link: "https://github.com/uncomfyhalomacro" }
    ]
  },
  {
    name: "Liz",
    role: "Event coordinator / Artist",
    photo: "felise.png",
    group: "management",
    active: true,
    socials: []
  },
  {
    name: "Felix",
    role: "Content Creator / Code Contributor",
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
    role: "Code Contributor",
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
    role: "Discord Admin",
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
    role: "Discord Admin",
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
