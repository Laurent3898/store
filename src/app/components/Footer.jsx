import Link from "next/link";
import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>&copy; {currentYear} </span>
        <Link
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://bigdevcompany.com/"
        >
          BIG DEV COMPANY
        </Link>
      </div>
    </footer>
  );
};
