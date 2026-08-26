"use client";
import Btn from "@/components/global/Btn";
import { motion } from "framer-motion";
import AnimatedBar from "./AnimatedBar";
import Image from "next/image";
import { useEffect, useState } from "react";
import TransitionLink from "@/src/app/TransitionLink";

export default function HeroBannerClient() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768); // breakpoint for desktop
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const MotionWrapper = isDesktop ? motion.div : "div";

  return (
    <section className="relative w-full text-[#f47922] h-[auto] md:h-[70vh] lg:h-[70vh] xl:h-[100vh] lg:aspect-[16/8.3] 1920:aspect-[16/7.7] lg:object-bottom overflow-hidden aspect-[9/15]">
      <p className="font-medium absolute top-0 left-0 z-20 w-full overflow-hidden bg-black/100 py-2 text-[14px] md:text-[19px] flex">
        <span className="inline-block min-w-max whitespace-nowrap hero-marquee">
          We are officially listed on the Indian Stock Exchange! NSE: HORIZONIND
          BSE: 54480 Thank you investors, customers and partners for your
          support and belief in what we are building.{" "}
          <span className="inline-block ml-[15px] md:ml-[40px] md:mr-[40px]">
            |
          </span>
        </span>
        <span className="inline-block min-w-max whitespace-nowrap hero-marquee">
          We are officially listed on the Indian Stock Exchange! NSE: HORIZONIND
          BSE: 54480 Thank you investors, customers and partners for your
          support and belief in what we are building.{" "}
          <span className="inline-block ml-[15px] md:ml-[40px] md:mr-[40px]">
            |
          </span>
        </span>
        <span className="inline-block min-w-max whitespace-nowrap hero-marquee">
          We are officially listed on the Indian Stock Exchange! NSE: HORIZONIND
          BSE: 54480 Thank you investors, customers and partners for your
          support and belief in what we are building.{" "}
          <span className="inline-block ml-[15px] md:ml-[40px] md:mr-[40px]">
            |
          </span>
        </span>
        <span className="inline-block min-w-max whitespace-nowrap hero-marquee">
          We are officially listed on the Indian Stock Exchange! NSE: HORIZONIND
          BSE: 54480 Thank you investors, customers and partners for your
          support and belief in what we are building.{" "}
          <span className="inline-block ml-[15px] md:ml-[40px] md:mr-[40px]">
            |
          </span>
        </span>
        <span className="inline-block min-w-max whitespace-nowrap hero-marquee">
          We are officially listed on the Indian Stock Exchange! NSE: HORIZONIND
          BSE: 54480 Thank you investors, customers and partners for your
          support and belief in what we are building.{" "}
          <span className="inline-block ml-[15px] md:ml-[40px] md:mr-[40px]">
            |
          </span>
        </span>
        <span className="inline-block min-w-max whitespace-nowrap hero-marquee">
          We are officially listed on the Indian Stock Exchange! NSE: HORIZONIND
          BSE: 54480 Thank you investors, customers and partners for your
          support and belief in what we are building.{" "}
          <span className="inline-block ml-[15px] md:ml-[40px] md:mr-[40px]">
            |
          </span>
        </span>
        <span className="inline-block min-w-max whitespace-nowrap hero-marquee">
          We are officially listed on the Indian Stock Exchange! NSE: HORIZONIND
          BSE: 54480 Thank you investors, customers and partners for your
          support and belief in what we are building.{" "}
          <span className="inline-block ml-[15px] md:ml-[40px] md:mr-[40px]">
            |
          </span>
        </span>
        <span className="inline-block min-w-max whitespace-nowrap hero-marquee">
          We are officially listed on the Indian Stock Exchange! NSE: HORIZONIND
          BSE: 54480 Thank you investors, customers and partners for your
          support and belief in what we are building.{" "}
          <span className="inline-block ml-[15px] md:ml-[40px] md:mr-[40px]">
            |
          </span>
        </span>
        <span className="inline-block min-w-max whitespace-nowrap hero-marquee">
          We are officially listed on the Indian Stock Exchange! NSE: HORIZONIND
          BSE: 54480 Thank you investors, customers and partners for your
          support and belief in what we are building.{" "}
          <span className="inline-block ml-[15px] md:ml-[40px] md:mr-[40px]">
            |
          </span>
        </span>
        <span className="inline-block min-w-max whitespace-nowrap hero-marquee">
          We are officially listed on the Indian Stock Exchange! NSE: HORIZONIND
          BSE: 54480 Thank you investors, customers and partners for your
          support and belief in what we are building.{" "}
          <span className="inline-block ml-[15px] md:ml-[40px] md:mr-[40px]">
            |
          </span>
        </span>
        <span className="inline-block min-w-max whitespace-nowrap hero-marquee">
          We are officially listed on the Indian Stock Exchange! NSE: HORIZONIND
          BSE: 54480 Thank you investors, customers and partners for your
          support and belief in what we are building.{" "}
          <span className="inline-block ml-[15px] md:ml-[40px] md:mr-[40px]">
            |
          </span>
        </span>
        <span className="inline-block min-w-max whitespace-nowrap hero-marquee">
          We are officially listed on the Indian Stock Exchange! NSE: HORIZONIND
          BSE: 54480 Thank you investors, customers and partners for your
          support and belief in what we are building.{" "}
          <span className="inline-block ml-[15px] md:ml-[40px] md:mr-[40px]">
            |
          </span>
        </span>
        <span className="inline-block min-w-max whitespace-nowrap hero-marquee">
          We are officially listed on the Indian Stock Exchange! NSE: HORIZONIND
          BSE: 54480 Thank you investors, customers and partners for your
          support and belief in what we are building.{" "}
          <span className="inline-block ml-[15px] md:ml-[40px] md:mr-[40px]">
            |
          </span>
        </span>
      </p>
      <style jsx>{`
        .hero-marquee {
          animation: hero-marquee 25s linear infinite;
        }

        @keyframes hero-marquee {
          from {
            transform: translateX(100vw);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>

      {/* <div className="absolute top-0 left-0 z-20 w-full overflow-hidden bg-black">
        <div className="flex w-max animate-marquee">
         
          <span className="txt_gradient inline-block whitespace-nowrap py-2 text-[14px] md:text-[19px] px-5 font-medium">
            We are officially listed on the Indian Stock Exchange! NSE:
            HORIZONIND BSE: 54480 Thank you investors, customers and partners
            for your support and belief in what we are building.
            <span className="inline-block mx-[15px]">|</span>
          </span>

          <span className="txt_gradient inline-block whitespace-nowrap py-2 text-[14px] md:text-[19px] px-5 font-medium">
            We are officially listed on the Indian Stock Exchange! NSE:
            HORIZONIND BSE: 54480 Thank you investors, customers and partners
            for your support and belief in what we are building.
            <span className="inline-block mx-[15px]">|</span>
          </span>

          <span className="txt_gradient inline-block whitespace-nowrap py-2 text-[14px] md:text-[19px] px-5 font-medium">
            We are officially listed on the Indian Stock Exchange! NSE:
            HORIZONIND BSE: 54480 Thank you investors, customers and partners
            for your support and belief in what we are building.
            <span className="inline-block mx-[15px]">|</span>
          </span>
        </div>
      </div> */}

      {/* <style jsx>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }

        .txt_gradient {
          -webkit-text-fill-color: transparent;
          background: linear-gradient(92deg, #8f53a1 37.32%, #f47922 98.38%);
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style> */}

      <video
        autoPlay
        muted
        loop
        preload="metadata"
        poster="/home/home_banner_desk.webp"
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 lg:block hidden"
      >
        <source
          src="https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2026/01/home_desk_1.mp4"
          type="video/mp4"
          fetchpriority="high"
        />
      </video>

      <video
        autoPlay
        muted
        loop
        preload="metadata"
        poster="/home/home_banner_mob.webp"
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 lg:hidden block "
      >
        <source
          src="https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2026/01/home_mob_1.mp4"
          type="video/mp4"
          fetchpriority="high"
          className=""
        />
      </video>

      {/* Overlay with content */}
      <div className="z-10 flex flex-col items-end justify-end pb-[7%] sm:pb-0 md:pt-0 pt-[125%] w-full h-full p-3 md:p-6 md:flex-row md:items-end lg:p-12 bg-gradient-to-r from-black/60 to-transparent">
        {/* Right Cards Section */}
        <div className="z-10 flex w-full md:flex items-center gap-[8px] md:gap-5 1024:items-end 768:justify-end 768:mb-8 1024:mb-0 xl:justify-end xl:flex-1 pr-0 2xl:pr-[95px]">
          {/* Left Card */}
          <div className="relative w-[160px] h-[55px] sm:h-[100px] sm:w-[200px] lg:w-[280px] 2xl:w-[330px] xl:h-[157px] overflow-visible">
            <MotionWrapper
              initial={isDesktop ? { y: 100, opacity: 0 } : {}}
              whileInView={isDesktop ? { y: 0, opacity: 1 } : {}}
              transition={
                isDesktop
                  ? { duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.3 }
                  : {}
              }
              viewport={{ amount: 0, once: true }}
              className="relative w-full h-full"
            >
              {/* Background Image */}
              <Image
                src="/leftcon.webp"
                alt="Left Container"
                fill
                priority
                className="object-cover "
              />

              {/* Foreground Content */}
              <div className="relative z-20 flex items-end justify-between w-full h-full px-1.5 py-2 md:pl-2.5 xl:pl-[32px]">
                <div className="gap-[5px] flex flex-row items-end h-full text-white md:items-start md:flex-col justify-evenly">
                  <TransitionLink
                    href="/know-us/"
                    className="gap-[5px] flex flex-row items-end h-full text-white md:items-start md:flex-col justify-evenly"
                  >
                    <h3 className="w-fit md:w-auto text-left uppercase text-[12px] xl:text-[16px] flex-col md:flex-col flex bw-r tracking-[0.04em] md:leading-[26px] leading-[16px]">
                      Know
                      <span>Horizon</span>
                    </h3>
                    <span className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] ">
                      <Image
                        src="/whiteexternal.svg"
                        width={25}
                        height={25}
                        priority
                        alt="External"
                      />
                    </span>
                  </TransitionLink>
                </div>

                {/* Employee Image */}
                <div className="absolute bottom-0 1280:bottom-[-2.5px] right-0 md:right-2 xl:right-4 w-[46px] h-[46px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[100px] xl:w-[145px] xl:h-[175px]">
                  <Image
                    src="/employee.webp"
                    alt="Horizon"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* Right Card */}
          <div className="relative w-[160px] h-[55px] sm:h-[100px] sm:w-[200px] lg:w-[280px] 2xl:w-[330px] xl:h-[157px] overflow-visible">
            <MotionWrapper
              initial={isDesktop ? { y: 100, opacity: 0 } : {}}
              whileInView={isDesktop ? { y: 0, opacity: 1 } : {}}
              transition={
                isDesktop
                  ? { duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.38 }
                  : {}
              }
              viewport={{ amount: 0, once: true }}
              className="relative w-full h-full"
            >
              {/* Background Image */}
              <Image
                src="/rightcon.webp"
                alt="Right Container"
                fill
                priority
                className="object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-start gap-[7px] pl-[9px] 2xl:mr-[20px] justify-center sm:items-start sm:justify-center sm:gap-4 pr-6 2xl:pr-8 2xl:pl-[45px] xl:pl-6">
                {/* First link */}
                <TransitionLink
                  href="/capabilities-overview/" // 👈 your target URL
                  className="flex items-center w-full gap-1.5 sm:gap-1 2xl:gap-4 group justify-between"
                >
                  <span className="text-[10px] whitespace-nowrap sm:text-[10px] xl:text-[16px] tracking-[0.04em] uppercase bw-sb ">
                    Core Capabilities
                  </span>
                  <div className="w-[16px] h-[16px] 1280:w-[24px] 1280:h-[24px] contents">
                    <img
                      src="/whiteexternal.svg"
                      alt="External link"
                      loading="eager"
                      className="w-[16px] h-[16px] 1280:w-[24px] 1280:h-[24px]"
                    />
                  </div>
                </TransitionLink>

                {/* Second link */}
                <TransitionLink
                  href="/integrated-solutions-overview/" // 👈 your target URL
                  className="flex items-center w-full gap-1.5 sm:gap-1 2xl:gap-4 group justify-between"
                >
                  <span className="text-[10px] whitespace-nowrap xl:text-[16px] tracking-[0.04em] uppercase bw-sb ">
                    Integrated Solutions
                  </span>
                  <div className="w-[16px] h-[16px] 1280:w-[24px] 1280:h-[24px] contents">
                    <img
                      src="/whiteexternal.svg"
                      alt="External link"
                      loading="eager"
                      className="w-[16px] h-[16px] 1280:w-[24px] 1280:h-[24px]"
                    />
                  </div>
                </TransitionLink>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
