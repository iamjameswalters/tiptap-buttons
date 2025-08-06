import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import { ButtonExtension } from '../src/button-extension.js'

const editor = new Editor({
  element: document.querySelector('#editor'),
  extensions: [
    StarterKit,
    ButtonExtension,
  ],
  content: `
    <p>Welcome to the TipTap Button Extension demo!</p>
    <p>You can add custom buttons with different colors and links.</p>
  `,
})

function addButton() {
  const href = document.getElementById('button-href').value || '#'
  const label = document.getElementById('button-label').value || 'Button'
  const color = document.getElementById('button-color').value || '#556270'
  const textColor = document.getElementById('button-text-color').value || '#ffffff'
  const borderColor = document.getElementById('button-border-color').value || '#1e3650'

  editor.chain().focus().setButton({
    href,
    label,
    color,
    textColor,
    borderColor,
  }).run()
}

window.addButton = addButton