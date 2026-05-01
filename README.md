# M3 - React Component Library

A modern, minimal React component library built with TypeScript, Tailwind CSS, and Vite.

## Features

- ⚡ Built with Vite for lightning-fast development
- 🎨 Styled with Tailwind CSS
- 📦 TypeScript support out of the box
- 🎯 Minimal, composable components
- 📋 Tree-shakeable exports

## Components

- **Button** - Versatile button with multiple variants and sizes
- **TextInput** - Text input with label, error states, and helper text
- **Dropdown** - Accessible dropdown/select component

## Installation

```bash
npm install @mmorris5/m3
```

## Usage

```jsx
import { Button, TextInput, Dropdown } from '@mmorris5/m3'
import '@mmorris5/m3/styles'

export default function App() {
  return (
    <>
      <Button variant="primary">Click me</Button>
      <TextInput label="Name" placeholder="Enter your name" />
      <Dropdown 
        label="Choose option"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' }
        ]}
      />
    </>
  )
}
```

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Customization

The M3 library uses Tailwind CSS classes under the hood. You can customize colors and styling by modifying `tailwind.config.ts`.

## Fonts

This library uses **Inter** from [Google Fonts](https://fonts.google.com/), which is free and open-source under the [OFL license](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL).

## License

MIT License - see [LICENSE](./LICENSE) file for details.

## Publishing to NPM

Before publishing:

1. Update `package.json` with your actual NPM username and repository URL
2. Create an NPM account at [npmjs.com](https://npmjs.com)
3. Run `npm login` and enter your credentials
4. Run `npm publish`

For detailed information, see [NPM Package Publishing Guide](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages).
