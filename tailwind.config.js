module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#78b7cc"
        },
        accent: {
          light: "#C8B3AF",
          dark: "#CC4D76"
        },
        shade: {
          light: "#FEFEFD",
          dark: "#272855"
        }
      },
      fontFamily: {
        heading: ["Titillium"],
        subHeading: ["FiraSans"],
        text: ["Quattrocento"]
      },
      fill: theme => {
        return theme("colors");
      },
      stroke: theme => {
        return theme("colors");
      }
    }
  },
  variants: {},
  plugins: [
    ({ addBase, config }) => {
      addBase({
        h1: {
          fontSize: config("theme.fontSize.2xl"),
          fontFamily: config("theme.fontFamily.heading")
        },
        h2: {
          fontSize: config("theme.fontSize.xl"),
          fontFamily: config("theme.fontFamily.subHeading")
        },
        h3: {
          fontSize: config("theme.fontSize.lg"),
          fontFamily: config("theme.fontFamily.subHeading")
        },
        strong: {
          fontFamily: config("theme.fontFamily.subHeading")
        },
        p: {
          fontFamily: config("theme.fontFamily.text")
        }
      });
    }
  ]
};
