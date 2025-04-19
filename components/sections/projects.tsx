"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/section-wrapper";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useAnimationOnView } from "@/hooks/use-animation-on-view";

// Project data
const projects = [
  {
    title: "Paytm Application",
    description: "A Paytm-inspired payment platform featuring onramping and offramping via simulated bank webhook. Implemented with Docker-based CI/CD pipeline using Turborepo.",
    image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Turborepo", "Docker"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Email AI Agent",
    description: "AI-driven email automation project integrating OpenAI API with GroqCloud for generating context-aware, personalized responses.",
    image: "https://images.pexels.com/photos/4132538/pexels-photo-4132538.jpeg",
    tags: ["TypeScript", "AI", "Gmail OAuth", "Redis", "Docker"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Ideaspace",
    description: "A content publishing platform inspired by Medium, using Cloudflare Workers and Hono for globally distributed, low-latency API.",
    image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg",
    tags: ["React", "TypeScript", "Cloudflare Workers", "PostgreSQL", "Prisma", "Hono"],
    demoLink: "#",
    codeLink: "#"
  }
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [ref, controls, hasAnimated] = useAnimationOnView();
  
  const handleLoadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projects.length));
  };
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <SectionWrapper id="projects">
      <SectionHeading 
        title="My Projects"
        subtitle="A collection of my recent work and personal projects"
        centered
      />
      
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </motion.div>
      
      {visibleProjects < projects.length && (
        <div className="mt-12 text-center">
          <Button onClick={handleLoadMore}>
            Load More Projects
          </Button>
        </div>
      )}
    </SectionWrapper>
  );
}

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoLink: string;
    codeLink: string;
  };
  index: number;
};

function ProjectCard({ project, index }: ProjectCardProps) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      }
    }
  };

  return (
    <motion.div variants={item}>
      <Card className="overflow-hidden h-full flex flex-col border border-border hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm">
        <div className="relative overflow-hidden aspect-video">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <CardHeader className="pb-2">
          <CardTitle>{project.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="bg-secondary/50">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
              <Github size={16} className="mr-2" />
              Code
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} className="mr-2" />
              Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}