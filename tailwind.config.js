module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
      extend: {},
  },
  variants: {
    // tailwindでpacityを使用する場合は、以下のような設定が必要
      extend: { opacity: ['disabled']},
  },
  plugins: [],
}

