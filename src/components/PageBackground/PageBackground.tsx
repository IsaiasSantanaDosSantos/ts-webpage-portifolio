
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import { useTheme } from "../../context/themeContext";
// import { globalColor } from "../../style/theme";

 const HeroBackground = () => {
  const { themeObject } = useTheme();

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine); // versão leve do tsparticles
  }, []);


  return (
    <Particles
      id="tsparticles-hero"
      init={particlesInit}
   
    options={{
  background: { color: "transparent" },
  // fullScreen: { enable: false },
  fullScreen: { enable: true },
  fpsLimit: 60,
  interactivity: {
    events: { onHover: { enable: true, mode: "grab" } },
    modes: { grab: { distance: 180, links: { opacity: 0.8 } } }
  },
  particles: {
    number: { value: 100, density: { enable: true, area: 900 } },
    opacity: { value: 0.7 },
    size: { value: 2 },
    color: { value: themeObject.text },
    links: { 
      enable: true,
      color: { value: themeObject.text },
      distance: 180,
      opacity: 0.6,
      width: 1
    },
    move: { enable: true, speed: 1 }
  }
}}

      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0
}}
    />
  );
};


export default HeroBackground;