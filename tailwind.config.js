/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#D1D5DB',
            h1: {
              color: '#F9FAFB',
              fontSize: '2.25rem',
              marginTop: '2rem',
              marginBottom: '1rem',
              fontWeight: '700',
              fontFamily: "'Josefin Sans', sans-serif",
            },
            h2: {
              color: '#F9FAFB',
              fontSize: '1.875rem',
              marginTop: '2rem',
              marginBottom: '1rem',
              fontWeight: '700',
              fontFamily: "'Josefin Sans', sans-serif",
            },
            h3: {
              color: '#F9FAFB',
              fontSize: '1.5rem',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
              fontWeight: '600',
              fontFamily: "'Josefin Sans', sans-serif",
            },
            h4: {
              color: '#F9FAFB',
              fontSize: '1.25rem',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
              fontWeight: '600',
              fontFamily: "'Josefin Sans', sans-serif",
            },
            p: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              lineHeight: '1.8',
            },
            strong: {
              color: '#F9FAFB',
              fontWeight: '600',
            },
            a: {
              color: '#00DFB7',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            ul: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              listStyleType: 'disc',
              paddingLeft: '1.625rem',
            },
            ol: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              listStyleType: 'decimal',
              paddingLeft: '1.625rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
              paddingLeft: '0.375rem',
            },
            blockquote: {
              marginTop: '2rem',
              marginBottom: '2rem',
              paddingLeft: '1.5rem',
              borderLeftWidth: '4px',
              borderLeftColor: '#00DFB7',
              fontStyle: 'italic',
              color: '#9CA3AF',
            },
            code: {
              color: '#00DFB7',
              backgroundColor: '#242424',
              padding: '0.2rem 0.4rem',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
            },
            'pre': {
              backgroundColor: '#242424',
              padding: '1.25rem',
              borderRadius: '0.5rem',
              overflowX: 'auto',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              code: {
                backgroundColor: 'transparent',
                padding: '0',
                color: '#D1D5DB',
                fontSize: '0.875em',
              },
            },
            img: {
              marginTop: '2rem',
              marginBottom: '2rem',
              borderRadius: '0.5rem',
            },
            hr: {
              marginTop: '3rem',
              marginBottom: '3rem',
              borderColor: '#333333',
            },
            table: {
              width: '100%',
              marginTop: '2rem',
              marginBottom: '2rem',
              borderCollapse: 'collapse',
            },
            th: {
              backgroundColor: '#242424',
              padding: '0.75rem 1rem',
              textAlign: 'left',
              fontWeight: '600',
              color: '#F9FAFB',
            },
            td: {
              padding: '0.75rem 1rem',
              borderBottom: '1px solid #333333',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
