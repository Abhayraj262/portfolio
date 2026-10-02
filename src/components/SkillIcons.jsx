export function SkillIcon({ name, className = "h-5 w-5" }) {
  const Icon = icons[name] ?? FallbackIcon;
  return <Icon className={className} />;
}

function FallbackIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="3" />
    </svg>
  );
}

function NextIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 8.999L8.791 7.2H6.972v9.587h1.462V9.341l8.23 11.637zM17.63 7.2h-1.459v9.04h1.459V7.2z" />
    </svg>
  );
}

function ReactIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  );
}

function TailwindIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.55 11 14.83 12.33 17 12.33c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.45 7.33 14.17 6 12 6zm-5 5.67C4.33 11.67 2.67 13 2 15.67c1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35 1.14 1.15 2.42 2.48 4.59 2.48 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35-1.14-1.15-2.42-2.48-4.59-2.48z" />
    </svg>
  );
}

function JsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 2h20v20H2V2zm11.2 15.4c.4.7.9 1.2 1.9 1.2.8 0 1.3-.4 1.3-1 0-.7-.5-1-1.4-1.4l-.5-.2c-1.4-.6-2.3-1.4-2.3-3 0-1.5 1.1-2.6 2.9-2.6 1.3 0 2.2.4 2.9 1.6l-1.6 1c-.3-.6-.7-.8-1.3-.8-.6 0-1 .4-1 .8 0 .6.4.8 1.3 1.2l.5.2c1.6.7 2.5 1.5 2.5 3.1 0 1.8-1.4 2.8-3.3 2.8-1.8 0-3-.9-3.5-2l1.6-1zm-5.4.3c.3.5.6.9 1.3.9.7 0 1.1-.3 1.1-1.4V10h2v6.4c0 2.1-1.2 3-3 3-1.6 0-2.5-.8-3-1.8l1.6-.9z" />
    </svg>
  );
}

function NodeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.7 2.5 7.15v9.7L12 22.3l9.5-5.45v-9.7L12 1.7zm0 1.85 7.3 4.2v8.5L12 20.45 4.7 16.25v-8.5L12 3.55zM12 7l-4.3 7.4h1.7l.86-1.55h3.48L14.6 14.4h1.7L12 7zm0 2.3 1.12 2.05h-2.24L12 9.3z" />
    </svg>
  );
}

function ExpressIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 14.5 8.5 9 3 9.1" />
      <path d="M10 8.5h4.2c1.7 0 2.8 1 2.8 2.5S16 13.5 14.2 13.5H10V8.5z" />
      <path d="M18 9.2 21 15M21 9.2 18 15" />
    </svg>
  );
}

function ApiIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M8 8H5a3 3 0 0 0 0 8h3M16 8h3a3 3 0 0 1 0 8h-3" />
      <path d="M9 12h6" />
    </svg>
  );
}

function JwtIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="16" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PostgresIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <ellipse cx="12" cy="6.5" rx="7" ry="3" />
      <path d="M5 6.5v11c0 1.7 3.1 3 7 3s7-1.3 7-3v-11" />
      <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
    </svg>
  );
}

function MongoIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c.4 3.4 4.5 5.8 4.5 11.2 0 3.4-1.7 6.2-4.5 8.8-2.8-2.6-4.5-5.4-4.5-8.8C7.5 7.8 11.6 5.4 12 2z" />
      <path d="M12 22v-4" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </svg>
  );
}

function NginxIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 3.5 7v10L12 22l8.5-5V7L12 2zm-.6 5.3h1.4L16 16.7h-1.6l-.6-1.8H10l-.7 1.8H7.8l3.6-9.4zm.7 2.1-1.1 3.3h2.3l-1.2-3.3z" />
    </svg>
  );
}

function ServerIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <circle cx="7" cy="7" r="1" fill="currentColor" stroke="none" />
      <circle cx="7" cy="17" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function RazorpayIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 4h8.4c3.4 0 5.6 1.8 5.6 5 0 2.6-1.5 4.3-3.9 4.9L20 20h-3.4l-4.6-5.7H8.6V20H5V4zm3.6 2.7v5.1h4.5c1.8 0 2.8-.9 2.8-2.5s-1-2.6-2.8-2.6H8.6z" />
    </svg>
  );
}

function ZohoIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="12" r="8.2" />
      <path d="M8 9.5h8M8 12h8M8 14.5h5" />
    </svg>
  );
}

const icons = {
  nextjs: NextIcon,
  react: ReactIcon,
  tailwind: TailwindIcon,
  javascript: JsIcon,
  nodejs: NodeIcon,
  express: ExpressIcon,
  api: ApiIcon,
  jwt: JwtIcon,
  postgres: PostgresIcon,
  mongodb: MongoIcon,
  nginx: NginxIcon,
  server: ServerIcon,
  razorpay: RazorpayIcon,
  zoho: ZohoIcon,
};
