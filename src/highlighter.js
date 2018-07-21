export default function highlighterFactory(CodeMirror) {
  return (md, { theme = 'default' } = {}) => {
    md.set({
      highlight: (code, lang, { sDom }) => {
        const mode = CodeMirror.findModeByName(lang)
        const und = Symbol('undefined')
        let lastStyle = und
        CodeMirror.runMode(code, mode ? mode.mime : lang, (token, style) => {
          if (lastStyle !== style) {
            if (lastStyle !== und)
              sDom.closeTag()
            sDom.openTag('span', style ? { 'class': `cm-${style}` } : {})
            lastStyle = style
          }
          sDom.appendText(token)
        })
        if (lastStyle !== und)
          sDom.closeTag()
        return sDom
      }
    })
    function addClass(classString, className) {
      if (classString == null || classString === '') {
        return className
      } else {
        return `${classString} ${className}`
      }
    }
    md.core.ruler.push('codemirror-theme', state => {
      state.tokens.filter(({ type }) => type === 'fence').forEach(token => {
        if (token.attrs == null)
          token.attrs = []
        const { attrs } = token
        let classEntry = attrs.find(([key]) => key === 'class')
        if (typeof classEntry === 'undefined')
          attrs.push(classEntry = ['class', ''])
        classEntry[1] = addClass(classEntry[1], `cm-s-${theme}`)
      })
    })
  }
}
