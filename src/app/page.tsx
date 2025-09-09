"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "slide" }}>
      <NavbarBase
        logoSrc="/images/logo.svg"
        logoAlt="NovaPulse Logo"
        leftButtonText=""
        rightButtonText="Start Free Trial"
        onLeftButtonClick={() => {}}
        onRightButtonClick={() => {}}
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to NovaPulse"
          subtitle="Your gateway to the future of SaaS"
          contractAddress="0x123456789"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="Discover NovaPulse"
          descriptions={["A SaaS designed for the future.", "Join us today!"]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: "Step 1", description: "Create an account.", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Connect your wallet.", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Purchase your tokens.", image: "/images/placeholder3.avif", position: "right", isCenter: false },
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics"
          description="Understanding our cryptocurrency's structure."
          kpiItems={[
            { value: "1M", description: "Total Supply", longDescription: "The total supply of tokens available.", icon: DollarSign },
            { value: "500K", description: "Market Cap", longDescription: "Current market capitalization of our token.", icon: Graph },
            { value: "5%", description: "Transaction Fee", longDescription: "Percentage fee taken on each transaction.", icon: Percent },
          ]}
        />
      </div>

      <div id="faq" data-section="faq" className="scroll-mt-24">
        <CentralFAQ
          items={[
            { title: "What is NovaPulse?", content: "NovaPulse is a SaaS platform for..." },
            { title: "How to get started?", content: "Create an account and connect your wallet." },
            // Additional FAQ items
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="NovaPulse Logo"
          columns={[
            { title: "Quick Links", items: [{ label: "Home", onClick: () => {} }, { label: "About", onClick: () => {} }] },
            { title: "Support", items: [{ label: "Contact", onClick: () => {} }, { label: "FAQ", onClick: () => {} }] },
          ]}
          copyrightText="© 2023 NovaPulse. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}