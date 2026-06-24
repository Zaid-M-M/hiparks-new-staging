"use client";

import { useRouter, usePathname } from "next/navigation";
import { usePageLoader } from "./context/PageLoaderProvider";
import { useNav } from "./context/NavContext";

export default function TransitionLink({
  href,
  children,
  className = "",
  openInNewTab = false,
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { startLoading } = usePageLoader();
  const { isNavOpen, setIsNavOpen } = useNav();

  const normalizePath = (url) => {
    try {
      const parsed = new URL(url, window.location.origin);
      let p = parsed.pathname.replace(/\/$/, "");
      return p === "" ? "/" : p;
    } catch {
      let p = url.split("#")[0].split("?")[0].replace(/\/$/, "");
      return p === "" ? "/" : p;
    }
  };

  const handleSamePageAnchor = (targetHref) => {
    setIsNavOpen(false);

    window.history.pushState(null, "", targetHref);

    const hash = targetHref.includes("#") ? targetHref.split("#")[1] : null;

    if (hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleClick = (e) => {
    // Allow browser default behavior
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button === 1) {
      return;
    }

    if (!href) {
      e.preventDefault();
      return;
    }

    if (openInNewTab) {
      return;
    }

    const currentPath = normalizePath(pathname);
    const targetPath = normalizePath(href);

    const isAnchorOnly = href.startsWith("#");
    const isSameBasePage = currentPath === targetPath;

    if (isAnchorOnly || isSameBasePage) {
      e.preventDefault();
      handleSamePageAnchor(href);
      return;
    }

    e.preventDefault();

    if (isNavOpen) setIsNavOpen(false);

    startLoading(href);

    if (document.startViewTransition) {
      document.startViewTransition(() => router.push(href));
    } else {
      router.push(href);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className} cursor-pointer`}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
