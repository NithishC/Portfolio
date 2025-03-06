import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { ParticleBackground } from "./particle-background";
import { heroData } from "../data/portfolio-data";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30%] right-[15%] w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        <motion.div 
          className="absolute top-[15%] right-[20%] w-20 h-20 bg-primary/10 rounded-full"
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-[25%] left-[25%] w-16 h-16 bg-secondary/10 rounded-full"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
            rotate: [0, -10, 0, 10, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 z-20">
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-primary mb-2 relative inline-block">
              {heroData.greeting}
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              ></motion.span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x">
                {heroData.name}
              </span>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] blur-2xl opacity-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-medium mb-6 relative inline-block">
              <span className="text-foreground">{heroData.title}</span>
              <motion.div 
                className="absolute -z-10 -inset-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg blur-sm"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
            </h3>
          </motion.div>
          
          <motion.p
            className="text-foreground-500 max-w-lg mb-8 text-lg relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {heroData.description}
            <motion.span 
              className="absolute -z-10 inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg blur-md"
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            ></motion.span>
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button 
              color="primary" 
              size="lg" 
              variant="shadow"
              className="relative overflow-hidden group animate-glow cursor-pointer"
              onPress={() => window.location.href = heroData.buttons.primary.link}
            >
              <span className="relative z-10">{heroData.buttons.primary.text}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
            
            <Button 
              variant="bordered" 
              size="lg"
              className="group relative overflow-hidden"
              onPress={() => window.location.href = heroData.buttons.secondary.link}
            >
              <span className="relative z-10 group-hover:text-primary transition-colors">{heroData.buttons.secondary.text}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Button>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <div className="relative">
          <Icon icon="lucide:chevrons-down" className="text-3xl text-primary animate-bounce-slow" />
          <div className="absolute -inset-2 bg-primary/20 rounded-full blur-md -z-10 animate-pulse"></div>
        </div>
      </motion.div>
      
      <div className="absolute top-20 right-10 hidden lg:block z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-primary/30 text-9xl font-bold"
        >
          <Icon icon="lucide:code" className="animate-spin-slow" />
        </motion.div>
      </div>
      
      <div className="absolute bottom-20 left-10 hidden lg:block z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-secondary/30 text-9xl font-bold"
        >
          <Icon icon="lucide:brain" className="animate-pulse-slow" />
        </motion.div>
      </div>
    </section>
  );
}