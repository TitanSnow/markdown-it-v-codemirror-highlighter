import CodeMirror from 'codemirror'
import 'codemirror/addon/runmode/runmode'
import 'codemirror/mode/meta'

export default md => {
    md.set({
        highlight: (code, lang, slf) => {
            const mode = CodeMirror.findModeByName(lang)
            let lastStyle
            const tokensBuf = []
            function pushEl() {
                slf.sDom.openTag('span', lastStyle ? {
                    'class': `cm-${lastStyle}`
                } : null)
                slf.sDom.appendText(tokensBuf.join(''))
                slf.sDom.closeTag()
            }
            CodeMirror.runMode(code, mode ? mode.mime : lang, (token, style) => {
                if (style !== lastStyle) {
                    pushEl()
                    lastStyle = style
                    tokensBuf.splice(0)
                }
                tokensBuf.push(token)
            })
            return slf.sDom
        }
    })
}
