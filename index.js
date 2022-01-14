class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    document.getElementById('editor').value = placeholder;
    this.updatePreview();
  }

  updatePreview() {
    let inputText = document.getElementById('editor').value;
    let markedInputText = marked.parse(inputText);
    let previewText = document.getElementById('preview');
    previewText.innerHTML = markedInputText;
  }
  
  copyText() {
    let text = document.getElementById('editor').value;
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);    
  }
  

  render() {
    return (
      <div id="app-container">
        <h1 id="header">Markdown Previewer</h1>
        <div id="markdown-preview-container">
          <div id="markdown-container">
            <div id="toolbar-markdown">
              <h3>MARKDOWN</h3>
              <i className="far fa-copy" onClick={this.copyText}></i>
            </div>
            <textarea
              id='editor'
              onKeyUp={this.updatePreview}
              className="form-control"
            ></textarea>
          </div>
          <div id="preview-container">
            <div id="toolbar-preview">
              <h3>PREVIEW</h3>
            </div>
            <div id='preview'></div>
          </div>
        </div>
        <div className="footer"><a id="footer" target="_blank" href="https://github.com/SemenovDeveloper"><i className="fab fa-github-square"></i>by SemenovDeveloper</a></div>
      </div>
    );
  }
};

const placeholder = `# Here are some features

# Heading 1

## Heading 2

**bold** text

*italic* text

\`Inline code\` with backticks

\`\`\`
# This is a code block
print '3 backticks'
\`\`\`

> This is a blockquote

This is an unordered list:
- apples
- oranges
- bananas

This is an ordered list:
1. One
2. Two
3. Three  
![Image](https://cdn-icons-png.flaticon.com/64/733/733609.png) 
[This Markdown Previewer on GitHub](https://github.com/SemenovDeveloper/React-Marckdown-Previewer)
`;


ReactDOM.render(<App/>, document.getElementById('root'));