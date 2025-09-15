import React from "react";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";

export const MainScreen = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col w-full">
      <div className="bg-zinc-950 flex-1 flex flex-col relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <div className="absolute w-[410px] h-[410px] top-[113px] left-[325px] rounded-[205px] blur-[250px] bg-emerald-400" />

            <img
              className="absolute w-[1250px] h-[833px] top-[524px] left-[672px]"
              alt="Polygon"
              src="/polygon-1-7.svg"
            />

            <img
              className="absolute w-[812px] h-[375px] top-[372px] left-[409px]"
              alt="Polygon"
              src="/polygon-2-6.svg"
            />

            <div className="w-[361px] h-[261px] top-[429px] left-[1497px] rounded-[180.5px/130.5px] blur-[250px] absolute bg-emerald-400" />

            <div className="w-[362px] h-[260px] top-[524px] left-[1008px] rounded-[181px/130px] blur-[250px] absolute bg-emerald-400" />
          </div>

          <div className="absolute top-0 left-0 w-full h-[1200px] overflow-hidden">
            <div className="relative w-full h-full">
              <div className="absolute w-[1192px] h-[267px] top-[-252px] left-[100px] rounded-full rotate-[-20deg] blur-xl [background:radial-gradient(50%_50%_at_50%_50%,rgba(131,221,158,1)_0%,rgba(49,102,180,0.5)_100%)] opacity-40" />

              <div className="w-[1192px] h-[276px] top-[-200px] left-[240px] rotate-[-32deg] opacity-25 absolute rounded-full blur-xl [background:radial-gradient(50%_50%_at_50%_50%,rgba(131,221,158,1)_0%,rgba(49,102,180,0.5)_100%)]" />

              <div className="w-[1758px] h-[388px] top-[-440px] left-[-200px] rotate-[40deg] opacity-80 absolute rounded-full blur-xl [background:radial-gradient(50%_50%_at_50%_50%,rgba(131,221,158,1)_0%,rgba(49,102,180,0.5)_100%)]" />

              <div className="w-[1192px] h-[492px] top-[-280px] left-[960px] rotate-[-32deg] opacity-75 absolute rounded-full blur-xl [background:radial-gradient(50%_50%_at_50%_50%,rgba(131,221,158,1)_0%,rgba(49,102,180,0.5)_100%)]" />
            </div>
          </div>
        </div>

        <div className="relative z-10 flex-1">
          <MainContentSection />
        </div>
      </div>

      <FooterSection />
    </div>
  );
};
