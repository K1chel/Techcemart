"use client";

import Link from "next/link";
import { useState } from "react";
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";

type Props = {
  children: React.ReactNode;
  href: string;
  Content: React.ComponentType;
};

export const NavItem = ({ children, href, Content }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const showComponent = Content && isOpen;

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="relative w-fit h-fit"
    >
      <Link href={href} className="relative font-medium">
        {children}
        <span
          style={{
            transform: showComponent ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-primary/75 transition-transform duration-300 ease-out"
        />
      </Link>
      <AnimatePresence>
        {showComponent && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <Content />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
