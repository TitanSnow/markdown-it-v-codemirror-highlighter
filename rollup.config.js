import babel from 'rollup-plugin-babel'

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.common.js',
        format: 'cjs'
    },
    plugins: [
        babel()
    ],
    external: [
        'codemirror',
        'codemirror/addon/runmode/runmode',
        'codemirror/mode/meta'
    ],
    watch: [
        'src/**'
    ]
}
