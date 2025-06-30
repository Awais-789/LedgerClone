import React from "react";
import {
  FiSearch,
  FiTwitter,
  FiYoutube,
  FiInstagram,
  FiFacebook,
  FiLinkedin,
} from "react-icons/fi";
import { FaRedditAlien } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { FiInfo, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRef } from "react";

// Data for the help categories to avoid repetition
const helpCategories = [
  {
    title: "Ledger Hardware Wallets",
    description: "Secure your crypto with Ledger Hardware Wallets.",
    link: "#",
  },
  {
    title: "Ledger Live",
    description: "Manage your crypto securely",
    link: "#",
  },
  {
    title: "Crypto assets",
    description: "Find out which coins and tokens are supported by Ledger.",
    link: "#",
  },
  {
    title: "Third party services",
    description: "Expand your crypto experience with third party services",
    link: "#",
  },
  {
    title: "Other products and services",
    description: "Explore more Ledger products and services",
    link: "#",
  },
  {
    title: "Orders and shipping",
    description: "Manage your orders and deliveries",
    link: "#",
  },
];

// Data for social media links
const socialLinks = [
  { icon: <FiTwitter size={20} />, href: "#" },
  { icon: <FiYoutube size={20} />, href: "#" },
  { icon: <FaRedditAlien size={20} />, href: "#" },
  { icon: <FiInstagram size={20} />, href: "#" },
  { icon: <FiFacebook size={20} />, href: "#" },
  { icon: <FiLinkedin size={20} />, href: "#" },
];

const Support = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <div className="bg-white font-sans">
      {/* Top Phishing Warning Banner */}
      <div className="bg-black text-white text-center text-xs sm:text-sm py-2 px-4">
        <span>
          Beware of phishing attacks, Ledger will never ask for the 24 words of
          your recovery phrase. Never share them.{" "}
        </span>
        <a href="#" className="underline font-semibold">
          Learn more{" "}
        </a>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-12 border border-black flex items-center justify-center">
              <span className="font-bold text-sm">LEDGER</span>
            </div>
            <span className="text-xl text-gray-400 font-light tracking-wider">
              SUPPORT
            </span>
          </div>
          <div>
            <button className="bg-violet-100 text-black font-semibold px-4 py-2 rounded-lg flex items-center space-x-2 text-sm">
              <span>English</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-12">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-8">
            How can we help you?
          </h1>
          {/* Search Bar */}
          <div className="relative mb-12">
            <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-2xl pointer-events-none" />
            <input
              type="text"
              placeholder="Describe your issue"
              className="w-full text-lg pl-16 pr-6 py-5 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
            />
          </div>
          {/* Issues Banner */}
          <div className="bg-purple-300 p-4 rounded-lg flex items-center justify-center space-x-3 text-center mb-16">
            <FiInfo className="text-2xl text-gray-600 flex-shrink-0" />
            <span className="text-gray-800 text-sm md:text-base">
              Facing any issues? Visit our{" "}
              <a href="#" className="underline font-medium">
                dedicated page
              </a>{" "}
              for ongoing issues to find helpful solutions.
            </span>
          </div>
          
          {/* Trending Topics */}
          <section className="mb-20 relative">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Trending topics
            </h2>

            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full"
            >
              <FiChevronRight size={24} />
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth"
            >
              {[
                {
                  src: "/assets/5.jpg",
                  content: (
                    <>
                      <p className="font-semibold text-base">
                        Haven't used you Ledger device in a while?
                      </p>
                      <p className="font-semibold text-base">Read This.</p>
                    </>
                  ),
                },
                {
                  src: "/assets/1.png",
                  content: (
                    <p className="font-semibold text-base">
                      Restore your Ledger accounts with your recovery phrase
                    </p>
                  ),
                },
                {
                  src: "/assets/8.jpg",
                  content: (
                    <p className="font-semibold text-base">
                      Fix Bluetooth pairing issues
                    </p>
                  ),
                },
                {
                  src: "/assets/9.png",
                  content: (
                    <p className="font-semibold text-base">Contact us</p>
                  ),
                },
                {
                  src: "/assets/3.jpg",
                  content: (
                    <p className="font-semibold text-base">
                      Supported Coins and Tokens in Ledger Live
                    </p>
                  ),
                },
                {
                  src: "/assets/2.jpg",
                  content: (
                    <p className="font-semibold text-base">
                      Getting started with Ledger Live
                    </p>
                  ),
                },
                {
                  src: "/assets/7.jpg",
                  content: (
                    <p className="font-semibold text-base">
                      E7 - How to troubleshoot Ledger Nano X battery issues
                    </p>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg flex-shrink-0 w-[300px]"
                >
                  <img src={item.src} className="w-full object-cover" />
                  <div className="p-6 flex-grow">{item.content}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Help Categories Grid */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-8 rounded-lg flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-6">{category.description}</p>
                  </div>
                  <a
                    href={category.link}
                    className="font-semibold flex items-center group text-black w-fit"
                  >
                    See more
                    <BsArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-purple-300 mt-24 py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-black">
          <h2 className="text-7xl md:text-5xl font-bold mb-6">
            Stay in touch with Ledger
          </h2>
          <p className="text-lg mb-1">
            Announcements can be found in our blog.
          </p>
          <p className="text-lg mb-8">Press contact: media@ledger.com</p>
          <div className="flex  space-x-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="bg-black text-white rounded-full h-10 w-10 flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Support;
