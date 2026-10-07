"use client";
import React, { useState, useEffect } from "react";
import cmsApi from "@/src/lib/cmsApi";
import TestimonialCard from "@/components/resources/ClientTestimonials/TestimonialCard";
import {
  FEATURED_TESTIMONIAL,
  transformTestimonial,
} from "@/components/resources/ClientTestimonials/testimonialUtils";

// Description + related testimonials, laid out like the news detail content (NDContent)
const CTContent = ({ testimonial }) => {
  const [relatedTestimonials, setRelatedTestimonials] = useState([]);
  const [relatedLoading, setRelatedLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fetchRelatedTestimonials = async () => {
      try {
        const result = await cmsApi.getCustomersSpeak({ per_page: 100 });
        if (cancelled) return;

        if (result.success) {
          // Same order as the Client Testimonials tab, minus the current one
          const allItems = [
            FEATURED_TESTIMONIAL,
            ...(result.data || []).map(transformTestimonial),
          ];
          setRelatedTestimonials(
            allItems
              .filter((item) => item.slug && item.slug !== testimonial.slug)
              .slice(0, 3),
          );
        } else {
          setRelatedTestimonials([]);
        }
      } catch (error) {
        if (cancelled) return;
        console.error("Error fetching related testimonials:", error);
        setRelatedTestimonials([]);
      }
      if (!cancelled) setRelatedLoading(false);
    };

    fetchRelatedTestimonials();
    return () => {
      cancelled = true;
    };
  }, [testimonial.slug]);

  return (
    <div className="w-full bg-white mb-[45px] md:mb-[125px]">
      <div className="fix">
        {/* Content */}
        {testimonial.descriptionHtml && (
          <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[100px] news-content">
            <div className="w-full">
              <div
                className="content-wrapper bw-r text-[16px] leading-[28px] text-[#666666]"
                dangerouslySetInnerHTML={{
                  __html: testimonial.descriptionHtml,
                }}
              />
            </div>
          </div>
        )}

        {/* Related Testimonials Section */}
        {!relatedLoading && relatedTestimonials.length > 0 && (
          <div className="mt-[60px] md:mt-[125px]">
            <div className="mb-[30px] md:mb-[50px]">
              <h2 className="bw-m text-[32px] leading-[40px] md:text-[45px] md:leading-[55px] tracking-[-1.8px] text-black">
                Related Testimonials
              </h2>
              <img
                src="/abstract_pattern.svg"
                alt="Abstract Pattern"
                className="abstract_svg"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] md:gap-[40px]">
              {relatedTestimonials.map((item) => (
                <TestimonialCard key={item.id} testimonial={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CTContent;
