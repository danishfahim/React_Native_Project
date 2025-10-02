/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        albertSans100Thin: ["AlbertSans_100Thin", "sans-serif"],
        albertSans200ExtraLight: ["AlbertSans_200ExtraLight", "sans-serif"],
        albertSans300Light: ["AlbertSans_300Light", "sans-serif"],
        albertSans400Regular: ["AlbertSans_400Regular", "sans-serif"],
        albertSans500Medium: ["AlbertSans_500Medium", "sans-serif"],
        albertSans600SemiBold: ["AlbertSans_600SemiBold", "sans-serif"],
        albertSans700Bold: ["AlbertSans_700Bold", "sans-serif"],
        albertSans800ExtraBold: ["AlbertSans_800ExtraBold", "sans-serif"],
        albertSans900Black: ["AlbertSans_900Black", "sans-serif"],
        albertSans100ThinItalic: ["AlbertSans_100Thin_Italic", "sans-serif"], 
        albertSans200ExtraLightItalic: [
          "AlbertSans_200ExtraLight_Italic",
          "sans-serif",
        ],
        albertSans300LightItalic: ["AlbertSans_300Light_Italic", "sans-serif"],
        albertSans400RegularItalic: [
          "AlbertSans_400Regular_Italic",
          "sans-serif",
        ],
        albertSans500MediumItalic: [
          "AlbertSans_500Medium_Italic",
          "sans-serif",
        ],
        albertSans600SemiBoldItalic: [
          "AlbertSans_600SemiBold_Italic",
          "sans-serif",
        ],
        albertSans700BoldItalic: ["AlbertSans_700Bold_Italic", "sans-serif"],
        albertSans800ExtraBoldItalic: [
          "AlbertSans_800ExtraBold_Italic",
          "sans-serif",
        ],
        albertSans900BlackItalic: ["AlbertSans_900Black_Italic", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#004CFF",
          dark: "#004CFF",
        },
        baseDark: {
          light: "#202020",
          dark: "#F5F5F5",
        },
        lightGray: {
          light: "#F3F3F3",
          dark: "#F3F3F3",
        },
        lightGray: {
          light: "#FFFFFF",
          dark: "#FFFFFF",
        },
        lightGrayCustom: {
          light: "#EEEDEB",
          dark: "#F8F8F8",
        },
        slateGray: {
          light: "#A6A9B6",
          dark: "#D2D2D2",
        },
        DarkGray: {
          light: "#1F1F1F",
          dark: "#1F1F1F",
        },
        lavenderBlue: {
          light: "#E5EBFC",
          dark: "#E5EBFC",
        },
        lightRed: {
          light: "#FFEBEB",
          dark: "#FFEBEB",
        },

        brightBlue: {
          light: "#004CFF",
          dark: "#004CFF",
        },
        softPink: {
          light: "#FF6B6B",
          dark: "#FFA7A7",
        },
        pinkPrimary:{
          light: "#FF5790",
          dark: "#FF5790",
        }
      },
    },
  },
  plugins: [],
};
