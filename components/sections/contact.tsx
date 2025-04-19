"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/section-wrapper";
import SectionHeading from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon, TwitterIcon } from "lucide-react";
import { useAnimationOnView } from "@/hooks/use-animation-on-view";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        title="Get In Touch"
        subtitle="Let's connect and discuss potential collaborations"
        centered
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <AboutCard />
        
        <div>
          <Card className="overflow-hidden border border-border bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-background/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="bg-background/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    rows={5}
                    className="resize-none bg-background/50"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}

function AboutCard() {
  const [ref, controls, hasAnimated] = useAnimationOnView(0.1);
  
  const emailAddress = "divakarjaiswal7777@gmail.com";
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  
  const contactInfo = [
    {
      icon: <MailIcon size={20} className="text-primary" />,
      title: "Email",
      value: emailAddress,
      link: `mailto:${emailAddress}`,
    },
    {
      icon: <PhoneIcon size={20} className="text-primary" />,
      title: "Phone",
      value: "+91 9871174924",
    },
    {
      icon: <MapPinIcon size={20} className="text-primary" />,
      title: "Location",
      value: "Delhi, India",
    },
  ];
  
  const socialLinks = [
    {
      icon: <GithubIcon size={20} />,
      link: "https://github.com/divakar",
      label: "GitHub",
    },
    {
      icon: <LinkedinIcon size={20} />,
      link: "https://linkedin.com/in/divakar",
      label: "LinkedIn",
    },
  ];

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      className="h-full"
    >
      <Card className="h-full border border-border bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6 flex flex-col h-full">
          <motion.h3 
            variants={item}
            className="text-2xl font-semibold mb-4"
          >
            About Me
          </motion.h3>
          
          <motion.p 
            variants={item}
            className="text-muted-foreground mb-6"
          >
            I'm a passionate software developer pursuing B.Tech in Computer Science at Bennett University. 
            With experience in full-stack development, I specialize in building scalable web applications 
            using modern technologies.
          </motion.p>
          
          <motion.p 
            variants={item}
            className="text-muted-foreground mb-8"
          >
            Currently seeking opportunities to apply my skills in software development and contribute to 
            innovative projects. Let's connect and discuss how we can work together!
          </motion.p>
          
          <motion.div variants={item} className="space-y-4 mb-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.title}</p>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
          
          <motion.div variants={item} className="mt-auto">
            <h4 className="text-sm font-medium mb-3">Connect with me</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}