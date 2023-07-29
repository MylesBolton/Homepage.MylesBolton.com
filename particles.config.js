export const ParticlesConfig = {
  particles: {
    number: {
        value: 60,
        density: {
            enable: true,
        },
    },
    color: {
        value: "#ff0000",
    },
    shape: {
      close: true,
      fill: true,
      options: {},
      type: "circle"
    },
    size: {
        value: {
            min: 2,
            max: 3,
        },
    },
    links: {
        enable: true,
        distance: 300,
        color: "#ff0000",
        width: 2,
    },
    move: {
        enable: true,
        speed: 5,
    },
},
interactivity: {
    events: {
        onHover: {
            enable: true,
            parallax: {
                enable: true,
                force: 30,
                smooth: 10,
            },
        },
    },
},
background: {
    color: "#000",
},
fullScreen: {
  enable: true,
  zIndex: -1
},
};