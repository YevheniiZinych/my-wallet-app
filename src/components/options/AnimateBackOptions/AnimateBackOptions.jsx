import eter from "../../../images/ethereum.png";

export const animateOptions = {
  background: {
    color: {
      value: "#f0f8ff",
    },
  },

  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "bubble",
      },
    },
    modes: {
      bubble: {
        opacity: 0.8,
        size: 10,
      },
      repulse: {
        distance: 100,
        duration: 0.2,
      },
    },
  },
  particles: {
    color: {
      value: "#eef207",
    },
    links: {
      color: "#4e4747",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      enable: true,

      speed: 3,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 40,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "image",
      image: {
        src: `${eter}`,
      },
    },
    size: {
      value: 15,
    },
  },
  detectRetina: true,
};
