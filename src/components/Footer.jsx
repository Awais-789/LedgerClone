import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const RedditIcon = () => (
    <svg
      className="w-7 h-7 text-white"
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Reddit</title>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.24 12.01c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zm-8.48 0c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zM12 18c-2.21 0-4-1.79-4-4h8c0 2.21-1.79 4-4 4z" />
    </svg>
  );

  const FacebookIcon = () => (
    <svg
      className="w-7 h-7 text-white"
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Facebook</title>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg
      className="w-7 h-7 text-white"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Instagram</title>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );

  const XIcon = () => (
    <svg
      className="w-7 h-7 text-white"
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>X</title>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.73L1.598 22.846H.05l8.69-9.89L1.13 1.153h7.57l5.04 6.98zM18.33 20.47h2.138L6.236 3.01H3.98l14.35 17.46z" />
    </svg>
  );

  const YouTubeIcon = () => (
    <svg
      className="w-7 h-7 text-white"
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>YouTube</title>
      <path d="M21.582 7.186a2.48 2.48 0 0 0-1.754-1.754C18.25 5 12 5 12 5s-6.25 0-7.828.432a2.48 2.48 0 0 0-1.754 1.754C2 8.762 2 12 2 12s0 3.238.418 4.814a2.48 2.48 0 0 0 1.754 1.754C5.75 19 12 19 12 19s6.25 0 7.828-.432a2.48 2.48 0 0 0 1.754-1.754C22 15.238 22 12 22 12s0-3.238-.418-4.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg
      className="w-7 h-7 text-white"
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>LinkedIn</title>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );

  const TikTokIcon = () => (
    <svg
      className="w-7 h-7 text-white"
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>TikTok</title>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.86-.95-6.69-2.81-1.77-1.8-2.6-4.28-2.5-6.75s.81-4.67 2.53-6.52c1.95-2.05 4.82-3.18 7.5-3.22.02-3.41-.02-6.83.02-10.24z" />
    </svg>
  );

  const DiscordIcon = () => (
    <svg
      className="w-7 h-7 text-white"
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Discord</title>
      <path d="M20.317 4.36981C18.7915 3.72551 17.181 3.29001 15.524 3.09551C15.423 3.36401 15.2835 3.73751 15.1655 4.02551C13.151 3.65151 11.211 3.65151 9.31099 4.02551C9.17149 3.73751 9.03199 3.36401 8.93149 3.09551C7.27449 3.29001 5.66449 3.72551 4.13849 4.36981C1.69349 7.05481 0.957494 9.94081 1.05899 12.923C2.81499 14.2415 4.74349 15.138 6.77299 15.6565C7.07899 15.122 7.34699 14.569 7.57699 14.004C6.98899 13.722 6.42099 13.402 5.87499 13.049C5.97549 12.986 6.07599 12.923 6.17649 12.8595C10.0415 14.1205 14.404 14.1205 18.269 12.8595C18.3695 12.923 18.47 12.986 18.5705 13.049C18.0245 13.402 17.4565 13.722 16.8685 14.004C17.0985 14.569 17.3665 15.122 17.6725 15.6565C19.702 15.138 21.6305 14.2415 23.3865 12.923C23.524 9.51831 22.533 6.71631 20.317 4.36981ZM8.63449 10.9638C7.81749 10.9638 7.15599 10.2528 7.15599 9.37831C7.15599 8.50381 7.81749 7.79281 8.63449 7.79281C9.45149 7.79281 10.113 8.50381 10.113 9.37831C10.113 10.2528 9.45149 10.9638 8.63449 10.9638ZM15.806 10.9638C14.989 10.9638 14.3275 10.2528 14.3275 9.37831C14.3275 8.50381 14.989 7.79281 15.806 7.79281C16.623 7.79281 17.2845 8.50381 17.2845 9.37831C17.2845 10.2528 16.623 10.9638 15.806 10.9638Z" />
    </svg>
  );

  const socialLinks = [
    { name: "Reddit", href: "#", Icon: RedditIcon },
    { name: "Facebook", href: "#", Icon: FacebookIcon },
    { name: "Instagram", href: "#", Icon: InstagramIcon },
    { name: "X", href: "#", Icon: XIcon },
    { name: "YouTube", href: "#", Icon: YouTubeIcon },
    { name: "LinkedIn", href: "#", Icon: LinkedInIcon },
    { name: "TikTok", href: "#", Icon: TikTokIcon },
    { name: "Discord", href: "#", Icon: DiscordIcon },
  ];

  // FIXED: The SVG was not assigned to a component.
  const LedgerLogo = (props) => (
    <svg {...props} width="100" height="28" viewBox="0 0 100 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
        <path d="M6.3929 27.2721H0V0.528076H6.3929V27.2721Z" fill="currentColor" />
        <path d="M16.4446 27.2721H10.0518V0.528076H16.4446V27.2721Z" fill="currentColor" />
        <path d="M26.4958 27.2721H20.1029V0.528076H26.4958V27.2721Z" fill="currentColor" />
        <path d="M32.8887 27.2721V0.528076H45.6743V6.5517H39.2815V10.749H44.435V16.7726H39.2815V21.2485H45.6743V27.2721H32.8887Z" fill="currentColor" />
        <path d="M57.6973 27.2721H51.3044V0.528076H68.09V6.5517H57.6973V27.2721Z" fill="currentColor" />
        <path d="M80.089 27.2721H73.6962V13.6361L70.2078 0.528076H78.117L81.6054 13.6361H88.0093L91.4976 0.528076H99.4068L95.9185 13.6361V27.2721H89.5256V13.6361L86.0372 0.528076H83.5775L80.089 13.6361V27.2721Z" fill="currentColor" />
    </svg>
  );

  const ChevronDownIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  // Payment Icons
  const PayPalIcon = () => <svg className="h-5 w-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M3.344 2.125h6.333c4.545 0 7.433 2.18 6.94 6.536-.31 2.895-2.457 4.542-5.11 4.542h-1.928c-.48 0-.853.376-.97 1.13l-.683 4.316c-.05.31-.31.54-.62.54H4.01c-.34 0-.61-.28-.57-.62l1.12-7.058c.05-.31.31-.54.62-.54h.61c.42 0 .76.32.81.73l.19 1.19h.06c.64-1.35 2.18-1.93 3.69-1.93 2.1 0 3.39 1.11 3.63 3.24.23 2.05-1.02 3.25-2.8 3.25h-1.93c-.63 0-1.16-.48-1.25-1.11L6.9 4.395c-.1-.63-.63-1.11-1.26-1.11H3.914c-.34 0-.61-.28-.57-.62l.000-.04zM16.03 2.125h3.81l-3.34 16.92h-3.8l3.33-16.92z"/></svg>;
  const CryptoComIcon = () => <svg className="h-5 w-auto" fill="currentColor" viewBox="0 0 24 24"><text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold">crypto.com</text></svg>; // Placeholder as text
  const ApplePayIcon = () => <svg className="h-5 w-auto" fill="currentColor" viewBox="0 0 60 24"><path d="M51.9,10.79a3.49,3.49,0,0,1,1.57-2.9,3.68,3.68,0,0,0-2.82-1.55,3.84,3.84,0,0,0-3.3,1.8A3.33,3.33,0,0,0,45.92,6.4a4,4,0,0,0-3.81,2.44A4.32,4.32,0,0,0,42.44,12a4.32,4.32,0,0,0-.33,3.13,3.74,3.74,0,0,0,3.58,2.47,3.87,3.87,0,0,0,3.63-2,3.37,3.37,0,0,0,1.44,1.72,3.68,3.68,0,0,0,2.95,1.13,3.72,3.72,0,0,0,3.75-3.83A3.56,3.56,0,0,0,51.9,10.79ZM49.33,4.19a2.6,2.6,0,0,0-1.61,1,2.44,2.44,0,0,0-.7,1.8,2.83,2.83,0,0,0,.78,2.05,2.5,2.5,0,0,0,1.71.86,2.57,2.57,0,0,0,1.67-1,2.4,2.4,0,0,0,.69-1.81A2.78,2.78,0,0,0,50.9,4.9,2.52,2.52,0,0,0,49.33,4.19Z"/></svg>;
  const VisaIcon = () => <svg className="h-5 w-auto" fill="currentColor" viewBox="0 0 24 7"><path d="M7.5.3l-2.4 6.4H4.2L1.8.3H3l1.8 4.7L6.6.3zm5.1 4.2c0-1.1-.6-1.7-1.7-1.7-.8 0-1.3.4-1.5.6l.3-1.2H8.3L8 6.7h.9c.1 0 .2-.1.2-.2l0-.1c.3-.5.9-1 1.7-1 .8 0 1.2.4 1.2 1.2 0 .7-.4 1-1.3 1.2l-.7.2c-.3 0-.4.1-.4.3 0 .1.2.2.5.2.5 0 .9-.2 1.1-.4l.2.7c-.3.2-.8.4-1.4.4-1.2 0-1.8-.6-1.8-1.5 0-.7.4-1.2 1.4-1.4l.7-.2c.2 0 .4-.1.4-.3zm5.7-4.2H16l-1 6.4h1l.2-.9h1.6l.1.9h1L18.3.3zm-1 4l.3-2.2.3 2.2zM24 .3h-1L21.3 5l-.2-1.7-.8-3h-1l1.4 6.4h1.1l2.2-6.4z"/></svg>;
  const MastercardIcon = () => <svg className="h-5 w-auto" fill="currentColor" viewBox="0 0 38 24"><path d="M34.7,12.5c0,4-3.2,7.2-7.2,7.2s-7.2-3.2-7.2-7.2c0-4,3.2-7.2,7.2-7.2S34.7,8.5,34.7,12.5z M10.5,12.5c0,4,3.2,7.2,7.2,7.2s7.2-3.2,7.2-7.2c0-4-3.2-7.2-7.2-7.2S10.5,8.5,10.5,12.5z"/></svg>;
  const AmexIcon = () => <svg className="h-5 w-auto" fill="currentColor" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2"/><rect width="24" height="4" y="9" fill="#60A5FA"/></svg>;

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-4xl font-bold mb-4">Stay in touch</h3>
              <p className="text-white text-xl mb-6">
                Announcements can be found in our blog. Press contact:{" "}
                <span className="underline">media@ledger.com</span>
              </p>
              <section className="bg-black py-12 mr-40">
                <nav aria-label="Social media links">
                  <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 ">
                    {socialLinks.map(({ name, href, Icon }) => (
                      <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow us on ${name}`}
                        className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-zinc-700 hover:scale-110"
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </nav>
              </section>
            </div>
            <div>
              <h3 className="text-4xl font-bold">
                Subscribe to our newsletter
              </h3>
              <h3 className="text-4xl font-bold mb-4">newsletter</h3>
              <p className="text-white text mb-6">
                New coins supported, blog updates and exclusive offers directly
                in your inbox
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-full focus:outline-none "
                />
                <button className="px-6 py-3 bg-white text-black rounded-full transition-colors">
                  Subscribe to newsletter
                </button>
              </div>
              <p className="text-xs bg-black mt-2 text-gray-400">
                Your email address will only be used to send you our newsletter,
                as well as updates and offers. You can unsubscribe at any time
                using the link included in the newsletter.
                <span className="underline text-xs">
                  Learn more about how we manage your data and your rights.
                </span>
              </p>
              <p className="text-xs text-gray-400 bg-black mt-6 ">
                This site is protected by reCAPTCHA and the Google{" "}
                <span className="underline">Privacy Policy</span> and{" "}
                <span className="underline">Terms of Service</span> apply.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <div className="lg:w-1/4 space-y-8 text-sm text-gray-400">
             <div className="w-20 h-12 border border-white flex items-center justify-center">
                <span className="font-bold text-white text-sm">LEDGER</span>
              </div>
            <button className="w-full sm:w-auto flex items-center justify-between px-4 py-2 border border-gray-700 rounded-full text-white hover:border-white transition-colors">
              <span>ENGLISH</span>
              <ChevronDownIcon className="w-5 h-5 ml-3" />
            </button>
            <div className="space-y-2">
              <p>Copyright © Ledger SAS. All rights reserved.</p>
              <p>
                Ledger, Ledger Stax, Ledger Nano S, Ledger Vault, Bolos are
                trademarks owned by Ledger SAS.
              </p>
            </div>
            <p>106 rue du Temple, 75003 Paris, France</p>
            <div>
              <h4 className="font-semibold text-white mb-3">Payment methods</h4>
              <div className="flex items-center gap-3 flex-wrap">
                <PayPalIcon />
                <CryptoComIcon />
                <ApplePayIcon />
                <VisaIcon />
                <MastercardIcon />
                <AmexIcon />
              </div>
            </div>
          </div>

          {/* Right Column (Links Grid) */}
          <div className="lg:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Link Column 1 */}
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-white mb-4">Products</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <Link to="#" className="hover:text-white">
                      Hardware Wallet
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Ledger Stax
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Ledger Flex
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Ledger Nano X
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Ledger Nano S Plus
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Compare our devices
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Bundles
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Accessories
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      All products
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Downloads
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Crypto Assets</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <Link to="#" className="hover:text-white">
                      Bitcoin wallet
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Ethereum wallet
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Solana wallet
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Cardano wallet
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      XRP wallet
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Monero wallet
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      USDT wallet
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      See all assets
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      What is a Crypto Wallet?
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">
                  Crypto Services
                </h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <Link to="#" className="hover:text-white">
                      Crypto Prices
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Buying crypto
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Staking crypto
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Swapping crypto
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Link Column 2 */}
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-white mb-4">For Business</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <Link to="#" className="hover:text-white">
                      Ledger Enterprise Solutions
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">For Startups</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <Link to="#" className="hover:text-white">
                      Funding From Ledger Cathay Capital
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">
                  For Developers
                </h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <Link to="#" className="hover:text-white">
                      The Developer Portal
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Get started</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <Link to="#" className="hover:text-white">
                      Start using your Ledger device
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Compatible wallets and services
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      How to buy Bitcoin
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Guide before buying bitcoin
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Bitcoin Hardware Wallet
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">See also</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <Link to="#" className="hover:text-white">
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Bounty program
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Resellers
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Ledger Press Kit
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Affiliates
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Status
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Developers
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Partners
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Link Column 3 */}
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-white mb-4">Careers</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <Link to="#" className="hover:text-white">
                      Join us
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      All jobs
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">About</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <Link to="#" className="hover:text-white">
                      Our vision
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Ledger Academy
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      The company
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      The people
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Diversity
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Link Column 4 */}
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <Link to="#" className="hover:text-white">
                      Legal Center
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Sales Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-white">
                      Disclaimers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;