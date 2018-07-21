import 'codemirror/addon/runmode/runmode.node'
import CodeMirror from 'codemirror'
import 'codemirror/mode/meta'
import highlighterFactory from './highlighter'

export default highlighterFactory(CodeMirror)
