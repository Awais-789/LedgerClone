import {
  ArrowRight,
  Server,
  Smartphone,
  Blocks,
  AppWindow,
  ShieldCheck,
} from "lucide-react"; // ✅ Only lucide icons

// ✅ Swiper import from correct module
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const ModuleCard = ({ icon, tag, title, description, imageUrl }) => (
  <div className="bg-[#101010] border border-zinc-800 rounded-lg overflow-hidden flex flex-col">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center space-x-2 mb-3 text-sm text-zinc-400">
        {icon}
        <span>{tag}</span>
      </div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-zinc-400 flex-grow mb-6">{description}</p>
      <a
        href="#"
        className="flex items-center space-x-2 text-white border border-zinc-600 rounded-full px-6 py-2 w-fit hover:bg-zinc-800 transition-colors"
      >
        <span>Get Started</span>
        <ArrowRight size={16} />
      </a>
    </div>
  </div>
);

const LedgerDeveloperPortal = () => {
  return (
    <div className="bg-black text-white font-sans antialiased">
      <div className="bg-zinc-900 text-center py-2 px-4 text-sm">
        <span>
          Ledger is transitioning away from the Ledger Nano S. Read more
        </span>
        <ArrowRight size={16} className="ml-1" />
        <button className="absolute right-4 text-xl">×</button>
      </div>

      <header className="py-4 px-8 border-b border-zinc-800">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 3H3V9H9V3Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 3H15V9H21V3Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 15H3V21H9V15Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 21H21V19.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 15V16.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.5 15H15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 16.5V15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 19.5V21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl font-bold">Developer Portal</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-zinc-300">
              Ask AI
            </a>
            <a href="#" className="hover:text-zinc-300">
              Dev Tracks
            </a>
            <a href="#" className="hover:text-zinc-300">
              Documentation
            </a>
            <div className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-1.5 text-zinc-400 text-sm">
              Search documentation...{" "}
              <span className="ml-4 border border-zinc-600 rounded px-1.5 py-0.5 text-xs">
                CTRL K
              </span>
            </div>
            <a href="#" className="text-xl hover:text-zinc-300">
              <svg
                width="24"
                height="24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 245 240"
              >
                <path
                  fill="currentColor"
                  d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
                ></path>
                <path
                  fill="currentColor"
                  d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.6 18.1-11.9 18.1-11.9-4.1 2.7-8.2 5.3-12.8 7.1-4.1 1.4-8.2 2.3-12.5 2.8-.1 0-.2.1-.3.1-.1 0-.2 0-.3-.1-3.2-.5-6.4-1.2-9.5-2.1-3.1-.9-6-2.1-8.7-3.4-3.1-1.6-5.4-3.2-5.4-3.2s5 8.3 18.1 11.9c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.2-.2 1.8-.2 6.1 0 11.9 1.2 17.5 3.6 9.1 3.9 15.7 9.9 15.7 9.9s-8.3-7.9-26.3-13.1l1-1.2s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
                ></path>
              </svg>
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative text-center py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-black z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/40 blur-3xl rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="block">
                Ledger{" "}
                <span className="bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
                  Developer Portal
                </span>
              </span>
            </h1>
            <p className="text-2xl mt-6 text-zinc-300">
              Build with Ledger to bring security to your community. Easy.
              Accessible. Proven.
            </p>
            <a
              href="#"
              className="inline-block bg-[#FF7700] text-black font-bold px-8 py-4 rounded-full mt-10 text-lg hover:bg-[#ff8d2a] transition-colors"
            >
              Discover →
            </a>
          </div>

          <div className="relative z-10 mt-16 flex flex-row justify-center items-center gap-8 md:gap-16">
            <div className="text-left max-w-xs">
              <p className="text-4xl font-bold">200+</p>
              <p className="text-zinc-400">blockchain protocols secured</p>
            </div>
            <div className="h-12 w-px bg-zinc-700"></div>
            <div className="text-left max-w-xs">
              <p className="text-4xl font-bold">200+</p>
              <p className="text-zinc-400">compatible dApps</p>
            </div>
            <div className="h-12 w-px bg-zinc-700"></div>
            <div className="text-left max-w-xs">
              <p className="text-4xl font-bold">7 000 000+</p>
              <p className="text-zinc-400">devices sold worldwide</p>
            </div>
          </div>
        </section>

        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-grid-zinc-800/20 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-5xl font-bold text-center mb-16">
              Documentation modules
            </h2>

            <h3 className="text-3xl font-semibold mb-8">Devices</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <ModuleCard
                icon={<Server size={16} />}
                tag="DEVICE APPS"
                title="Device App Kit"
                description="Boilerplate apps and SDKs available in C and Rust to get your app in the Ledger Live 'My Ledger' Section"
                imageUrl="/assets/bg-device.webp"
              />
              <ModuleCard
                icon={<Smartphone size={16} />}
                tag="DEVICE INTERACTION"
                title="Device Management kit"
                description="Easily handle connection and communication between your app and Ledger devices"
                imageUrl="/assets/bg-interaction.webp"
              />
            </div>

            <h3 className="text-3xl font-semibold mb-8">Ledger Live</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <ModuleCard
                icon={<Blocks size={16} />}
                tag="BLOCKCHAIN"
                title="Blockchain integration"
                description="Add the possibility to handle your Blockchain's accounts directly in Ledger Live"
                imageUrl="/assets/bg-blockchain.webp"
              />
              <ModuleCard
                icon={<AppWindow size={16} />}
                tag="LIVE APPS"
                title="Ledger Services Kit"
                description="Extend the reach of your dApp by integrating it in Ledger Live"
                imageUrl="/assets/bg-live-app.webp"
              />
            </div>

            <h3 className="text-3xl font-semibold mb-8">Clear signing</h3>
            <div className="grid md:grid-cols-1 gap-8">
              <ModuleCard
                icon={<ShieldCheck size={16} />}
                tag="CLEAR SIGNING"
                title="Clear Signing initiative"
                description="Whitelist your smart contracts methods to enforce our new clear signing standard"
                imageUrl="/assets/bg-clear-signing.webp"
              />
            </div>
          </div>
        </section>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 3, spaceBetween: 20 },
            640: { slidesPerView: 5, spaceBetween: 30 },
            1024: { slidesPerView: 8, spaceBetween: 40 },
          }}
          className="mb-16"
        >
          {[
            "1.svg",
            "2.svg",
            "3.svg",
            "4.svg",
            "5.svg",
            "6.svg",
            "7.svg",
            "8.svg",
            "9.svg",
            "10.svg",
            "11.svg",
            "12.svg",
            "13.svg",
            "14.svg",
            "15.svg",
            "16.svg",
            "17.svg",
          ].map((file, index) => (
            <SwiperSlide key={index}>
              <img
                src={`/assets/${file}`}
                alt={`Logo ${index + 1}`}
                className="h-10 w-10 mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-grid-zinc-800/20"></div>
          <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-6xl font-bold">
                Don't know where to start?
              </h2>
              <a
                href="#"
                className="inline-block bg-[#FF7700] text-black font-bold px-8 py-4 rounded-full mt-10 text-lg hover:bg-[#ff8d2a] transition-colors"
              >
                Explore the possibilities →
              </a>
            </div>
            <img
              src="/assets/download (21).jpg"
              alt="Ledger Stax Device"
              className="w-64 mt-12 md:mt-0"
            />
          </div>
        </section>
      </main>

      <footer className="bg-[#101010] py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <svg
              width="100"
              height="28"
              viewBox="0 0 100 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0V28H8V10H16V28H24V0H0ZM38.5 0C32.7 0 28 4.7 28 10.5V17.5C28 23.3 32.7 28 38.5 28C44.3 28 49 23.3 49 17.5V10.5C49 4.7 44.3 0 38.5 0ZM41 17.5C41 19.1 39.9 20.2 38.5 20.2C37.1 20.2 36 19.1 36 17.5V10.5C36 8.9 37.1 7.8 38.5 7.8C39.9 7.8 41 8.9 41 10.5V17.5ZM53 0V28H61V18H65L72 28H81L74 17C78 16 80 13.3 80 9.5C80 4.2 76.5 0 71 0H53ZM61 10H71C72.7 10 74 8.7 74 7C74 5.3 72.7 4 71 4H61V10ZM84 0V28H92V18H100V14H92V4H100V0H84Z"
                fill="white"
              />
            </svg>
            <p className="text-zinc-500 text-sm mt-4">
              Copyright © Ledger SAS. All rights reserved. Ledger, Ledger Stax,
              Ledger Nano S, Ledger Vault, Bolos are trademarks owned by Ledger
              SAS
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Ledger Developer Portal</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Ledger's privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cookie statement
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LedgerDeveloperPortal;
