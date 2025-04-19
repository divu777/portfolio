"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/section-wrapper";
import SectionHeading from "@/components/section-heading";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useAnimationOnView } from "@/hooks/use-animation-on-view";

// Experience data
const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Oriserve",
    location: "Remote",
    period: "Sept 2024 – March 2025",
    description: [
      "Developed a scalable data pipeline for IKEA, processing CSV files every 6 hours and reducing preprocessing time by 30%",
      "Collaborated on a WhatsApp communication system for Vodafone, designing a CSV-driven template engine",
      "Enhanced reporting and vernacular support—expanding from 2 to 9 languages",
      "Contributed to a voice AI agent project that reduced call response latency by 35%"
    ]
  },
  {
    title: "Front End Developer Intern",
    company: "TwoKey",
    location: "Remote",
    period: "March 2024 – May 2024",
    description: [
      "Revamped the company website, focusing on responsive design",
      "Slashed page load times by 30% through code optimization and efficient use of Context API",
      "Improved user engagement metrics through performance optimizations"
    ]
  },
  {
    title: "Freelance Developer",
    company: "Upwork Platform",
    location: "Remote",
    period: "June 2024 – July 2024",
    description: [
      "Translated intricate Figma designs into a fully functional stock broker platform",
      "Collaborated with clients to set up and refine backend APIs",
      "Reduced development time by 20% through efficient implementation strategies"
    ]
  }
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading 
        title="My Experience"
        subtitle="A timeline of my professional journey in software development"
      />
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-border" />
        
        {/* Experience items */}
        <div className="relative space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index} 
              experience={exp} 
              index={index}
              isRight={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

type ExperienceItemProps = {
  experience: {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string[];
  };
  index: number;
  isRight: boolean;
};

function ExperienceItem({ experience, index, isRight }: ExperienceItemProps) {
  const [ref, controls, hasAnimated] = useAnimationOnView(0.1);
  
  const variants = {
    hidden: { 
      opacity: 0, 
      x: isRight ? 50 : -50 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      }
    }
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={`relative md:w-1/2 ${isRight ? 'md:ml-auto' : 'md:mr-auto'} pl-10 md:pl-0 ${isRight ? 'md:pr-10' : 'md:pl-10'}`}
    >
      {/* Timeline dot */}
      <div className={`absolute left-0 md:left-auto ${isRight ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'} top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center`}>
        <div className="w-3 h-3 rounded-full bg-background"></div>
      </div>
      
      {/* Content card */}
      <motion.div 
        variants={childVariants}
        className="bg-card p-6 rounded-lg shadow-md border border-border hover:border-primary/50 transition-colors duration-300"
      >
        <motion.h3 variants={childVariants} className="text-xl font-bold mb-1">
          {experience.title}
        </motion.h3>
        <motion.h4 variants={childVariants} className="text-lg text-primary mb-3">
          {experience.company}
        </motion.h4>
        
        <motion.div variants={childVariants} className="flex items-center text-muted-foreground mb-1 text-sm">
          <MapPin size={14} className="mr-1" />
          <span>{experience.location}</span>
        </motion.div>
        
        <motion.div variants={childVariants} className="flex items-center text-muted-foreground mb-4 text-sm">
          <Calendar size={14} className="mr-1" />
          <span>{experience.period}</span>
        </motion.div>
        
        <motion.ul variants={childVariants} className="space-y-2">
          {experience.description.map((item, i) => (
            <motion.li 
              key={i} 
              variants={childVariants}
              className="flex items-start"
            >
              <Briefcase size={16} className="mr-2 mt-1 text-primary/70" />
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}