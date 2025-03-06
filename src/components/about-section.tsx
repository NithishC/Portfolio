import { Card, CardBody, Avatar, Button, Badge } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { experiences } from "../data/experiences";
import { heroData, aboutData } from "../data/portfolio-data";

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            {aboutData.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none bg-default-50 dark:bg-default-100/5">
              <CardBody className="gap-4">
                <div className="flex justify-center mb-6">
                  <Avatar
                    src={aboutData.avatar}
                    className="w-32 h-32 text-large"
                    isBordered
                    color="primary"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{heroData.name}</h3>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <Badge color="primary" variant="flat">Fullstack Developer</Badge>
                  <Badge color="secondary" variant="flat">AI Engineer</Badge>
                  <Badge color="success" variant="flat">Data Scientist</Badge>
                </div>
                {aboutData.bio.map((paragraph, index) => (
                  <p key={index} className="text-foreground-500 mb-4">
                    {paragraph}
                  </p>
                ))}
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Certifications</h4>
                  <div className="flex flex-col gap-2">
                    {aboutData.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Icon icon="lucide:award" className="text-primary" />
                        <span>{cert.name}</span>
                        <span className="text-xs text-foreground-500">• {cert.issuer}</span>
                        <a href={cert.link} className="text-xs text-primary hover:underline ml-auto">
                          View
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button
                    color="primary"
                    variant="shadow"
                    endContent={<Icon icon="lucide:download" />}
                    className="relative overflow-hidden group"
                    onPress={() =>
                      window.location.href = aboutData.buttons.cv.link
                    }
                  >
                    <span className="relative z-10">{aboutData.buttons.cv.text}</span>
                    <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Button>
                  <Button
                    as="a"
                    onPress={() => window.location.href = aboutData.buttons.contact.link}
                    variant="bordered"
                    className="group"
                  >
                    <span className="group-hover:text-primary transition-colors">{aboutData.buttons.contact.text}</span>
                  </Button>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-2xl font-semibold mb-4">Experience</h3>
            
            {experiences.map((exp, _) => (
              <motion.div key={exp.id} variants={itemVariants}>
                <Card className="border-none bg-default-50 dark:bg-default-100/5">
                  <CardBody>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Icon icon="lucide:briefcase" className="text-xl text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">{exp.role}</h4>
                        <div className="flex items-center gap-2 text-sm text-foreground-500 mb-2">
                          <span>{exp.company}</span>
                          <span className="text-xs">•</span>
                          <span>{exp.duration}</span>
                        </div>
                        <p className="text-foreground-500 text-sm">{exp.description}</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute top-1/4 right-0 hidden lg:block">
        <div className="text-primary/5 text-[200px] font-bold select-none">
          <Icon icon="lucide:user" />
        </div>
      </div>
    </section>
  );
}