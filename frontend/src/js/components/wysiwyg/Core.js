/**
 * Created by romit on 8/18/16.
 * Romit Amgai <rtrromitamgai@gmail.com>
 * 8/18/16
 */
import React from 'react';

let hawa = {
  previousValue: null
};

class SimpleMDEReact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      keyChange: false
    }
  }

  componentDidMount() {
    let initialOptions = {
      simplemdeement: document.getElementById("simplepostmd-editor")
    };

    const allOptions = $.extend({}, initialOptions, this.props.options);
    this.simplemde = new SimpleMDE(allOptions);
    hawa.previousValue = this.props.options.initialValue;

    const _this = this;

    $('.CodeMirror').on('keyup', '*', function () {
      _this.setState({
        keyChange: true
      });
      _this.simplemde.value()
      _this.props.onChange(_this.simplemde.value())
    });

    $('.editor-toolbar').on('click', '*', function () {
      _this.props.onChange(_this.simplemde.value())
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.keyChange) {
      this.simplemde.value(nextProps.value)
    }

    this.setState({
      keyChange: false
    });
  }

  componentWillUnmount() {
    $('.CodeMirror').off('keyup', '*');
    $('.editor-toolbar').off('click', '*');
  }

  render() {
    return React.createElement('textarea', {id: 'simplepostmd-editor'});
  }
}

SimpleMDEReact.defaultProps = {
  onChange: function () {
  },
  options: {}
};

export default SimpleMDEReact;
