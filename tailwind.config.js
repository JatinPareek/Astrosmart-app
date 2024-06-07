/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color: "#fff",
        whitesmoke: {
          "100": "#f2f2f2",
          "200": "#eaeaea",
        },
        color1: "#080a13",
        darkslategray: "#3b3d47",
        dimgray: "#4d4d4d",
        color2: "#77e472",
        forestgreen: "#45b040",
        color3: "#777",
        gray: "#1a1a1a",
        color4: "#f87f06",
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        "bricolage-grotesque": "'Bricolage Grotesque'",
        "dm-sans": "'DM Sans'",
        montserrat: "Montserrat",
      },
      borderRadius: {
        "31xl": "50px",
        "81xl": "100px",
        xl: "20px",
        "11xl": "30px",
        "181xl": "200px",
        "21xl": "40px",
      },
    },
    fontSize: {
      lg: "18px",
      sm: "14px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "35xl": "54px",
      "24xl": "43px",
      "65xl": "84px",
      "23xl": "42px",
      "6xl": "25px",
      "5xl": "24px",
      "45xl": "64px",
      "32xl": "51px",
      "19xl": "38px",
      "29xl": "48px",
      "10xl": "29px",
      "25xl": "44px",
      "16xl": "35px",
      "81xl": "100px",
      "31xl": "50px",
      "11xl": "30px",
      "75xl": "94px",
      "28xl": "47px",
      "9xl": "28px",
      inherit: "inherit",
    },
    screens: {
      mq1575: {
        raw: "screen and (max-width: 1575px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
