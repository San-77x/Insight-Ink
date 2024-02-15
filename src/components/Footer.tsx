import { Facebook, Instagram, Twitter, Github, Dribbble } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <div>
      <div className="text-center">
        <a
          href="/"
          className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            src="https://www.svgrepo.com/show/499962/music.svsdjkfg"
            className="h-12 mr-3 sm:h-9"
            alt="Insight ink Logo"
          />
          Insight-Ink
        </a>
        <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
          © 2024 Insight-Ink. All Rights Reserved. Built with love.
        </span>
        <ul className="flex justify-center mt-5 space-x-5">
          <li>
            <a
              href="/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <Facebook />
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <Instagram />
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <Twitter />
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <Github />
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <Dribbble />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
