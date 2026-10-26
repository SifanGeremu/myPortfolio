import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { FooterCta } from "@/components/footer-cta";
import { Frame } from "@/components/frame";
import { GithubActivity } from "@/components/github-activity";
import { Highlights } from "@/components/highlights";
import { Profile } from "@/components/profile";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";

export default function Page() {
  return (
    <Frame>
      <Profile />
      <About />
      <Contact />
      <Projects />
      <TechStack />
      <GithubActivity />
      <Highlights />
      <FooterCta />
    </Frame>
  );
}
