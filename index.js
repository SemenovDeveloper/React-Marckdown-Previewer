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
      var copyText = document.getElementById("editor");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copyText.value);
      alert("Copied the text: " + copyText.value);
  } 

  render() {
    return (
      <div id="app-container">
        <h1 id="header">Markdown Preveiwer</h1>
        <div id="markdown-preview-container">
          <div id="markdown-container">
            <div id="toolbar-markdown">
              <h3>MARKDOWN</h3>
              <i class="far fa-copy" onclick={this.copyText}></i>
            </div>
            <textarea
              id='editor'
              onKeyUp={this.updatePreview}
              class="form-control"
            ></textarea>
          </div>
          <div id="preview-container">
            <div id="toolbar-preview">
              <h3>PREVIEW</h3>
            </div>
            <div id='preview'></div>
          </div>
        </div>
        <div class="footer"><a id="footer" target="_blank" href="https://github.com/SemenovDeveloper"><i class="fab fa-github-square"></i>by SemenovDeveloper</a></div>
      </div>
    );
  }
};

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;


ReactDOM.render(<App/>, document.getElementById('root'));