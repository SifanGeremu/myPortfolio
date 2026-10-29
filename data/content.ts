/**
 * All portfolio copy, links, and media paths live here.
 * Components should not hardcode them.
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
  name: "Sifan Geremu",
  brand: "Sifan",
  role: "Backend Engineer",
  location: "Addis Ababa, Ethiopia",
  status: "Open to work",
  summary:
    "Sifan Geremu is a backend engineer in Addis Ababa. He builds APIs with TypeScript and Laravel, and React when the product needs a face.",
  banner: {
    src: "/images/banner.svg",
    alt: "Blue sky with soft white clouds",
  },
  headline: "I build backends that stay clear after the demo.",
  player: {
    title: "Quiet hours",
    artist: "Addis Ababa",
    play: "Play music",
    pause: "Pause music",
  },
  pronounce: "Hear the name pronounced",
  avatar: {
    src: "/images/sifan.jpg",
    alt: "Sifan Geremu at a desk",
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
      { label: "Activity", href: "#activity" },
      { label: "Record", href: "#highlights" },
    ],
    side: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Projects", href: "#projects" },
      { label: "Tech Stack", href: "#stack" },
      { label: "Activity", href: "#activity" },
      { label: "Record", href: "#highlights" },
    ],
  },
  about: {
    title: "About",
    items: [
      {
        text: "I'm a backend engineer in Addis Ababa. Computer Science, Haramaya University, class of 2026. Most of my time goes to APIs, schemas, and who is allowed to touch them.",
        marks: ["backend engineer", "Haramaya University"],
      },
      {
        text: "TenaMart was a live medicine marketplace. I worked in the existing codebase and left APIs someone else could keep running. Kuraztech hired me from 1,200 applicants for six months on Laravel and Postgres.",
        marks: ["TenaMart", "Kuraztech", "Laravel", "Postgres"],
      },
      {
        text: "After the internships I spent three months as a backend developer at Zion Software Agency. When a product needs a face, I build it in React and Next.js. StackStep is the recent one: an LLM plans the phases, and you learn the stack by shipping them.",
        marks: ["Zion Software Agency", "React", "Next.js", "StackStep"],
      },
    ],
  },
  contact: {
    title: "Contact",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/sifan-geremu", icon: "linkedin" as const },
      { label: "GitHub", href: "https://github.com/SifanGeremu", icon: "github" as const },
      { label: "Resume", href: "/resume.txt", icon: "resume" as const },
    ],
  },
  projects: {
    title: "Projects",
    viewAll: { label: "View all", href: "https://github.com/SifanGeremu?tab=repositories" },
    liveLabel: "Live",
    siteLabel: "Website",
    repoLabel: "Source",
    items: [
      {
        title: "StackStep",
        tagline: "Learn a stack by shipping it.",
        description:
          "A prompt like MERN becomes a phased roadmap: projects, tasks, and a definition of done. Accounts, JWT, and the LLM planner sit on the server.",
        image: "/images/fieldnote.svg",
        imageAlt: "Abstract panel in sage and paper",
        live: true,
        flag: "LLM",
        tags: ["React", "Express", "MongoDB"],
        href: "https://stack-step.vercel.app",
        repo: "https://github.com/SifanGeremu/StackStep",
      },
      {
        title: "CodeBattle",
        tagline: "Duels, not a pastebin.",
        description:
          "Live coding battles over Socket.IO, Monaco in the editor, GitHub login, and a leaderboard. Express on the API. SQLite underneath.",
        image: "/images/lumen.svg",
        imageAlt: "Abstract card on a warm ground",
        live: true,
        flag: "Real-time",
        tags: ["React", "Socket.IO", "SQLite"],
        href: "https://codebattle-two.vercel.app",
        repo: "https://github.com/SifanGeremu/codebattle",
      },
      {
        title: "LMS",
        tagline: "Permissions live on the server.",
        description:
          "Public catalog, enrollment, and an instructor path from draft to publish. Laravel Sanctum and role checks decide what the React UI is allowed to show.",
        image: "/images/halftone.svg",
        imageAlt: "Abstract panels on a pink and blue ground",
        live: false,
        tags: ["Laravel", "React", "MySQL"],
        href: "https://github.com/SifanGeremu/lms-system",
        repo: "https://github.com/SifanGeremu/lms-system",
      },
      {
        title: "Budget tracker",
        tagline: "Income, spend, and the month.",
        description:
          "Built during the Kuraztech internship. Laravel on the API, React on the dashboard: income, expenses, monthly budgets, and where the money went.",
        image: "/images/kepler.svg",
        imageAlt: "Abstract chart on a dark panel",
        live: true,
        tags: ["Laravel", "React", "MySQL"],
        href: "https://personal-budget-tracker-seven-teal.vercel.app",
        repo: "https://github.com/SifanGeremu/personal-budget-tracker",
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
      { name: "Laravel", group: "Backend", icon: "server" },
      { name: "NestJS", group: "Backend", icon: "hexagon" },
      { name: "Node", group: "Backend", icon: "hexagon" },
      { name: "Postgres", group: "Backend", icon: "database" },
      { name: "MySQL", group: "Backend", icon: "cylinder" },
      { name: "MongoDB", group: "Backend", icon: "database" },
      { name: "Motion", group: "Design", icon: "sparkles" },
      { name: "UI", group: "Design", icon: "layers" },
      { name: "Git", group: "Tools", icon: "git" },
      { name: "GitHub", group: "Tools", icon: "github" },
      { name: "Docker", group: "Tools", icon: "boxes" },
      { name: "JWT", group: "Tools", icon: "key" },
    ] satisfies Skill[],
  },
  github: {
    title: "Contributions",
    username: "SifanGeremu",
    empty: "Contribution graph is unavailable right now.",
    totalCount: "{{count}} contributions in the last year",
    less: "Less",
    more: "More",
  },
  highlights: {
    title: "Record",
    regionLabel: "Selected work",
    dismiss: "Dismiss",
    empty: "Nothing pinned right now.",
    items: [
      {
        name: "TenaMart",
        handle: "Sep 2025 – Jan 2026",
        quote:
          "Backend internship on a live medicine marketplace. APIs and data handling inside a codebase that already had users.",
        avatar: "/images/note-mina.svg",
        avatarAlt: "",
      },
      {
        name: "Kuraztech",
        handle: "1 of 1,200",
        quote: "Six months on Laravel and Postgres. Secure APIs, then the handoff to frontend and design.",
        avatar: "/images/note-luis.svg",
        avatarAlt: "",
      },
      {
        name: "Gebeya",
        handle: "CANEX 2026",
        quote:
          "Campus ambassador for Dala Studio, then product expert and judge at CANEX Create-thon. One of 40 ambassadors, 6,000+ creators across Africa.",
        avatar: "/images/note-noor.svg",
        avatarAlt: "",
      },
    ],
  },
  footer: {
    title: "If the API has to last",
    body: "I take backend work where the schema, the permissions, and the next engineer all matter.",
    cta: "Let's talk",
    href: "https://www.linkedin.com/in/sifan-geremu",
  },
};
