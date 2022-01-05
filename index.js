class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '## Hello',
      output: 'Hi'
    };
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      input: event.target.value,
    })
  }
  render() {
    return (
      
      <div>
        <h1>Markdown Preveiwer</h1>
        <div>
          <h2>Markdown</h2>
          <textarea
            id='editor'
            onChange={this.handleChange}
          >{this.state.input}</textarea>
        </div>
        <div>
          <h2>Preview</h2>
          <div id='preview'>{this.state.output}</div>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App/>, document.getElementById('root'));