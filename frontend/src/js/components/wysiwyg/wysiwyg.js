import React, {Component} from 'react';
import Editor from './Editor';
import Showdown from 'showdown';
import youtube from 'showdown-youtube';

class wysiwyg extends Component {

  constructor(props) {
    super(props);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.convertToJson = this.convertToJson.bind(this);
    this.renderText = this.renderText.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.state = {
      textValue: '',
      categories: '',
      postImageUrl: '',
      bannerImageUrl: '',
      title: ''
    };
  }

  componentDidMount() {
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
  }


  handleEditorChange(value) {
    this.setState({
      textValue: value
    });
  }

  convertToJson(e) {
    e.preventDefault();
    let downloadElement = document.createElement('a');
    let categories = this.separateAndTrim();
    let textToDownload = `{"id":,"imageUrl":# asdasd"${this.state.postImageUrl}","bannerUrl":"${this.state.bannerImageUrl}","categories":[${categories}],"title":"${this.state.title}","user":{"name":"Nepanime","profilePictureUrl":"img/profilethumb.jpg","type":"admin"},"description":\`${this.state.textValue}\`,"date":"${this.refs.date.value}"}`;
    downloadElement.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textToDownload));
    downloadElement.setAttribute('download', 'test.json');
    downloadElement.click();
  }

  separateAndTrim() {
    let splitArray = this.state.categories.split(',');
    let splitAndTrim = splitArray.map((splitText)=> {
      return `"${splitText.trim()}"`;
    });
    return splitAndTrim;
  }

  renderText(text) {
    this.markupConverter = new Showdown.Converter({extensions: ['youtube'],smoothLivePreview:true});
    return this.markupConverter.makeHtml(text);
  }

  onTextChange(e) {
    e.preventDefault();
    this.state[e.target.name] = e.target.value;
    this.setState({[e.target.name]: this.state[e.target.name]});
  }


  render() {
    return (
      <div className="wysiwyg">
        <div className='row'>
          <h1>Post Editor</h1>
          <form className='col s12'>
            <div className="input-field col s12">
              <input placeholder="Title of the post" id="title" type="text" name="title" value={this.state.title}
                     onChange={this.onTextChange} className="validate"/>
              <label htmlFor='title'>Title</label>
            </div>
            <div className="input-field col s6">
              <input placeholder="Post Image URL" id="postImageUrl" type="text" name="postImageUrl" className="validate"
                     value={this.state.postImageUrl} onChange={this.onTextChange}/>
              <label htmlFor='postImageUrl'>Post Image Thumbnail</label>
            </div>
            <div className="input-field col s6">
              <input placeholder="Banner Image URL" id="bannerImageUrl" type="text" name="bannerImageUrl"
                     value={this.state.bannerImageUrl} onChange={this.onTextChange} className="validate"/>
              <label htmlFor='bannerImageUrl'>Banner Image Thumbnail</label>
            </div>
            <div className="input-field col s12">
              <input placeholder="Separate By Commas" id="categories" type="text" name="categories"
                     value={this.state.categories} onChange={this.onTextChange} className="validate"/>
              <label htmlFor='categories'>Write categories</label>
            </div>
            <div className="input-field col s12">
              <input type="date" className="datepicker" ref="date"/>
              <label htmlFor='datepicker'>Pick a date</label>
            </div>
          </form>
        </div>
        <div className="row">
          <div className='container container-narrow'>
            <Editor
              value={this.state.textValue}
              handleEditorChange={this.handleEditorChange}/>
            <input type="button" value="Convert To Json File" onClick={this.convertToJson} className="btn btn-default"/>
            <div className="flow-text post-text" dangerouslySetInnerHTML={{__html:this.renderText(this.state.textValue)}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default wysiwyg;