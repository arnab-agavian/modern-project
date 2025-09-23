'use client';
import HeroSection from "@/components/Homepage/HeroSection";
import HeroSectionTwo from "@/components/Homepage/HeroSection2";
import PartnersSwiper from "@/components/Homepage/PartnerSwiper";
import ProjectsSection from "@/components/Homepage/ProjectSection";
import TestimonialSection from "@/components/Homepage/TestimonialSection";
import ByTheNumbers from "@/components/Homepage/ByTheNumbers";
import BlogSection from "@/components/Homepage/BlogSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSwiper />
      <HeroSectionTwo />
      <ProjectsSection />
      <ByTheNumbers />
      <BlogSection />
      <TestimonialSection />
    </>
  );
}
