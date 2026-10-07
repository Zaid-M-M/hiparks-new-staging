import React from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/global/Breadcrumbs";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";
import { getVideoEmbedUrl } from "@/components/resources/ClientTestimonials/testimonialUtils";

// Title + video, laid out like the news detail hero (NDHero)
const CTHero = ({ testimonial }) => {
  const embedUrl = getVideoEmbedUrl(
    testimonial.embedUrl || testimonial.videoUrl,
  );

  return (
    <div className="w-full pt-[45px] pb-0 bg-white">
      <div className="fix">
        {/* Breadcrumb */}
        <div className="mb-0">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              {
                label: "Client Testimonials",
                href: "/resources?tab=client-testimonials",
              },
            ]}
            color="#000000"
          />
        </div>

        {/* Title with Abstract Pattern */}
        <div className="mt-[15px] mb-[50px]">
          <h1
            className="bw-r text-[28px] leading-[36px] md:text-[45px] md:leading-[55px] lg:text-[56px] lg:leading-[66px]
            tracking-[-1.4px] md:tracking-[-1.8px] lg:tracking-[-2.24px] mb-2 lg:mb-[20px] text-[#000000]"
            dangerouslySetInnerHTML={{ __html: testimonial.company }}
          />
          <img
            src="/abstract_pattern.svg"
            alt="Abstract Pattern"
            className="abstract_svg"
          />
        </div>

        {/* Video (falls back to the thumbnail if there is no video) */}
        {embedUrl ? (
          <div className="relative w-full aspect-video overflow-hidden bg-black mb-[45px] md:mb-[50px]">
            <iframe
              src={embedUrl}
              title={`${testimonial.companyText} - Client Testimonial`}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          testimonial.image && (
            <div className="w-full overflow-hidden mb-[45px] md:mb-[50px]">
              <Image
                src={formatMediaUrl(testimonial.image)}
                priority
                alt={testimonial.companyText}
                width={1920}
                height={1080}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CTHero;
