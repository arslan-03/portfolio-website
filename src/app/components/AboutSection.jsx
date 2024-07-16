"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Backend Workflows</li>
        <li>Scheduling</li>
        <li>API integration</li>
        <li>Payment Gateways</li>
        <li>Workload Optimization</li>
        <li>Relational Database Design</li>
        <li>JavaScript / CSS / HTML</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BS Biotechnology from University of Management and Technology</li>
        <li>Pre Medical from Punjab College Campus 8</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>Freelancer at Fiverr & Upwork</li>
        <li>Senior Developer at Golden Star&apos;s School</li>
        <li>Lead Bubble Developer at IREG-IT</li>
      </ul>
    ),  
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a Full Stack Bubble.io developer with 3+ years of experience in the field. I create highly complex backend and recursive workflows, relational database tables, API integrations with your favourite third-party apps, custom email templates, and much more. Feel free to send a message, and let&apos;s discuss how I can help bring your ideas to reality.


          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              {" "}
              Experiences{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
  

    </section>
  );
};

export default AboutSection;
