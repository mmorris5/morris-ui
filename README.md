# morris-ui - React Component Library

A modern, minimal React component library built with TypeScript, Tailwind CSS, and Vite.

📚 **[View Documentation](https://mmorris5.github.io/morris-ui)**

## Features

- ⚡ Built with Vite for lightning-fast development
- 🎨 Styled with Tailwind CSS
- 📦 TypeScript support out of the box
- 🎯 Minimal, composable components
- 📋 Tree-shakeable exports

## Components

- **Alert** - Informational alerts with success, warning, danger, and info variants
- **Avatar** - User avatar with initials or image support
- **Badge** - Inline status badges with color variants
- **Button** - Versatile button with multiple variants and sizes
- **Card** - Content container with default and glass styles
- **Checkbox** - Accessible checkbox with label and error state
- **Combobox** - Searchable select with keyboard support
- **Dropdown** - Accessible dropdown/select component
- **HamburgerMenu** - Responsive navigation menu
- **Modal** - Dialog overlay with header, body, and action slots
- **Radio** - Accessible radio input with label and error state
- **TextInput** - Text input with label, error states, and helper text

## Installation

```bash
npm install morris-ui
```

## Usage

```jsx
import { Button, TextInput, Dropdown } from 'morris-ui'
import 'morris-ui/styles'

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

The morris-ui library uses Tailwind CSS classes under the hood. You can customize colors and styling by modifying `tailwind.config.ts`.

## Fonts

This library uses **Inter** from [Google Fonts](https://fonts.google.com/), which is free and open-source under the [OFL license](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL).

## License

MIT License - see [LICENSE](./LICENSE) file for details.

## Documentation

Full interactive documentation is available at **[mmorris5.github.io/morris-ui](https://mmorris5.github.io/morris-ui)**, powered by Storybook. Each component has live examples and an auto-generated prop table.

For detailed information, see [NPM Package Publishing Guide](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages).
