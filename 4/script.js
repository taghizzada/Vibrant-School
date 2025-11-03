tailwind.config = {
  theme: {
    extend: {
      colors: {
        "school-dark": "#436436",
        "school-light": "#d6f599",
        "school-neon": "#d2ff28",
        "school-cta": "#ff5666",
        "school-text": "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");

  function toggleMenu() {
    menu.classList.toggle("hidden");
  }

  if (button) {
    button.addEventListener("click", toggleMenu);
  }
});
