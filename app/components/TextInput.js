import React, { Component, PropTypes } from 'react';

export default class TextInput extends Component {

  constructor(props, context) {
    super(props, context); // TODO Or was it not like this?
    this.state = {
      text: props.text || '',
    };
  }

  render() {
    return (
      <div className="text-input-container">
        <input
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.state.text}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

// export default React.createClass({
//
//   // TODO Either this needs to dispatch actions onChange, or pass text to parent?
//
//   getInitialState() {
//     return {
//       text: this.props.text,
//     };
//   },
//
//   getDefaultProps() {
//     return {
//       text: '',
//     };
//   },
//
//   componentWillMount() {
//     console.log('componentWillMount this.props', this.props);
//   },
//
//   componentDidMount() {
//     console.log('componentDidMount this.state', this.state)
//   },
//
//   onChange(event) {
//     this.setState({ text: event.target.value });
//   },
//
//   render() {
//     return (
//       <div className="text-input-container">
//         <input
//           name={this.props.name}
//           placeholder={this.props.placeholder}
//           value={this.state.text}
//           onChange={this.onChange}
//         />
//       </div>
//     );
//   }
//
// });

// function TextInput({ name, placeholder, text }) {
//   return (
//     <div className="text-input-container">
//       <input name={name} placeholder={placeholder} value={text} />
//     </div>
//   );
// }
//
// TextInput.displayName = 'TextInput';
// TextInput.propTypes = {
//   placeholder: PropTypes.string,
//   text: PropTypes.string,
//   name: PropTypes.string,
// };
//
// export default TextInput;
