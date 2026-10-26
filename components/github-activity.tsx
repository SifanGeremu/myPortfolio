"use client";

import dynamic from "next/dynamic";
import { content } from "@/data/content";
import { Section } from "@/components/section";
import { useTheme } from "@/components/theme";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => <div className="h-[132px] w-full rounded-md bg-fill-strong" aria-hidden="true" />,
  },
);

const calendarTheme = {
  light: ["#e4e1da", "#c4c0b6", "#8a867c", "#5c5953", "#2a2825"],
  dark: ["#1c1c1c", "#3a3a3a", "#6e6e6e", "#b0b0b0", "#f2f2f2"],
};

export function GithubActivity() {
  const { theme } = useTheme();

  return (
    <Section id="activity" title={content.github.title}>
      <div className="contrib text-muted">
        <GitHubCalendar
          username={content.github.username}
          colorScheme={theme}
          blockSize={9}
          blockMargin={3}
          blockRadius={2}
          fontSize={12}
          theme={calendarTheme}
          throwOnError={false}
          errorMessage={content.github.empty}
          labels={{
            totalCount: content.github.totalCount,
            legend: { less: content.github.less, more: content.github.more },
          }}
        />
      </div>
    </Section>
  );
}
