# markdown⁠-⁠it⁠-⁠v⁠-⁠codemirror⁠-⁠highlighter
A code highlighter for [markdown⁠-⁠it⁠-⁠v](https://github.com/TitanSnow/markdown-it-v) using CodeMirror

## Installation
```console
$ npm i markdown-it-v-codemirror-highlighter --save
```
Or yarn:
```console
$ yarn add markdown-it-v-codemirror-highlighter
```

## Usage
For Node.js:
```javascript
const MarkdownIt    = require('markdown-it')
const MarkdownItV   = require('markdown-it-v')
const MarkdownItVHL = require('markdown-it-v-codemirror-highlighter')

const md = MarkdownIt()
  .use(MarkdownItV)
  .use(MarkdownItVHL)

let sdom = md.render('```C++' +
`
#include <iostream>
int main() {
  std::cout << "Hello World!";
  return 0;
}
` +
'```')
```
For browser (using es6 module with web bundler):
```javascript
import MarkdownIt    from 'markdown-it'
import MarkdownItV   from 'markdown-it-v'
import MarkdownItVHL from 'markdown-it-v-codemirror-highlighter'
import 'codemirror/theme/mdn-like.css'    // import theme css

const md = MarkdownIt()
  .use(MarkdownItV)
  .use(MarkdownItVHL, {
    theme: 'mdn-like'                     // specify theme
  })

let sdom = md.render(textarea.value)      // get markdown document from <textarea>
```
