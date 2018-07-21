const external = [
    'codemirror',
    'codemirror/mode/meta',
    'codemirror/addon/runmode/runmode',
    'codemirror/addon/runmode/runmode.node',
    'markdown-it-for-inline'
]
const watch = [
    'src/**'
]

export default [
    {
        input: 'src/nodeIndex.js',
        output: {
            file: 'dist/nodeIndex.common.js',
            format: 'cjs'
        },
        external, watch
    },
    {
        input: 'src/browserIndex.js',
        output: {
            file: 'dist/browserIndex.common.js',
            format: 'cjs'
        },
        external, watch
    }
]
