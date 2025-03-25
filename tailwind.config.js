module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // pastikan mencakup folder pages
    './components/**/*.{js,ts,jsx,tsx}', // jika ada folder komponen
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4C51BF', // warna utama, bisa diubah
        secondary: '#F7FAFC', // warna kedua
      },
    },
  },
  darkMode: 'class', // Mengaktifkan dark mode
  plugins: [],
};

