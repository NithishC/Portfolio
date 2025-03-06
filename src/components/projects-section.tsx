import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";
import { projects } from "../data/projects";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { projectsData } from "../data/portfolio-data";

export function ProjectsSection() {
  const [showAll, setShowAll] = React.useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            {projectsData.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <Button
              color="primary"
              variant="bordered"
              onPress={() => setShowAll(!showAll)}
              endContent={
                <Icon
                  icon={showAll ? "lucide:chevron-up" : "lucide:chevron-down"}
                  className="text-lg"
                />
              }
              className="group"
            >
              <span className="group-hover:text-primary transition-colors">
                {showAll ? "Show Less" : "View More Projects"}
              </span>
            </Button>
          </motion.div>
        )}
      </div>

      <div className="absolute bottom-10 left-0 hidden lg:block">
        <div className="text-primary/5 text-[200px] font-bold select-none">
          <Icon icon="lucide:code" />
        </div>
      </div>
    </section>
  );
}