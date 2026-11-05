import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { FooterCta } from "@/components/footer-cta";
import { Frame } from "@/components/frame";
import { GithubActivity } from "@/components/github-activity";
import { Highlights } from "@/components/highlights";
import { Profile } from "@/components/profile";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { content } from "@/data/content";
import { siteOrigin } from "@/lib/site";

function profileJsonLd() {
  const origin = siteOrigin();
  const [addressLocality, addressCountry] = content.location.split(", ");
  const sameAs = content.contact.links.map((link) => link.href).filter((href) => href.startsWith("https://"));
  const email = content.contact.links.find((link) => link.href.startsWith("mailto:"))?.href.slice("mailto:".length);

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: content.name,
      jobTitle: [content.role, "Backend Software Engineer"],
      description: content.summary,
      url: origin,
      image: `${origin}${content.avatar.src}`,
      email,
      address: { "@type": "PostalAddress", addressLocality, addressCountry },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Haramaya University" },
      knowsAbout: content.stack.skills.map((skill) => skill.name),
      sameAs,
    },
  };
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd()).replace(/</g, "\\u003c") }}
      />
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
    </>
  );
}
