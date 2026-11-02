/** Tokens mirror the Figma variable collections (Colors, Spacing, Radius) and text styles
 *  extracted with the Figma MCP get_variable_defs tool (see docs/figma/variable-defs.json). */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'surface-muted': 'var(--color-surface-muted)',
        ink: 'var(--color-text-primary)',
        'ink-soft': 'var(--color-text-secondary)',
        border: 'var(--color-border)',
        accent: 'var(--color-accent)',
        focus: 'var(--color-focus-ring)',
        error: 'var(--color-error)',
        success: 'var(--color-success)'
      },
      borderRadius: { sm: '8px', md: '12px', lg: '20px' },
      boxShadow: { card: '0 8px 24px rgba(20, 31, 28, 0.08)' },
      fontFamily: { sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'] },
      fontSize: {
        'display-xl': ['64px', { lineHeight: '68px', fontWeight: '700' }],
        'display-lg': ['48px', { lineHeight: '54px', fontWeight: '700' }],
        'display-md': ['36px', { lineHeight: '42px', fontWeight: '700' }],
        h2: ['40px', { lineHeight: '46px', fontWeight: '700' }],
        'h2-sm': ['30px', { lineHeight: '36px', fontWeight: '700' }],
        h3: ['22px', { lineHeight: '28px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px' }],
        'body-md': ['16px', { lineHeight: '24px' }],
        'body-sm': ['14px', { lineHeight: '20px' }],
        label: ['14px', { lineHeight: '20px', fontWeight: '500' }],
        eyebrow: ['13px', { lineHeight: '16px', fontWeight: '600' }],
        button: ['16px', { lineHeight: '20px', fontWeight: '600' }]
      }
    }
  },
  plugins: []
}
