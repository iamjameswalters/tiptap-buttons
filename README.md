# TipTap Buttons Extension

A TipTap editor extension for adding customizable email-compatible buttons with support for Outlook/MSO clients.

## Features

- **Customizable styling**: Set button color, text color, border color, and label
- **Email compatibility**: Includes MSO/Outlook conditional comments for proper email rendering
- **Centered positioning**: Buttons are automatically centered within their content
- **Easy integration**: Simple TipTap extension that works with existing editor setups

## Installation

```bash
npm install
```

## Usage

```javascript
import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import { ButtonExtension } from './src/button-extension.js'

const editor = new Editor({
  element: document.querySelector('#editor'),
  extensions: [
    StarterKit,
    ButtonExtension,
  ],
})

// Add a button
editor.chain().focus().setButton({
  href: 'https://example.com',
  label: 'Click Me',
  color: '#556270',
  textColor: '#ffffff',
  borderColor: '#1e3650',
}).run()
```

## Demo

Run the demo to see the extension in action:

```bash
npm run dev
```

## Button Attributes

- `href`: Link destination (default: '#')
- `label`: Button text (default: 'Button')
- `color`: Background color (default: '#556270')
- `textColor`: Text color (default: '#ffffff')
- `borderColor`: Border color (default: '#1e3650')

## Email Compatibility

The extension generates buttons with MSO conditional comments for Outlook compatibility, ensuring buttons render correctly across email clients.

## Credits

Button HTML structure and styling based on [buttons.cm](https://buttons.cm) - a tool for generating email-compatible buttons.

## License

MIT