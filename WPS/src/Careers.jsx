import React from "react";
import styled from "styled-components";

const CareersSection = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
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

const Content = styled.div`
  padding: 2rem;
  text-align: left;
  max-width: 900px;
  margin: auto;
  line-height: 1.6;
  color: #333;
`;

const NoOpenings = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #666;
  text-align: center;
  margin-top: 20px;
`;

const Careers = () => {
  return (
    <CareersSection>
      <Banner>Careers</Banner>
      <Content>
        <p>
          CFSF is an equal opportunity employer and seeks to further diversify
          its staff by attracting a professional team that is representative of
          the beneficiaries and constituencies we serve. CFSF does not
          discriminate against any individual in matters of employment. We set
          high professional standards and recruit based on a rigorous set of
          criteria to ensure future excellence in our organization.
        </p>
        <NoOpenings>We have no openings at the moment, check back later.</NoOpenings>
      </Content>
    </CareersSection>
  );
};

export default Careers;
