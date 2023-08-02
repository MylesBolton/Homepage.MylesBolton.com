export const ParticlesConfig = {
    particles: {
        number: {
            value: 30,
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
                min: 1,
                max: 2,
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
            speed: 3,
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