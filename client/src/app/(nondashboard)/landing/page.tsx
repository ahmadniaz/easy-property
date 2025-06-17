import React from "react";
import HeroSection from "./heroSection";
import FeaturesSection from "./featuresSection";
import DiscoverSection from "./discoverSection";
import CallToActionSection from "./callToAction";
import FooterSection from "./footerSection";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <DiscoverSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
};

export default Landing;
