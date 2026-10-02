import { site } from "@/src/data/site";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
