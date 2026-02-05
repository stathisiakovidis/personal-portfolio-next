import Link from "next/link";
import React from "react";
import Layout from "./Layout";
import urls from "@/custom/urls";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
      font-medium text-lg dark:text-light dark:border-light sm:text-base xs:text-sm"
    >
      <Layout className="!py-8 flex items-center justify-between lg:flex-col lg:!py-6 sm:!py-4">
        <span className="lg:text-center">{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <div className="flex items-center lg:py-2 sm:py-1 sm:flex-col">
          <span>Built by</span>
          <span className="text-primary text-2xl px-1 dark:text-primaryDark sm:text-xl">
            Stathis Iakovidis
          </span>
        </div>

        <Link
          href={urls.linkedin}
          target="_blank"
          className="underline underline-offset-2 py-2 px-4 rounded-lg
          hover:bg-dark/10 dark:hover:bg-light/10 transition-colors
          min-h-[44px] flex items-center justify-center"
        >
          Direct Message
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
