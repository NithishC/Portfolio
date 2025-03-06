import { Card, CardBody, CardFooter, Chip, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 z-0"></div>
        
        <div className="relative overflow-hidden z-10">
          {project.featured && (
            <div className="absolute top-0 right-0 z-10 m-2">
              <Chip 
                color="primary" 
                variant="shadow" 
                size="sm"
                className="bg-gradient-to-r from-primary to-secondary border-none"
              >
                Featured
              </Chip>
            </div>
          )}
          <div className="overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 w-full">
              <Button 
                as="a" 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                color="primary"
                variant="shadow"
                fullWidth
                className="relative overflow-hidden group bg-gradient-to-r from-primary to-secondary border-none"
                startContent={<Icon icon="lucide:external-link" />}
              >
                <span className="relative z-10">View Project</span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </div>
          </div>
        </div>
        <CardBody className="pb-0 relative z-10">
          <motion.h3 
            className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {project.title}
          </motion.h3>
          <p className="text-foreground-500 text-sm mb-4">{project.description}</p>
        </CardBody>
        <CardFooter className="flex flex-wrap gap-2 relative z-10">
          {project.tags.map((tag, i) => (
            <Chip 
              key={i} 
              variant="flat" 
              size="sm" 
              className="bg-default-100 group-hover:bg-default-200 transition-colors duration-300"
            >
              {tag}
            </Chip>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
}