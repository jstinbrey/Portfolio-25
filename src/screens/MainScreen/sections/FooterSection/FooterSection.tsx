import React from "react";

export const FooterSection = (): JSX.Element => {
  const socialIcons = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      alt: "GitHub",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      alt: "LinkedIn",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg",
      alt: "Twitter",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      alt: "Figma",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/behance/behance-original.svg",
      alt: "Behance",
    },
  ];

  return (
    <footer className="w-full bg-transparent relative">
      <div className="w-full h-px bg-[linear-gradient(90deg,rgba(39,39,42,0.25)_0%,rgba(39,39,42,0.75)_50%,rgba(39,39,42,0.25)_100%)]" />

      <div className="w-full bg-zinc-950 py-[76px] px-[408px]">
        <div className="[font-family:'Inter',Helvetica] font-normal text-zinc-200 text-lg tracking-[0.18px] leading-[18px] mb-4">
          Justin
        </div>

        <div className="[font-family:'Inter',Helvetica] font-normal text-zinc-500 text-[12.3px] tracking-[0.35px] leading-5 mb-[135px]">
          A dedicated problem-solver who thrives
          <br />
          on learning and building.
        </div>

        <div className="flex gap-4">
          {socialIcons.map((icon, index) => (
            <img
              key={`social-${index}`}
              className="w-5 h-5"
              alt={icon.alt}
              src={icon.src}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};
