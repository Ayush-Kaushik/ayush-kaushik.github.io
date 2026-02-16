module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0054AD",
        "brand-700": "#003f82",
        "brand-600": "#0054AD",
        "brand-500": "#02667f",
        "brand-400": "#1a75cf",
        "brand-300": "#4d94e6",
        "gray-900": "#1a1a1a",
        "gray-800": "#2d2d2d",
        "gray-700": "#4b4a4a",
        "gray-600": "#666565",
        "gray-500": "#979595",
        "gray-400": "#bdbdbd",
        "gray-300": "#dcdcdc",
        "gray-200": "#ece9e9",
        "gray-100": "#f6f6f8",
        "bg-secondary": "#f6f6f8",
        "text-title": "#4b4a4a",
        "text-subtitle": "#666565",
        "text-muted": "#979595",
        "footer-color": "#0054AD",
        "footer-link": "#ece9e9",
        "footer-hover": "#6c757d",
        "cta-color": "#ffc96c",
      },
      fontSize: {
        "display": "3.75rem",
        "h1": "3rem",
        "h2": "2.25rem",
        "h3": "1.75rem",
        "h4": "1.5rem",
        "body": "1rem",
        "small": "0.875rem",
        "xs": "0.75rem",
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      lineHeight: {
        tight: 1.2,
        normal: 1.5,
        relaxed: 1.7,
      },
      spacing: {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        card: "15px",
        button: "0.5rem",
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        bounce: "bounce 1.4s infinite ease-in-out",
        fadeIn: "fadeIn 0.3s ease-in-out",
      },
      keyframes: {
        bounce: {
          "0%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-8px)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
}
