export function newTabProps(href: string): { target?: "_blank"; rel?: string } {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return { target: "_blank", rel: "noopener noreferrer" };
  }
  return {};
}
