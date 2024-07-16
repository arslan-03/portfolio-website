"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Game Verdict",
    description: "A complex game matching system that prompts the user to take a quick quiz of 7 questions to judge their preference in games. These preferences are then matched with all the available games and the system displays a list of games that match their preferences in a beautiful UI design. The user can add the games to their wishlist; buy them; or add it to their collection, if they have already played it. Additional functionalities include review and rating system, and friends",
    image: "/images/projects/gameVerdict.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.gameverdict.io",
  },
  {
    id: 2,
    title: "TicketBhai",
    description: "Ticket Booking app that is being used by users in Dhaka, Bangladesh to explore and buy tickets for the events happening near them and for the event organizers to create and manage events. The site also has ticket authentication module allowing the employees at the event to scan all the tickets and see their status. Additional functionalities include detailed analytics, geolocation, secure payments, ticket transfer, ticket bank and much more",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://ticketbhai.com",
  },
  {
    id: 3,
    title: "The Stacks",
    description: "An automatated newsletter for StacksJournal that allow users to signup and select the scientific topics, themes and fields they are interested in and get weekly newsletter for that specific topic. Additionally, it is integrated with ActiveCampaign and PostMark where a list for each topic is automatically created in ActiveCampaign upon meeting a certain criteria that the admin sets, and the users are added to the lists based on the dynamic automations set by admins.",
    image: "/images/projects/stacks.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://thestacks.stacksjournal.org",
  },
  {
    id: 4,
    title: "TAWK Families App",
    description: 'A social media app for "Travel Australia With Kids" users to sign up and see other the real-time location of other users around them on a map. They can view detailed profile of these users or message them using in=app messages to plan a fun trip together. Geolocation is used to calculate the accurate location of a user by first retrieving the IP address and then getting the Geo based on the IP. ',
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://app.travelaustraliawithkids.com.au",
  },
  {
    id: 5,
    title: "Axion Labs",
    description: "An AI assistant hub that integrates with RetellAi, Vapi, Twillio and other APIs allowing the users to create assistants and configure them; buy and set up phone numbers; call assistants or setup automated calls to use the assistant as consultants. There's also a history module to view all calls, their cost, as well as a summary and transcript of the call that comes from Generative AI",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://axionlab.online/",
  },
  {
    id: 6,
    title: "Recruitment SaaS Project",
    description: "A recruitment website that operates in Italy and allows companies to sign up and create job openings which the users can apply to. Users can also save jobs, filter them according to their liking, view details about the job post or the company, view other jobs by the same company and much more. They can also add their preferences and the system will show them the jobs that match their preferences.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
