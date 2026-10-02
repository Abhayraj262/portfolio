import { site } from "@/src/data/site";
import {
  GitHubIcon,
  LeetCodeIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./Icons";

const items = [
  { key: "linkedin", label: "LinkedIn", Icon: LinkedInIcon },
  { key: "github", label: "GitHub", Icon: GitHubIcon },
  { key: "twitter", label: "Twitter", Icon: TwitterIcon },
  { key: "leetcode", label: "LeetCode", Icon: LeetCodeIcon },
];

export default function SocialLinks({ className = "flex items-center gap-3" }) {
  const visible = items.filter((item) => site.socials[item.key]);

  if (!visible.length) return null;

  return (
    <div className={className}>
      {visible.map(({ key, label, Icon }) => (
        <a
          key={key}
          href={site.socials[key]}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
