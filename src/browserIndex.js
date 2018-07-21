import CodeMirror from 'codemirror'
import 'codemirror/addon/runmode/runmode'
import 'codemirror/mode/meta'
import highlighterFactory from './highlighter'

export default highlighterFactory(CodeMirror)
