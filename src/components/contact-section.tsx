import { motion } from "framer-motion";
import { ContactForm } from "./contact-form";
import { Card, CardBody, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { contactData } from "../data/portfolio-data";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-gradient-to-r from-primary/5 to-secondary/5 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-[15%] w-80 h-80 rounded-full bg-gradient-to-r from-secondary/5 to-primary/5 blur-xl"
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
            {contactData.title}
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
            {contactData.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-semibold">Let's Talk</h3>
            <p className="text-foreground-500 mb-6">
              {contactData.intro}
            </p>

            <div className="flex flex-col gap-4">
              {contactData.contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <Card className="border-none bg-default-50 dark:bg-default-100/5 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardBody>
                      <Link href={item.link} className="flex items-center gap-4 relative z-10">
                        <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                          <Icon icon={item.icon} className="text-xl" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-foreground-500">{item.title}</h4>
                          <p className="text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                        </div>
                      </Link>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">{contactData.socialTitle}</h4>
              <div className="flex gap-4">
                {contactData.socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    whileHover={{ y: -5, rotate: 5 }}
                  >
                    <Link
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-br from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 p-3 rounded-full inline-flex relative overflow-hidden group"
                      aria-label={`Visit my ${social.icon.split(':')[1]} profile`}
                    >
                      <Icon icon={social.icon} className="text-xl relative z-10 group-hover:text-primary transition-colors" />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.5 }}
                      ></motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 right-0 hidden lg:block">
        <div className="text-primary/5 text-[200px] font-bold select-none">
          <Icon icon="lucide:mail" />
        </div>
      </div>
    </section>
  );
}