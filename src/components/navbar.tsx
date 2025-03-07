import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { ThemeSwitcher } from "./theme-switcher";
import { motion } from "framer-motion";
import { navigationData } from "../data/portfolio-data";

export function NavigationBar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
    <Navbar
      maxWidth="xl"
            className={`transition-all duration-500 ${
        isScrolled 
          ? "bg-background/70 backdrop-blur-xl shadow-md" 
          : "bg-transparent"
      }`}
    >
      <NavbarBrand>
        <motion.p 
          className="font-bold text-inherit text-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient-x">
            {navigationData.brand}
          </span>
        </motion.p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navigationData.links.map((link, index) => (
          <NavbarItem key={index}>
            <Link 
              color="foreground" 
              href={link.href}
              className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Button 
            as={Link} 
            color="primary" 
            href={navigationData.ctaButton.href} 
            variant="shadow"
            className="relative overflow-hidden group bg-gradient-to-r from-primary to-secondary border-none"
          >
            <span className="relative z-10">{navigationData.ctaButton.text}</span>
            <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    </div>
  );
}