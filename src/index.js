// @flow

import type { OptionsType } from "typography-options-type"

const uxworksTheme: OptionsType = {
  title: "uxworks",
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: "Varela Round",
      styles: ["400"]
    }
  ],
  headerFontFamily: ["Varela Round", "sans-serif"],
  bodyFontFamily: ["Varela Round", "sans-serif"],
  headerColor: "#4355F8",
  bodyColor: "#3F4140",
  headerWeight: "400",
  bodyWeight: "400",
  boldWeight: "800",
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const linkColor = "#1025EA"
    return {
      a: {
        color: linkColor,
        textDecoration: "none"
      },
      "a:hover, a:focus" : {
        color: "#3F4140",
        textDecoration: "underline"
      },
      "h1,h2,h3,h4,h5,h6": {
        marginTop: rhythm(1.5),
        marginBottom: rhythm(0.5)
      },
      "li>ol, li>ul": {
        marginLeft: "20px",
        marginBottom: 0
      }
    }
  }
};

export default uxworksTheme;
