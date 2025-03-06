import { Tooltip } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Skill } from "../types/skill";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex flex-col items-center justify-center"
    >
      <Tooltip content={skill.name} placement="top">
        <motion.div
          whileHover={{ 
            scale: 1.2,
            y: -5,
          }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center cursor-pointer relative"
        >
          <motion.div
            className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 blur-md -z-10"
            whileHover={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            style={{ color: skill.color }}
            className="text-4xl mb-2 relative"
          >
            <Icon icon={skill.icon} width={40} height={40} />
            <motion.div 
              className="absolute -inset-2 rounded-full opacity-0"
              whileHover={{ 
                opacity: 0.5,
                scale: 1.2,
                background: `radial-gradient(circle, ${skill.color}33, transparent 70%)` 
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.p 
            className="text-xs text-center font-medium relative"
            whileHover={{ scale: 1.1 }}
          >
            {skill.name}
            <motion.span 
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.p>
          {skill.category && (
            <motion.span 
              className="text-[10px] opacity-70 mt-1 text-foreground-500"
              whileHover={{ opacity: 1 }}
            >
              {skill.category}
            </motion.span>
          )}
        </motion.div>
      </Tooltip>
    </motion.div>
  );
}