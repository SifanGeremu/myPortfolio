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
  light: ["#ffffff", "#d7e6f6", "#9ec2e6", "#679fde", "#307de5"],
  dark: ["#1a1d24", "#1d3354", "#2c5ea8", "#5b93e0", "#9ec4f4"],
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
