"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/section-wrapper";
import SectionHeading from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAnimationOnView } from "@/hooks/use-animation-on-view";
import { Code2, Database, Globe2, Laptop2, Server, PenTool as Tool } from "lucide-react";

const skillsData = {
  frontend: {
    icon: <Laptop2 className="w-6 h-6" />,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    skills: [
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
  },
  backend: {
    icon: <Server className="w-6 h-6" />,
    title: "Backend Development",
    description: "Creating scalable server-side applications",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "Mongoose" },
      { name: "Prisma" },
      { name: "Redis" },
      { name: "BullMQ" },
    ],
  },
  database: {
    icon: <Database className="w-6 h-6" />,
    title: "Database",
    description: "Managing and optimizing data storage",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "Redis" },
    ],
  },
  tools: {
    icon: <Tool className="w-6 h-6" />,
    title: "Tools & DevOps",
    description: "Development and deployment tools",
    skills: [
      { name: "Git/GitHub" },
      { name: "Docker" },
      { name: "AWS" },
      { name: "Cloudflare Workers" },
      { name: "CI/CD" },
    ],
  },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading 
        title="Technical Skills" 
        subtitle="My expertise in various technologies and tools"
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skillsData).map(([key, category]) => (
          <SkillCategory key={key} {...category} />
        ))}
      </div>
      
      <AdditionalSkills />
    </SectionWrapper>
  );
}

interface Skill {
  name: string;
}

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: Skill[];
}

function SkillCategory({ icon, title, description, skills }: SkillCategoryProps) {
  const [ref, controls] = useAnimationOnView(0.1);

  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      <Card className="h-full border border-border hover:border-primary/50 transition-colors duration-300 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              {icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>

          <motion.div 
            variants={container} 
            className="flex flex-wrap gap-2 mt-4"
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={item}>
                <Badge 
                  variant="outline" 
                  className="px-4 py-1 text-sm border-primary/30 hover:bg-primary/10 transition-colors"
                >
                  {skill.name}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function AdditionalSkills() {
  const [ref, controls] = useAnimationOnView(0.1);

  const otherSkills = [
    "Responsive Design", "UI/UX", "RESTful APIs", "GraphQL",
    "Web Security", "Performance Optimization", "Agile/Scrum",
    "System Design", "Web Accessibility", "Testing"
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      className="mt-12 text-center"
    >
      <h3 className="text-xl font-semibold mb-6">Additional Skills</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {otherSkills.map((skill, index) => (
          <motion.div key={index} variants={item}>
            <Badge 
              variant="outline" 
              className="px-4 py-2 border-primary/30 hover:bg-primary/10 transition-colors duration-300"
            >
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
