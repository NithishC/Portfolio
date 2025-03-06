import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { heroData, navigationData, footerData, contactData } from "../data/portfolio-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-default-50/30 dark:to-default-100/5 -z-10"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
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
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <p className="font-bold text-2xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient-x">
                {footerData.brand}
              </span>
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            {navigationData.links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                color="foreground"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4 mb-8"
          >
            {contactData.socialLinks.map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 p-2 rounded-full inline-flex relative overflow-hidden group"
                  aria-label={`Visit my ${social.icon.split(':')[1]} profile`}
                >
                  <Icon icon={social.icon} className="text-lg relative z-10 group-hover:text-primary transition-colors" />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-foreground-500 text-sm"
          >
            <p>&copy; {currentYear} {heroData.name}. {footerData.copyright}</p>
            <p className="mt-2 flex items-center justify-center gap-1">
              {footerData.tagline}
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }} 
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-danger inline-flex"
              >
                <Icon icon="lucide:heart" />
              </motion.span> 
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}