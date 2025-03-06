import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTheme } from "@heroui/use-theme";
import { motion } from "framer-motion";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        isIconOnly
        variant="light"
        radius="full"
        aria-label="Toggle theme"
        onPress={toggleTheme}
        className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-lg relative overflow-hidden group"
      >
        <motion.div
          initial={false}
          animate={{
            rotate: theme === "light" ? 0 : 180,
          }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          {theme === "light" ? (
            <Icon icon="lucide:moon" className="text-xl" />
          ) : (
            <Icon icon="lucide:sun" className="text-xl" />
          )}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Button>
    </motion.div>
  );
}