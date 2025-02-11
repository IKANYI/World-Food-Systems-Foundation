import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Sample partner logos (replace with actual image URLs)
const partnerLogos = [
  { src: "/images/partner1.png", alt: "Partner 1" },
  { src: "/images/partner2.png", alt: "Partner 2" },
  { src: "/images/partner3.png", alt: "Partner 3" },
  { src: "/images/partner4.png", alt: "Partner 4" },
];

const Section = styled.div`
  background: #ffffff;
  padding: 2rem;
  text-align: center;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  color: green;
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  background: #f0f0f0;
  padding: 1rem;
  width: 250px;
`;

const StyledSwiper = styled(Swiper)`
  width: 80%;
  margin: auto;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 150px;
    height: auto;
    object-fit: contain;
  }
`;

const PartnersCarousel = () => {
  return (
    <Section>
      <TitleContainer>
        <Title>OUR PARTNERS</Title>
      </TitleContainer>
      <StyledSwiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {partnerLogos.map((partner, index) => (
          <SwiperSlide key={index}>
            <img src={partner.src} alt={partner.alt} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Section>
  );
};

export default PartnersCarousel;
