/**
 * All portfolio copy, links, and media paths live here.
 * Replace these placeholders. Components should not hardcode them.
 */

export type IconName =
  | "github"
  | "linkedin"
  | "twitter"
  | "mail"
  | "resume"
  | "arrow"
  | "eye"
  | "sun"
  | "moon"
  | "chevron"
  | "globe"
  | "close"
  | "braces"
  | "atom"
  | "hexagon"
  | "wind"
  | "sparkles"
  | "server"
  | "database"
  | "cylinder"
  | "key"
  | "pen"
  | "layers"
  | "git"
  | "boxes"
  | "workflow"
  | "triangle";

export const stackTabs = ["All", "Frontend", "Backend", "Design", "Tools"] as const;
export type StackTab = (typeof stackTabs)[number];
export type SkillGroup = Exclude<StackTab, "All">;

export type Skill = {
  name: string;
  group: SkillGroup;
  icon: IconName;
};

export type Project = {
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  live: boolean;
  flag?: string;
  tags: string[];
  href: string;
  repo?: string;
};

export const content = {
  name: "Avery Quinn",
  brand: "Avery",
  role: "Product Engineer",
  location: "Lisbon, Portugal",
  status: "Open for new work",
  views: 128,
  viewsLabel: "Profile views",
  summary: "Portfolio of Avery Quinn, a product engineer building calm, careful software.",
  email: "hello@example.com",
  banner: {
    src: "/images/banner.svg",
    alt: "Abstract morning ridgeline under a pale sky",
  },
  avatar: {
    src: "/images/avatar.svg",
    alt: "Monogram placeholder for Avery Quinn",
  },
  ui: {
    skip: "Skip to content",
    menu: "Menu",
    themeToLight: "Use light theme",
    themeToDark: "Use dark theme",
  },
  nav: {
    moreLabel: "More",
    primary: [
      { label: "Home", href: "#top" },
      { label: "Projects", href: "#projects" },
      { label: "Stack", href: "#stack" },
    ],
    more: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Highlights", href: "#highlights" },
    ],
  },
  about: {
    title: "About",
    items: [
      {
        text: "I'm a product engineer for teams who want the interface and the implementation to feel like one decision.",
        marks: ["product engineer"],
      },
      {
        text: "Day to day that means TypeScript, Next.js, and Motion, with time spent on keyboard paths, loading states, and type that holds up at small sizes.",
        marks: ["TypeScript", "Next.js", "Motion"],
      },
      {
        text: "I take on a few products at a time and stay through the last stretch, where the rough edges usually hide.",
        marks: [] as string[],
      },
    ],
  },
  contact: {
    title: "Contact",
    links: [
      { label: "GitHub", href: "https://github.com/octocat", icon: "github" as const },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/placeholder", icon: "linkedin" as const },
      { label: "Twitter", href: "https://x.com/placeholder", icon: "twitter" as const },
      { label: "Mail", href: "mailto:hello@example.com", icon: "mail" as const },
      { label: "Resume", href: "/resume.txt", icon: "resume" as const },
    ],
  },
  projects: {
    title: "Projects",
    viewAll: { label: "View all", href: "#projects" },
    liveLabel: "Live",
    siteLabel: "Website",
    repoLabel: "Source",
    items: [
      {
        title: "Fieldnote",
        tagline: "A desk for long drafts.",
        description:
          "Write locally, keep every version, and export Markdown when the piece is done. No account required.",
        image: "/images/fieldnote.svg",
        imageAlt: "Abstract writing surface in sage and paper",
        live: true,
        flag: "Local-first",
        tags: ["Next.js", "TypeScript", "SQLite"],
        href: "https://example.com",
        repo: "https://github.com/octocat",
      },
      {
        title: "Lumen",
        tagline: "A reading list that stays put.",
        description:
          "Save essays, track what you finished, and search without a network round trip. Sync is optional and obvious.",
        image: "/images/lumen.svg",
        imageAlt: "Abstract reading card on a warm ground",
        live: true,
        tags: ["React", "Tailwind", "Motion"],
        href: "https://example.com",
        repo: "https://github.com/octocat",
      },
      {
        title: "Kepler",
        tagline: "A ledger with nothing to connect.",
        description: "Monthly money, plain categories, and one chart. It never asks for a bank login.",
        image: "/images/kepler.svg",
        imageAlt: "Abstract bar chart on a dark panel",
        live: true,
        tags: ["TypeScript", "Postgres", "Prisma"],
        href: "https://example.com",
        repo: "https://github.com/octocat",
      },
      {
        title: "Halftone",
        tagline: "Posters from a single still.",
        description: "Crop, place a short line of type, and export a print sheet. The presets are few on purpose.",
        image: "/images/halftone.svg",
        imageAlt: "Abstract poster panels on a pink and blue ground",
        live: true,
        tags: ["Next.js", "Canvas", "Tailwind"],
        href: "https://example.com",
        repo: "https://github.com/octocat",
      },
    ] satisfies Project[],
  },
  stack: {
    title: "Tech Stack",
    hint: "( hover a chip )",
    filterLabel: "Filter skills",
    empty: "Nothing in this group.",
    tabs: stackTabs,
    skills: [
      { name: "TypeScript", group: "Frontend", icon: "braces" },
      { name: "React", group: "Frontend", icon: "atom" },
      { name: "Next.js", group: "Frontend", icon: "triangle" },
      { name: "Tailwind", group: "Frontend", icon: "wind" },
      { name: "Motion", group: "Frontend", icon: "sparkles" },
      { name: "Node", group: "Backend", icon: "hexagon" },
      { name: "Postgres", group: "Backend", icon: "database" },
      { name: "Prisma", group: "Backend", icon: "cylinder" },
      { name: "Auth", group: "Backend", icon: "key" },
      { name: "Figma", group: "Design", icon: "pen" },
      { name: "Layout", group: "Design", icon: "layers" },
      { name: "Git", group: "Tools", icon: "git" },
      { name: "GitHub", group: "Tools", icon: "github" },
      { name: "Deploy", group: "Tools", icon: "boxes" },
      { name: "HTTP", group: "Tools", icon: "workflow" },
    ] satisfies Skill[],
  },
  github: {
    title: "Contributions",
    username: "sifangeremu",
    empty: "Contribution graph is unavailable right now.",
    totalCount: "{{count}} contributions in the last year",
    less: "Less",
    more: "More",
  },
  highlights: {
    title: "Highlights",
    regionLabel: "Notes from collaborators",
    dismiss: "Dismiss note from",
    empty: "Nothing pinned right now.",
    items: [
      {
        name: "Mina Cho",
        handle: "@minacho",
        quote: "Fieldnote is the first editor our writers didn't fight. The versions view is what sold the team.",
        avatar: "/images/note-mina.svg",
        avatarAlt: "Placeholder mark for Mina Cho",
      },
      {
        name: "Luis Ortega",
        handle: "@lortega",
        quote: "Calm interface, readable pull requests, and no surprise scope. I would bring Avery back on the next one.",
        avatar: "/images/note-luis.svg",
        avatarAlt: "Placeholder mark for Luis Ortega",
      },
      {
        name: "Noor Hale",
        handle: "@noorhale",
        quote: "Lumen replaced a mess of bookmarks. It feels finished in the places most side projects don't.",
        avatar: "/images/note-noor.svg",
        avatarAlt: "Placeholder mark for Noor Hale",
      },
    ],
  },
  footer: {
    title: "Still with me",
    body: "If you have a product that needs a steady build, I'd like to hear about it.",
    cta: "Let's Talk",
    href: "mailto:hello@example.com",
  },
};
