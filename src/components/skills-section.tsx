import React from "react";
import { motion } from "framer-motion";
import { SkillCard } from "./skill-card";
import { skills, skillCategories } from "../data/skills";
import { Icon } from "@iconify/react";
import { Tabs, Tab } from "@heroui/react";
import { skillsData } from "../data/portfolio-data";

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  
  const filteredSkills = selectedCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    
    const x = clientX - left;
    const y = clientY - top;
    
    setMousePosition({ x, y });
  };

  return (
    <section 
      id="skills" 
      className="py-20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div 
        className="absolute inset-0 bg-gradient-radial opacity-20 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(
            600px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(59, 130, 246, 0.15),
            transparent 40%
          )`
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-[10%] w-40 h-40 rounded-full bg-gradient-to-r from-primary/5 to-secondary/5 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-[15%] w-60 h-60 rounded-full bg-gradient-to-r from-secondary/5 to-primary/5 blur-xl"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            {skillsData.title}
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-secondary"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 opacity-0"></div>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            {skillsData.description}
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center">
          <Tabs 
            aria-label="Skill categories" 
            color="primary"
            variant="underlined"
            classNames={{
              tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
              cursor: "w-full bg-gradient-to-r from-primary to-secondary",
              tab: "max-w-fit px-0 h-12",
              tabContent: "group-data-[selected=true]:text-primary"
            }}
            onSelectionChange={(key) => setSelectedCategory(key.toString())}
          >
            <Tab key="all" title="All Skills" />
            {skillCategories.map((category) => (
              <Tab key={category} title={category} />
            ))}
          </Tabs>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard key={`${skill.name}-${index}`} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>

      <div className="absolute top-10 right-0 hidden lg:block">
        <div className="text-primary/5 text-[200px] font-bold select-none">
          <Icon icon="lucide:code-2" />
        </div>
      </div>
    </section>
  );
}