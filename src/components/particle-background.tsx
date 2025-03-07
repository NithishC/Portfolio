import React from "react";
import Particles from "react-tsparticles";
import { ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useTheme } from "@heroui/use-theme";

export function ParticleBackground() {
  const { theme } = useTheme();
  const particlesInit = React.useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const lightModeOptions: ISourceOptions = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 150,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B"],
      },
      links: {
        color: "#a1a1aa",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
        triangles: {
          enable: true,
          opacity: 0.1,
        },
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      shape: {
        type: ["circle", "triangle", "polygon", "star"],
        polygon: {
          sides: 6,
        },
      },
      size: {
        value: { min: 1, max: 5 },
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false,
        },
      },
    },
    detectRetina: true,
  };

  const darkModeOptions: ISourceOptions = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 150,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B"],
      },
      links: {
        color: "#6b7280",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
        triangles: {
          enable: true,
          opacity: 0.1,
        },
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      shape: {
        type: ["circle", "triangle", "polygon", "star"],
        polygon: {
          sides: 6,
        },
      },
      size: {
        value: { min: 1, max: 5 },
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={theme === "light" ? lightModeOptions : darkModeOptions}
      className="absolute inset-0 z-0"
    />
  );
}