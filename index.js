import React from 'react'
import Dropzone from 'react-dropzone'

class FileInput extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(files) {
  	// For Redux form
    if (this.props.input) {
      const {input: {onChange}} = this.props
      onChange(files[0])
    }
    else if(this.props.onChange){
    	this.props.onChange(files[0])
    }
    else{
    	console.warn('redux-form-dropzone => Forgot to pass onChange props ?');
    }
  }

  render() {
    return (
      <Dropzone onDrop={ this.onChange } {...this.props} />
    )
  }
}
export default FileInput