import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"
      style={{ color: "#aaa" }}
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* ❌ 2. image-alt: empty alt on meaningful image */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt=""
          width={100}
          height={20}
          priority
        />

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          {/* ❌ 3. heading-order: skips from h1 to h4 */}
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <h4 className="text-sm text-zinc-400">
            Subheading that skips levels
          </h4>

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            {/* ❌ 4. link-name: link with no discernible text */}
            <a
              href="https://vercel.com/templates"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              <span aria-hidden="true">Templates</span>
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>

        {/* ❌ 5. label: form input with no associated label */}
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded"
        />

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>

          {/* ❌ 6. button-name: button with no accessible name */}
          <button className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5">
            <span aria-hidden="true">📄</span>
          </button>

          {/* ❌ 7. tabindex: positive tabindex breaks natural tab order */}
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={5}
          >
            Documentation
          </a>
        </div>

        {/* ❌ 8. duplicate-id: two elements sharing the same id */}
        <footer id="footer-section" className="text-xs text-zinc-400">
          Footer A
        </footer>
        <footer id="footer-section" className="text-xs text-zinc-400">
          Footer B
        </footer>
      </main>
    </div>
  );
}