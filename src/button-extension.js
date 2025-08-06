import { Node } from '@tiptap/core'

export const ButtonExtension = Node.create({
  name: 'customButton',

  group: 'block',

  content: '',

  marks: '',

  atom: true,

  addAttributes() {
    return {
      href: {
        default: null,
      },
      label: {
        default: 'Button',
      },
      color: {
        default: '#556270',
      },
      textColor: {
        default: '#ffffff',
      },
      borderColor: {
        default: '#1e3650',
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="custom-button"]',
      },
    ]
  },

  renderHTML() {
    return [
      'div',
      {
        'data-type': 'custom-button',
        style: 'text-align: center; margin: 16px 0;'
      },
      0
    ]
  },

  addNodeView() {
    return ({ node }) => {
      const { href, label, color, textColor, borderColor } = node.attrs
      
      const dom = document.createElement('div')
      dom.setAttribute('data-type', 'custom-button')
      dom.style.cssText = 'text-align: center; margin: 16px 0;'
      
      const msoComment = `<!--[if mso]>
  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href || '#'}" style="height:40px;v-text-anchor:middle;width:200px;" arcsize="10%" strokecolor="${borderColor || '#1e3650'}" fillcolor="${color || '#556270'}">
    <w:anchorlock/>
    <center style="color:${textColor || '#ffffff'};font-family:sans-serif;font-size:13px;font-weight:bold;">${label || 'Button'}</center>
  </v:roundrect>
<![endif]-->`
      
      const link = document.createElement('a')
      link.href = href || '#'
      link.target = '_blank'
      link.style.cssText = `background-color:${color || '#556270'};border:1px solid ${borderColor || '#1e3650'};border-radius:4px;color:${textColor || '#ffffff'};display:inline-block;font-family:sans-serif;font-size:13px;font-weight:bold;line-height:40px;text-align:center;text-decoration:none;width:200px;-webkit-text-size-adjust:none;mso-hide:all;`
      link.textContent = label || 'Button'
      
      dom.innerHTML = msoComment + link.outerHTML
      
      return {
        dom,
        contentDOM: null
      }
    }
  },

  addCommands() {
    return {
      setButton: (options) => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options,
        })
      },
    }
  },
})