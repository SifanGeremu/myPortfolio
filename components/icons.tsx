import type { ReactElement, ReactNode } from "react";
import {
  ArrowUpRight,
  Atom,
  Boxes,
  Braces,
  ChevronDown,
  Cylinder,
  Database,
  Eye,
  FileText,
  GitBranch,
  Globe,
  Hexagon,
  KeyRound,
  Layers,
  Mail,
  Moon,
  PenTool,
  Server,
  Sparkles,
  Sun,
  Triangle,
  Wind,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/data/content";

type MarkProps = { className?: string };

function Mark({ className, children }: MarkProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function GithubMark({ className }: MarkProps) {
  return (
    <Mark className={className}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.4 6.4-1.5 6.4-7A5.4 5.4 0 0 0 19.9 4 5 5 0 0 0 19.8 1S18.7.7 16 2.5a13 13 0 0 0-7 0C6.3.7 5.2 1 5.2 1A5 5 0 0 0 5.1 4 5.4 5.4 0 0 0 3.5 7.5c0 5.4 3.3 6.6 6.4 7a3.4 3.4 0 0 0-.9 2.6V21" />
    </Mark>
  );
}

function LinkedinMark({ className }: MarkProps) {
  return (
    <Mark className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10.5V17M8 7.5h.01M12 17v-3.6a2 2 0 0 1 4 0V17" />
    </Mark>
  );
}

function TwitterMark({ className }: MarkProps) {
  return (
    <Mark className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Mark>
  );
}

function fromLucide(Icon: LucideIcon) {
  return function LucideMark({ className }: MarkProps) {
    return <Icon className={className} aria-hidden="true" strokeWidth={1.75} />;
  };
}

const icons: Record<IconName, (props: MarkProps) => ReactElement> = {
  github: GithubMark,
  linkedin: LinkedinMark,
  twitter: TwitterMark,
  mail: fromLucide(Mail),
  resume: fromLucide(FileText),
  arrow: fromLucide(ArrowUpRight),
  eye: fromLucide(Eye),
  sun: fromLucide(Sun),
  moon: fromLucide(Moon),
  chevron: fromLucide(ChevronDown),
  globe: fromLucide(Globe),
  close: fromLucide(X),
  braces: fromLucide(Braces),
  atom: fromLucide(Atom),
  hexagon: fromLucide(Hexagon),
  wind: fromLucide(Wind),
  sparkles: fromLucide(Sparkles),
  server: fromLucide(Server),
  database: fromLucide(Database),
  cylinder: fromLucide(Cylinder),
  key: fromLucide(KeyRound),
  pen: fromLucide(PenTool),
  layers: fromLucide(Layers),
  git: fromLucide(GitBranch),
  boxes: fromLucide(Boxes),
  workflow: fromLucide(Workflow),
  triangle: fromLucide(Triangle),
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const MarkIcon = icons[name];
  return <MarkIcon className={className} />;
}
