import Image from "next/image";
import React from "react";

const socials = [
  {
    name: "Facebook",
    link: "",
    logo: "/assets/facebook.png",
  },
  {
    name: "Twitter",
    link: "",
    logo: "/assets/twitter.png",
  },
  {
    name: "Instagram",
    link: "",
    logo: "/assets/instagram.png",
  },
  {
    name: "LinkedIn",
    link: "",
    logo: "/assets/linkedin.png",
  },
];

const terms = [
  {
    title: "Terms of Use",
    link: "",
  },
  {
    title: "Privacy Policy",
    link: "",
  },
  {
    title: "Cookie Policy",
    link: "",
  },
];
const product = [
  {
    title: "About",
    link: "",
  },
  {
    title: "FAQ",
    link: "",
  },
  {
    title: "Contact",
    link: "",
  },
  {
    title: "Discord",
    link: "",
  },
];

function Footer() {
  return (
    <div className="w-[95%] pb-10 mx-auto lg:w-10/12">
      <div className="gap-[101px] lg:flex lg:h-[262px] bg-[#121727] pl-[42px] pr-[30px] pt-[46px] rounded-[20px]  pb-[51px] lg:pb-0">
        <div className="w-[253px]">
          <Image
            src={"/assets/scavengerLogo.png"}
            width={253}
            height={64}
            alt="logo"
            className="h-[51px] md:h-[64px] w-[206px] md:w-[253px]"
          />
          <p className="mt-1.5 text-[#858894] text-sm font-spaceGrotesk">
            Master Blockchain Ecosystems Through Fun Challenges
          </p>
          <div className="flex items-center gap-3 mt-4">
            {socials.map((social, index) => (
              <a
                href={social.link}
                aria-label={social.name}
                className="w-6 h-6 bg-gradient-to-tr from-[#7D3EAF] to-[#E7499F] rounded-full flex justify-center items-center relative group overflow-hidden transition-transform duration-300 hover:scale-110"
                key={index}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#E7499F] to-[#7D3EAF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-[2] rounded-full"></div>
                <Image
                  src={social.logo}
                  width={12}
                  height={12}
                  alt={`socials-${index}`}
                  className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-14 lg:hidden">
          <div className="w-[124px]">
            <h5 className="text-sm text-[#bfbfbf] font-orbitron">Terms</h5>
            <ul className="mt-5 space-y-[11px]">
              {terms.map((term, index) => (
                <li key={index} className="">
                  <a
                    href={term.link}
                    className="text-sm text-[#858894] font-spaceGrotesk"
                  >
                    {term.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[124px] ">
            <h5 className="text-sm text-[#bfbfbf] font-orbitron">Product</h5>
            <ul className="mt-5 space-y-[11px]">
              {product.map((term, index) => (
                <li key={index} className="">
                  <a
                    href={term.link}
                    className="text-sm text-[#858894] font-spaceGrotesk"
                  >
                    {term.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-[124px] hidden lg:block">
          <h5 className="text-sm text-[#bfbfbf] font-orbitron">Terms</h5>
          <ul className="mt-5 space-y-[11px]">
            {terms.map((term, index) => (
              <li key={index} className="">
                <a
                  href={term.link}
                  className="text-sm text-[#858894] font-spaceGrotesk"
                >
                  {term.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[124px] hidden lg:block">
          <h5 className="text-sm text-[#bfbfbf] font-orbitron">Product</h5>
          <ul className="mt-5 space-y-[11px]">
            {product.map((term, index) => (
              <li key={index} className="">
                <a
                  href={term.link}
                  className="text-sm text-[#858894] font-spaceGrotesk"
                >
                  {term.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:ml-10 w-[317px] mt-14 lg:mt-0">
          <h5 className="text-sm font-orbitron text-[#bfbfbf]">
            Subscribe to our newsletter
          </h5>
          <p className="mt-1.5 font-spaceGrotesk text-[#858894] text-xs">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2 mt-6">
            <div className="[--clr:#858894] relative flex flex-row items-center flex-1">
              <input
                name="enter your email"
                required
                aria-invalid="false"
                placeholder=""
                spellCheck="false"
                autoComplete="off"
                id="email"
                type="email"
                className="peer text-white pl-2 h-[40px] min-h-[40px] pr-[40px] leading-normal appearance-none resize-none box-border text-base w-full text-inherit block text-left border border-solid bg-transparent rounded-lg m-0 p-0 outline-0 focus-visible:outline-0 focus-visible:border-[#E7499F] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#7d3eaf2e]"
              />
              <label
                className="cursor-text text-[--clr] inline-block z-0 text-sm mb-px font-normal text-start select-none absolute duration-300 transform origin-[0] translate-x-[32px] peer-focus-visible:text-[#E7499F] peer-focus-visible:translate-x-[8px] peer-[:not(:placeholder-shown)]:translate-x-[8px] peer-focus-visible:translate-y-[-36px] peer-[:not(:placeholder-shown)]:translate-y-[-36px] peer-[:not(:placeholder-shown)]:text-[-36px]"
                htmlFor="email"
              >
                Email
              </label>
              <span className="pointer-events-none absolute z-[+1] left-0 top-0 bottom-0 flex items-center justify-center size-[40px] text-[--clr] peer-focus-visible:hidden peer-[:not(:placeholder-shown)]:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1rem"
                  height="1rem"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  fill="none"
                  stroke="currentColor"
                >
                  <path fill="none" d="M0 0h24v24H0z" stroke="none" />
                  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
                </svg>
              </span>
              <div className="group w-[40px] absolute top-0 bottom-0 right-0 flex items-center justify-center text-[--clr] peer-focus-visible:text-[#E7499F]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1rem"
                  height="1rem"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  fill="none"
                  stroke="currentColor"
                >
                  <path fill="none" d="M0 0h24v24H0z" stroke="none" />
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
                <span className="text-sm absolute cursor-default select-none rounded-[4px] px-1.5 opacity-0 right-0 -z-10 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-[calc(100%+18px)]">
                  Required!
                </span>
              </div>
            </div>
            <button className="bg-gradient-to-tr rounded-lg from-[#7D3EAF] font-orbitron to-[#E7499F] w-[110px] text-sm text-white font-bold h-[40px] hover:shadow-lg hover:shadow-[#7d3eaf4d] transition-shadow">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="mt-[26px] text-center font-spaceGrotesk text-sm text-[#858894]">
        @ Scavenger hunt 2025
      </p>
    </div>
  );
}

export default Footer;
