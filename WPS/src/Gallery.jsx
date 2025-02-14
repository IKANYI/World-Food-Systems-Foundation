import React from "react";
import styled from "styled-components";

const GallerySection = styled.div`
  text-align: center;
  padding: 2rem;
  font-family: Arial, sans-serif;
`;

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  background: url("https://via.placeholder.com/1366x250") center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  background-blend-mode: overlay;
  background-color: rgba(0, 128, 0, 0.6);
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
  padding: 1rem;
`;

const ImageBox = styled.div`
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const images = [
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200",
];

const Gallery = () => {
  return (
    <GallerySection>
      <Banner>Gallery</Banner>
      <GalleryGrid>
        {images.map((src, index) => (
          <ImageBox key={index}>
            <img src={src} alt={`Gallery ${index + 1}`} />
          </ImageBox>
        ))}
      </GalleryGrid>
    </GallerySection>
  );
};

export default Gallery;
''