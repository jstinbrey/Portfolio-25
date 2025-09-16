import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const socialLinks = [
  {
    src: "/link---github.svg",
    alt: "Link github",
    className: "absolute w-[91px] h-[65px] top-4 left-0",
  },
  {
    src: "/link---linkedin.svg",
    alt: "Link linkedin",
    className: "absolute w-[91px] h-[65px] top-4 left-[82px]",
  },
  {
    src: "/link---resume.svg",
    alt: "Link resume",
    className: "absolute w-[91px] h-[65px] top-4 left-[163px]",
  },
  {
    src: "/link---email.svg",
    alt: "Link email",
    className: "absolute w-[91px] h-[65px] top-4 left-[245px]",
  },
];

const techStackImages = [
  {
    src: "/background-1.svg",
    alt: "Background",
    className: "absolute w-[88px] h-[88px] top-[311px] left-0",
  },
  {
    src: "/background.svg",
    alt: "Background",
    className: "absolute w-[88px] h-[88px] top-[311px] left-[104px]",
  },
  {
    src: "/background-2.svg",
    alt: "Background",
    className: "absolute w-[88px] h-[88px] top-[311px] left-[207px]",
  },
];

const projects = [
  {
    year: "2025",
    title: "SafeScore",
    description: "Blockchain and AI powered mobile application",
    image: "/iphone-15-pro.png",
    className: "absolute w-[336px] h-[385px] top-[292px] left-0",
  },
  {
    year: "2025",
    title: "LiveStock",
    description:
      "IoT device paired with a mobile application powered by computer vision for weighing of live stocks.",
    image: "/iphone-16-pro.png",
    className: "absolute w-[336px] h-[385px] top-[292px] left-96",
  },
  {
    year: "2025",
    title: "StraySafe",
    description: "Website made for pet adoption by those who treasure them.",
    image: "/macbook-air--15-inch-.png",
    className: "absolute w-[336px] h-[385px] top-[292px] left-[768px]",
  },
  {
    year: "2025",
    title: "Anilyze: The Future of Agricultural Mapping",
    description:
      "Mobile application made for farmers to track agricultural changes",
    image: "/hand-and-iphone-16-pro.png",
    className: "absolute w-[336px] h-[385px] top-[727px] left-0",
  },
  {
    year: "2024",
    title: "Gale",
    description:
      "Mobile application for air quality monitoring with the aid of an IoT device.",
    image: "/iphone-15.png",
    className: "absolute w-[337px] h-[385px] top-[727px] left-[379px]",
  },
  {
    year: "2024",
    title: "Food.ai",
    description:
      "Mobile application for farmers to centralize connection with consumers.",
    image: "/hand-and-iphone-16-pro-1.png",
    className: "absolute w-[336px] h-[385px] top-[723px] left-[768px]",
  },
  {
    year: "2024",
    title:
      "DreamCatcher: Arduino-Based\nChild/Infant Sleep Monitor with\nNode.js Web App Integration",
    description:
      "Web-based infant monitoring application powered by Node.js and an IoT device.",
    image: "/macbook--13.png",
    className: "absolute w-[336px] h-[385px] top-[1162px] left-0",
  },
  {
    year: "2024",
    title: "Prescence",
    description: "Attendance tracker system paired with RFID scanning.",
    image: "/iphone-15-pro-1.png",
    className: "absolute w-[336px] h-[385px] top-[1163px] left-[382px]",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <div className="w-full relative">
      <div className="h-[1200px] relative w-full max-w-[1104px] mx-auto px-12">
        <Badge className="absolute w-[195px] h-[34px] top-[387px] left-0 bg-[#02061740] rounded-full border border-solid border-[#52525bbf] flex items-center justify-start px-0">
          <div className="absolute w-3 h-3 top-[11px] left-[13px] rounded-full">
            <div className="absolute w-3 h-3 top-0 left-0 bg-green-300 rounded-full opacity-65" />
            <div className="absolute w-3 h-3 top-0 left-0 bg-green-400 rounded-full" />
          </div>
          <div className="absolute w-[141px] h-5 top-1.5 left-[37px] [font-family:'Inter',Helvetica] font-normal text-slate-200 text-[13.3px] tracking-[0.40px] leading-5 whitespace-nowrap">
            Available for projects
          </div>
        </Badge>

        <div className="w-full max-w-[1104px] h-[101px] top-[453px] absolute left-0">
          <h1 className="absolute h-[101px] -top-0.5 left-0 [font-family:'Inter',Helvetica] font-medium text-white text-[45.2px] tracking-[-1.20px] leading-[50.4px]">
            Hi, I&apos;m Justin.
            <br />A UI/UX designer and AI practitioner.
          </h1>
        </div>

        <div className="w-[576px] h-[52px] top-[585px] absolute left-0">
          <p className="absolute w-[777px] h-[66px] -top-2 left-0 [font-family:'Inter',Helvetica] font-normal text-slate-400 text-[15.1px] tracking-[0.40px] leading-[26px]">
            Specializing in cloud and machine learning, I combine design
            thinking with data-driven insights to create intuitive, intelligent,
            and user-centered experiences. I&apos;m passionate about bridging
            human creativity and technology to solve meaningful problems.
          </p>
        </div>

        <div className="absolute w-full max-w-[1104px] h-20 top-[701px] left-0">
          <div className="relative w-[492px] h-[97px] top-[-9px] left-[-5px]">
            {socialLinks.map((link, index) => (
              <img
                key={`social-${index}`}
                className={`${link.className} hover:scale-110 hover:brightness-125 transition-all duration-300 cursor-pointer`}
                alt={link.alt}
                src={link.src}
              />
            ))}

            <Button className="absolute w-[170px] h-[65px] top-6 left-[334px] bg-zinc-950 rounded-2xl border border-solid border-[#232b34] rotate-[5deg] shadow-[9.6px_9.6px_0px_#232b34,7.2px_7.2px_0px_#232b34,4.8px_4.8px_0px_#232b34,2.4px_2.4px_0px_#232b34]">
              <div className="absolute w-[105px] h-[13px] top-50 left-6 [font-family:'Consolas-Regular',Helvetica] font-normal text-white text-[13.3px] text-center tracking-[0.76px] leading-[20.0px] whitespace-nowrap">
                EXPLORE MORE
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div className="h-[710px] relative w-full max-w-[1104px] mx-auto px-12 mt-[400px]">
        <Card className="absolute w-[295px] h-[295px] top-0 left-0 bg-[url(/astro-island.svg)] bg-[100%_100%] border-0">
          <CardContent className="p-0">
            <Badge className="relative w-28 h-[38px] top-4 left-4 bg-slate-950 rounded-full border border-solid border-slate-700 flex items-center justify-start px-0 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300">
              <img
                className="absolute w-4 h-4 top-[11px] left-[13px]"
                alt="Svg"
                src="/svg.svg"
              />
              <div className="absolute w-[58px] h-5 top-2 left-[37px] [font-family:'Inter',Helvetica] font-normal text-zinc-200 text-[13.6px] tracking-[0.40px] leading-5 whitespace-nowrap">
                Location
              </div>
            </Badge>
          </CardContent>
        </Card>

        {techStackImages.map((image, index) => (
          <img
            key={`tech-${index}`}
            className={image.className}
            alt={image.alt}
            src={image.src}
          />
        ))}

        <Card className="absolute w-[388px] h-[295px] top-0 left-[311px] bg-slate-800 rounded-3xl border-0 hover:bg-slate-700 hover:scale-105 transition-all duration-300 cursor-pointer">
          <CardContent className="relative w-[386px] h-[293px] top-px left-px bg-[#0e1218] rounded-3xl p-0">
            <div className="relative h-[293px] rounded-3xl overflow-hidden">
              <Badge className="absolute w-[151px] h-[38px] top-4 left-5 bg-slate-950 rounded-full border border-solid border-slate-700 flex items-center justify-start px-0 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300">
                <img
                  className="absolute w-4 h-4 top-[11px] left-[13px]"
                  alt="Svg"
                  src="/svg-2.svg"
                />
                <div className="absolute w-[97px] h-5 top-2 left-[37px] [font-family:'Inter',Helvetica] font-normal text-zinc-200 text-[13.6px] tracking-[0.40px] leading-5 whitespace-nowrap">
                  Featured work
                </div>
              </Badge>

              <h3 className="absolute w-[119px] h-5 top-[73px] left-5 [font-family:'Inter',Helvetica] font-normal text-white text-[19.4px] tracking-[0.40px] leading-5 whitespace-nowrap">
                LiveStock
              </h3>

              <p className="absolute w-[335px] h-[41px] top-[107px] left-5 [font-family:'Inter',Helvetica] font-normal text-slate-400 text-[13.1px] tracking-[0.40px] leading-5">
                Predict weights of livestocks using an IoT Device paired with a
                mobile application powered by computer vision.
              </p>

              <div className="absolute w-[425px] h-[183px] top-40 left-[-19px]">
                <img
                  className="absolute w-[94px] h-[167px] top-4 left-[104px] object-cover"
                  alt="Livestock pitch"
                  src="/livestock-2025-pitch-deck-1.png"
                />
                <img
                  className="absolute w-[107px] h-[151px] top-0 left-[181px] object-cover"
                  alt="Homeeee"
                  src="/homeeee-1.png"
                />
                <div className="absolute w-[425px] h-[133px] top-1 left-0 bg-[linear-gradient(0deg,rgba(14,18,24,1)_0%,rgba(14,18,24,0)_100%)]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="absolute w-[388px] h-[88px] top-[311px] left-[311px] bg-slate-800 rounded-3xl border-0 hover:bg-slate-700 hover:scale-105 transition-all duration-300 cursor-pointer">
          <CardContent className="relative w-[386px] h-[86px] top-px left-px bg-[#0e1218] rounded-3xl p-0">
            <div className="relative h-[86px] rounded-3xl flex items-center">
              <img
                className="absolute w-6 h-6 top-[31px] left-[338px]"
                alt="Svg"
                src="/svg-9.svg"
              />
              <div className="absolute w-[178px] h-6 top-[30px] left-6 [font-family:'Inter',Helvetica] font-medium text-white text-[15.4px] tracking-[0.40px] leading-6 whitespace-nowrap">
                Download my CV
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="absolute w-[388px] h-[140px] top-0 left-[716px] bg-slate-800 rounded-3xl border-0 hover:bg-slate-700 hover:scale-105 transition-all duration-300 cursor-pointer">
          <CardContent className="relative w-[386px] h-[138px] top-px left-px bg-[#0e1218] rounded-3xl p-0">
            <div className="relative h-[138px] rounded-3xl">
              <div className="absolute w-[98px] h-[98px] top-5 left-5 bg-black rounded-xl">
                <div className="relative w-[74px] h-[74px] top-3 left-3 rounded-full [background:url(../last-played-song.png)_50%_50%_/_cover]" />
              </div>

              <div className="absolute w-[233px] h-[93px] top-3 left-[142px]">
                <div className="absolute w-[225px] h-[72px] top-[21px] left-0">
                  <div className="absolute w-[77px] h-5 -top-px left-0 [font-family:'Inter',Helvetica] font-normal text-slate-400 text-[13.5px] tracking-[0.40px] leading-5 whitespace-nowrap">
                    Last played
                  </div>
                  <div className="absolute w-[225px] h-6 top-6 left-0">
                    <div className="w-[38px] h-5 top-px left-0 [font-family:'Inter',Helvetica] font-medium text-[15.9px] tracking-[0.40px] leading-6 absolute text-white whitespace-nowrap">
                      13
                    </div>
                  </div>
                  <div className="absolute w-[225px] h-5 top-[52px] left-0">
                    <div className="absolute w-[47px] h-[18px] top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-slate-400 text-[13.7px] tracking-[0.40px] leading-5 whitespace-nowrap">
                      LANY
                    </div>
                  </div>
                </div>
                <img
                  className="absolute w-[34px] h-[34px] top-0 left-[199px]"
                  alt="Background border"
                  src="/background-border.svg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="absolute w-[388px] h-[243px] top-[156px] left-[716px] bg-slate-800 rounded-3xl border-0 hover:bg-slate-700 hover:scale-105 transition-all duration-300 cursor-pointer">
          <CardContent className="relative w-[386px] h-[241px] top-px left-px bg-[#0e1218] rounded-3xl p-0">
            <div className="relative h-[241px] rounded-3xl overflow-hidden">
              <div className="w-[102px] h-[105px] top-[87px] left-5 [font-family:'Fustat',Helvetica] font-medium text-[84px] tracking-[0] leading-[105px] absolute text-white whitespace-nowrap">
                78
              </div>
              <div className="absolute w-14 h-6 top-[143px] left-[130px] [font-family:'Inter',Helvetica] font-normal text-white text-[23.8px] tracking-[0.40px] leading-6 whitespace-nowrap">
                wpm
              </div>

              <div className="w-[49px] left-5 absolute h-6 top-[193px]">
                <img
                  className="absolute w-4 h-4 top-1 left-0"
                  alt="Svg"
                  src="/svg-3.svg"
                />
                <div className="absolute w-[29px] h-6 -top-px left-5 [font-family:'Inter',Helvetica] font-normal text-slate-200 text-base text-center tracking-[0.80px] leading-6 whitespace-nowrap">
                  15s
                </div>
              </div>

              <div className="w-[63px] left-[85px] absolute h-6 top-[193px]">
                <img
                  className="absolute w-4 h-4 top-1 left-0"
                  alt="Svg"
                  src="/svg-1.svg"
                />
                <div className="absolute w-11 h-6 -top-px left-5 [font-family:'Inter',Helvetica] font-normal text-slate-200 text-base text-center tracking-[0.80px] leading-6 whitespace-nowrap">
                  100%
                </div>
              </div>

              <div className="w-[42px] left-[164px] absolute h-6 top-[193px]">
                <img
                  className="absolute w-4 h-4 top-1 left-0"
                  alt="Svg"
                  src="/svg-10.svg"
                />
                <div className="absolute w-[22px] h-6 -top-px left-5 [font-family:'Inter',Helvetica] font-normal text-slate-200 text-[15.9px] text-center tracking-[0.80px] leading-6 whitespace-nowrap">
                  EN
                </div>
              </div>

              <Badge className="absolute w-36 h-[38px] top-4 left-5 bg-slate-950 rounded-full border border-solid border-slate-700 flex items-center justify-start px-0 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300">
                <img
                  className="absolute w-4 h-4 top-[11px] left-[13px]"
                  alt="Svg"
                  src="/svg-5.svg"
                />
                <div className="absolute w-[90px] h-5 top-2 left-[37px] [font-family:'Inter',Helvetica] font-normal text-zinc-200 text-[13.3px] tracking-[0.40px] leading-5 whitespace-nowrap">
                  Typing speed
                </div>
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="absolute w-[544px] h-[295px] top-[415px] left-0 bg-slate-800 rounded-3xl border-0 hover:bg-slate-700 hover:scale-105 transition-all duration-300 cursor-pointer">
          <CardContent className="relative w-[543px] h-[293px] top-px p-0">
            <div className="absolute w-[542px] h-[293px] top-0 left-px bg-[#0e1218] rounded-3xl">
              <div className="relative h-[293px]">
                <div className="absolute w-[229px] h-5 top-7 left-[297px] overflow-hidden">
                  <div className="absolute w-[230px] h-[18px] top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-white text-[13px] text-right tracking-[0.40px] leading-5 whitespace-nowrap">
                    16 contributions in the last year
                  </div>
                </div>

                <Badge className="absolute w-[149px] h-[38px] top-4 left-4 bg-slate-950 rounded-full border border-solid border-slate-700 flex items-center justify-start px-0 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300">
                  <img
                    className="absolute w-4 h-4 top-[11px] left-[13px]"
                    alt="Svg"
                    src="/svg-6.svg"
                  />
                  <div className="absolute w-[95px] h-5 top-2 left-[37px] [font-family:'Inter',Helvetica] font-normal text-zinc-200 text-[12.9px] tracking-[0.40px] leading-5 whitespace-nowrap">
                    Github activity
                  </div>
                </Badge>

                <div className="absolute w-[510px] h-[150px] top-[79px] left-4 overflow-scroll" />
                <div className="absolute h-5 top-[252px] left-4 [font-family:'Inter',Helvetica] font-normal text-slate-200 text-[13.1px] tracking-[0.40px] leading-5 whitespace-nowrap">
                  Be easy on me, I&apos;m just starting to learn how to use
                  Github :)
                </div>
              </div>
            </div>
            <div className="absolute w-[543px] h-[157px] top-[78px] left-0 [background:url(../frame-1.png)_50%_50%_/_cover]" />
          </CardContent>
        </Card>

        <Card className="absolute w-[544px] h-[295px] top-[415px] left-[560px] bg-slate-800 rounded-3xl border-0 hover:bg-slate-700 hover:scale-105 transition-all duration-300 cursor-pointer">
          <CardContent className="relative w-[542px] h-[293px] top-px left-px bg-[#0e1218] rounded-3xl p-0">
            <img
              className="absolute w-[502px] h-16 top-[92px] left-5"
              alt="Overlay shadow"
              src="/overlay-shadow.svg"
            />
            <h3 className="absolute w-[238px] h-7 top-48 left-5 [font-family:'Inter',Helvetica] font-normal text-white text-[17px] tracking-[0.40px] leading-7 whitespace-nowrap">
              Stacks I mostly use
            </h3>
            <p className="absolute w-[502px] h-[38px] top-[229px] left-5 [font-family:'Inter',Helvetica] font-normal text-slate-400 text-[13.1px] tracking-[0.40px] leading-5">
              Primarily focused on the design and machine learning ecosystem,
              but always eager to explore and learn new technologies.
            </p>

            <Badge className="absolute w-[126px] h-[38px] top-4 left-5 bg-slate-950 rounded-full border border-solid border-slate-700 flex items-center justify-start px-0 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300">
              <img
                className="absolute w-4 h-4 top-[11px] left-[13px]"
                alt="Svg"
                src="/svg-8.svg"
              />
              <div className="absolute w-[73px] h-5 top-2 left-[37px] [font-family:'Inter',Helvetica] font-normal text-zinc-200 text-[13.5px] tracking-[0.40px] leading-5 whitespace-nowrap">
                Stacks
              </div>
            </Badge>
          </CardContent>
        </Card>
      </div>

      <div className="h-[1869px] relative w-full max-w-[1104px] mx-auto px-12 mt-[800px]">
        <Badge className="absolute w-28 h-9 top-0 left-0 bg-[#022c228c] rounded-full flex items-center justify-start px-0">
          <img
            className="absolute w-4 h-4 top-2.5 left-4"
            alt="Svg"
            src="/svg-2.svg"
          />
          <div className="absolute w-14 h-5 top-[7px] left-10 [font-family:'Inter',Helvetica] font-medium text-emerald-300 text-[13.6px] tracking-[0.35px] leading-5 whitespace-nowrap">
            Projects
          </div>
        </Badge>

        <h2 className="absolute w-[356px] h-[116px] top-[57px] left-0 [font-family:'Fustat',Helvetica] font-semibold text-white text-5xl tracking-[-1.20px] leading-[48px]">
          Milestones in the
          <br />
          learning journey
        </h2>

        <p className="absolute w-[765px] h-11 top-[197px] left-0 [font-family:'Inter',Helvetica] font-normal text-zinc-400 text-[15.1px] tracking-[0.40px] leading-6">
          Each project marks a step forward, showcasing my growth and journey as
          a designer and developer.
          <br />
          Explore how I&apos;ve tackled challenges and built solutions along the
          way.
        </p>

        <Button className="absolute w-[184px] h-[53px] top-24 left-[920px] bg-[#ffffff01] rounded-[100px] overflow-hidden shadow-[0px_0px_0px_1px_#f8f8ff]">
          <div className="absolute w-28 h-[21px] top-[15px] left-6 [font-family:'Inter',Helvetica] font-medium text-[#f8f8ff] text-[13.5px] tracking-[0.40px] leading-[21px] whitespace-nowrap">
            View all projects
          </div>
          <img
            className="absolute w-6 h-4 top-[18px] left-[140px]"
            alt="Svg"
            src="/svg-4.svg"
          />
        </Button>

        {projects.map((project, index) => (
          <div key={`project-${index}`} className={project.className}>
            <div className="w-[39px] h-6 top-[215px] left-0 [font-family:'Inter',Helvetica] font-normal text-[15.1px] tracking-[0.40px] leading-6 absolute text-white whitespace-nowrap">
              {project.year}
            </div>
            <h3 className="absolute w-[324px] h-[53px] top-[253px] left-0 [font-family:'Fustat',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[25px] whitespace-pre-line">
              {project.title}
            </h3>
            <p className="absolute w-[328px] h-[38px] top-[322px] left-0 [font-family:'Inter',Helvetica] font-normal text-zinc-400 text-[13.2px] tracking-[0.40px] leading-5">
              {project.description}
            </p>
            <Card className="absolute w-[336px] h-48 top-px left-0 bg-[#0e1218] rounded-lg overflow-hidden border border-solid border-slate-800 hover:border-slate-600 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/10 transition-all duration-300 cursor-pointer group">
              <CardContent className="relative h-[252px] top-[-15px] p-0">
                <div className="w-[52px] h-[52px] top-16 left-[57px] rounded-[26px] blur-[50px] absolute bg-emerald-400" />
                <img
                  className="absolute w-[174px] h-[98px] top-[70px] left-[105px]"
                  alt="Polygon"
                  src="/polygon-1-3.svg"
                />
                <img
                  className="absolute w-[113px] h-11 top-[53px] left-[69px]"
                  alt="Polygon"
                  src="/polygon-2-2.svg"
                />
                <div className="w-[50px] h-[31px] top-[59px] left-[220px] rounded-[25px/15.5px] blur-[50px] absolute bg-emerald-400" />
                <div className="w-[50px] h-[31px] top-[70px] left-[152px] rounded-[25px/15.5px] blur-[50px] absolute bg-emerald-400" />
                <div className="absolute w-[330px] h-[117px] top-[90px] left-0 bg-[linear-gradient(0deg,rgba(14,18,24,1)_0%,rgba(14,18,24,0)_100%)]" />
                <img
                  className="absolute w-[336px] h-[252px] top-0 left-0 object-cover group-hover:scale-110 transition-transform duration-300"
                  alt="Project image"
                  src={project.image}
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
