/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tech-blue': '#2563EB',
        'cyan-energy': '#06B6D4',
        'soft-white': '#F9FAFB',
        'slate-charcoal': '#0F172A',
        'cool-gray': '#475569',
        'violet-pulse': '#7C3AED',
        'emerald-green': '#10B981'
        ,
        /* Black & White theme tokens */
        'bw-black': '#0F172A',
        'bw-white': '#FFFFFF',
        'bw-gray': '#E5E7EB',
        'bw-muted': '#9CA3AF',
        /* Accent for student/CTA use */
        'accent-emerald': '#10B981'
      }
    },
  },
  plugins: [],
};
