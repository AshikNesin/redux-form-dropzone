# redux-form-dropzone

> Simple react-dropzone wrapper for redux-form


## Install

```
$ npm install --save redux-form-dropzone
```


## Usage

```js
import FileField from 'redux-form-dropzone'
import {Field} from 'redux-form'

const MyComponent = (props) => {
return (
		<Field name="resume" component={ FileField }  {...props.resume}/>
	)
}

```



## License

MIT © [Ashik Nesin](https://github.com/HugeThoughts/react-file-field)
