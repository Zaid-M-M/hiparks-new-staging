import React from "react";
import ParksSliderF from "./ParkSliderF";

const HorizonParks = ({ data }) => {
  return (
    <div className="w-full md:pb-[40px] lg:pb-[40px] lg:pt-[90px] md:pt-[50px] pt-[22.5] pb-[20px] fix min-h-[100vh] relative">
      <img
        class="purple_vctr  hidden lg:block absolute top-0 right-0 md:top-[-250px] md:right-[50px] lg:w-[450px] md:w-[350px] w-[300px]"
        src="/purple_vector.svg"
      ></img>
      <img
        class="green_vctr  hidden lg:block absolute top-0 right-0 md:top-[-230px] md:right-[-100px] lg:w-[450px] md:w-[350px] w-[300px]"
        src="/green_vector.svg"
      ></img>
      <div className="flex flex-col pb-8 lg:pb-[60px] justify-between md:gap-[20px] gap-[25px] 1366:gap-[60px] xl:flex-row ">
        <div className=" max-w-[600px] md:max-w-[100%] xl:max-w-[45%] relative">
          <div className="flex flex-col md:flex-col  relative  md:w-[460px] lg:w-[auto]">
            <div className="flex items-start gap-2 lg:gap-[0px] xl:gap-5 flex-col relative">
              <div className="relative lg:absolute lg:top-[-50px] bw-m px-[8px] py-[3px] md:px-[10px] md:py-[7px] w-fit border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)] backdrop-blur-[60px] text-black">
                <a
                  href="/"
                  className="text-[13px] md:text-[13px] lg:text-[16px]"
                >
                  Home
                </a>{" "}
                /{" "}
                <a
                  href="#"
                  className="text-[13px] md:text-[13px] lg:text-[16px]"
                >
                  {data.name}
                </a>
              </div>
              <h2
                className="text-[32px] hparkhead leading-[42px] lg:leading-[66px] md:text-[45px] xl:text-[48px] 1366:text-[54px] 1440:text-[59px] xl:leading-[58px] 1366:leading-[64px] 1440:leading-[69px] flex flex-col max-h-fit justify-start bw-m lg:w-[auto] capitalize tracking-[-0.04em]"
                dangerouslySetInnerHTML={{ __html: data.stitle1 }}
              ></h2>

              <div className="flex gap-[10px] md:gap-[17px] flex-row xl:mt-[-15px]">
                <h2
                  className="text-[32px] hparkhead leading-[33px] md:leading-[55px] md:text-[45px] xl:text-[48px] 1366:text-[54px] 1440:text-[59px] xl:leading-[58px] 1366:leading-[64px] 1440:leading-[69px] flex flex-col max-h-fit justify-start bw-r  lg:w-[auto] capitalize tracking-[-0.04em]"
                  dangerouslySetInnerHTML={{ __html: data.stitle2 }}
                ></h2>
                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg mt-[2px] xl:mt-[5px]"
                  alt="Grade A Box"
                />
              </div>
            </div>
          </div>
          <div class="hidden 1024:h-auto 1024:block relative top-auto lg:bottom-[0px] lg:mt-[50px]">
            <img
              src="/state/state_pg_arrow_img.svg"
              alt="state_pg_arrow_img"
              class="object-contain w-full max-h-[500px]"
            />
          </div>
        </div>
        <div className="flex flex-col xl:gap-6 gap-3 xl:max-w-1/2 max-w-full">
          <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
            <div
              className="bw-r text-[16px] leading-[24px] md:text-[20px] md:leading-[28px] text-black space-y-4"
              dangerouslySetInnerHTML={{ __html: data.paragraph }}
            />
          </p>
          {/* <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
            Horizon Urban Logistics Park Delhi I is situated just 19 km from KMP
            Expressway and 13 km from the Singhu Border, while Delhi II is 17 km
            away from KMP Expressway and 10 km from the Singhu Border. Both
            these parks cater not only to the city of Delhi but also extend
            their reach to Haryana, Punjab, and the Himachal belt. These prime
            locations have easy accessibility to emergency services, including
            police and fire stations, and a multi-speciality hospital.
          </p>
          <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
            These 100% globally compliant Grade A facilities come in
            ready-to-move and built-to-suit options, so that your next base in
            North India is augmented efficiently by our design and service
            versatility.
          </p> */}
        </div>
      </div>
      <ParksSliderF />
    </div>
  );
};

export default HorizonParks;
