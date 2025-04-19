"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.7,
      }
    },
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/70 pointer-events-none" />
      
      <div className="container mx-auto px-4 z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={item} className="mb-4">
            <span className="text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-medium">
              Hello, I am
            </span>
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
          >
            Divakar Jaiswal
          </motion.h1>
          
          <motion.div variants={item}>
            <h2 className="text-2xl md:text-4xl font-medium mb-8 text-muted-foreground">
              Software Developer
            </h2>
          </motion.div>
          
          <motion.p 
            variants={item}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Passionate software developer specializing in full-stack development with expertise in React, Node.js, and cloud technologies.
            Currently pursuing B.Tech in Computer Science at Bennett University.
          </motion.p>
          
          <motion.div variants={item} className="flex gap-4 justify-center">
            <Button size="lg" className="rounded-full" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <ArrowDown className="text-muted-foreground" />
      </motion.div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-chart-1/10 blur-3xl -top-[100px] -right-[100px]" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-chart-2/10 blur-3xl top-[40%] -left-[100px]" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-chart-3/10 blur-3xl -bottom-[200px] right-[10%]" />
      </div>
    </section>
  );
}