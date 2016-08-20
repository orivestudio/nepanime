import React, {Component} from 'react'
import SimpleMDEReact from './Core';

class Editor extends Component {

  constructor(props) {
    super(props);
    this.getMarkdownOptions = this.getMarkdownOptions.bind(this);
  }

  getMarkdownOptions() {
    return {
      autofocus: true,
      spellChecker: true,
      initialValue: this.props.value,
      autoDownloadFontAwesome: false,
      lineWrapping: false
    }
  }

  render() {
    return (
      <SimpleMDEReact
        onChange={this.props.handleEditorChange}
        options={this.getMarkdownOptions()}
        value={this.props.value}
      />
    );
  }
}

export default Editor;
