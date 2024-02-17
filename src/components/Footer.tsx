import { Facebook, Instagram, Twitter, Github, Dribbble } from "lucide-react";

function Footer() {
  return (
    <div className="  py-8 border-t bg-darkk mt-16">
      <div className="text-center">
        <a
          href="/"
          className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <h1 className="font-mono text-4xl font-extrabold text-litee ">
            InsightInk
          </h1>
        </a>
        <p className="text-sm mb-8 -mt-5 font-mono font-semibold text-litee">
          An{" "}
          <span>
            <a
              className="text-lime-400 hover:text-lime-600"
              href="https://bento.me/san-77x"
            >
              @San.77x
            </a>
          </span>{" "}
          Project.
        </p>

        <ul className="flex justify-center my-5 space-x-5">
          <li>
            <a
              href="/"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <Facebook />
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <Instagram />
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <Twitter />
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <Github />
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <Dribbble />
            </a>
          </li>
        </ul>
        <span className="block text-sm text-center text-gray-400 hover:text-gray-200">
          © 2024 Insight-Ink. All Rights Reserved. Built with love.
        </span>
      </div>
    </div>
  );
}

export default Footer;
