"use client";

import { motion } from "framer-motion";

export default function CodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotate: 1 }}
      animate={{ opacity: 1, y: [0, -8, 0], rotate: 0 }}
      transition={{
        opacity: { duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 6, delay: 1, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 0.7, delay: 0.28 },
      }}
      className="w-full max-w-md"
      aria-hidden="true"
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-[11px] text-muted">abhay.js</span>
        </div>
        <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-7">
          <code>
            <Line n="1">
              <Kw>const</Kw> <Ident>developer</Ident> <Op>=</Op> {"{"}
            </Line>
            <Line n="2">
              {"  "}
              <Key>name</Key>
              <Op>:</Op> <Str>&quot;Abhay Raj Kashyap&quot;</Str>,
            </Line>
            <Line n="3">
              {"  "}
              <Key>role</Key>
              <Op>:</Op> <Str>&quot;Full Stack Developer&quot;</Str>,
            </Line>
            <Line n="4">
              {"  "}
              <Key>stack</Key>
              <Op>:</Op> <Arr>[&quot;Next.js&quot;, &quot;Node.js&quot;, &quot;MongoDB&quot;]</Arr>,
            </Line>
            <Line n="5">
              {"  "}
              <Key>shipping</Key>
              <Op>:</Op> <Bool>true</Bool>,
            </Line>
            <Line n="6">
              {"}"}
              <span className="cursor-blink" />
            </Line>
          </code>
        </pre>
      </div>
    </motion.div>
  );
}

function Line({ n, children }) {
  return (
    <div className="flex gap-4">
      <span className="w-4 shrink-0 select-none text-right text-muted/50">{n}</span>
      <span>{children}</span>
    </div>
  );
}

function Kw({ children }) {
  return <span className="text-violet-500 dark:text-violet-400">{children}</span>;
}

function Ident({ children }) {
  return <span className="text-sky-600 dark:text-sky-400">{children}</span>;
}

function Key({ children }) {
  return <span className="text-indigo-500 dark:text-indigo-300">{children}</span>;
}

function Op({ children }) {
  return <span className="text-muted">{children}</span>;
}

function Str({ children }) {
  return <span className="text-emerald-600 dark:text-emerald-400">{children}</span>;
}

function Arr({ children }) {
  return <span className="text-amber-600 dark:text-amber-400">{children}</span>;
}

function Bool({ children }) {
  return <span className="text-rose-500 dark:text-rose-400">{children}</span>;
}
