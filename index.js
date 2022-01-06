class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '## Hello',
    };
    this.handleChange=this.handleChange.bind(this);
    this.updatePreview=this.updatePreview.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  updatePreview() {
    document.getElementById('preview').innerHTML = marked.parse(this.state.input)
  }
  
  render() {
    return (
      <div>
        <h1>Markdown Preveiwer</h1>
        <div>
          <h2>Markdown</h2>
          <textarea
            id='editor'
            value={this.state.input}
            onChange={this.handleChange}
            onKeyDown={this.updatePreview}
          ></textarea>
        </div>
        <div>
          <h2>Preview</h2>
          <div id='preview'></div>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App/>, document.getElementById('root'));