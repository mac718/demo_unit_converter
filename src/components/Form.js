import React, {Component} from 'react';
import InputGroup from './elements/InputGroup';
import Input from './elements/Input';
import Select from './elements/Select';
import Output from './Output';

const options = ['mm', 'cm', 'm', 'km']

class Form extends Component {
  constructor(){
    super();
    this.state = {
      inputValue: 42,
      inputUnits: 'm',
      outputUnits: 'km'
    }
  }

  onChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }
  render() {
    const {inputValue, inputUnits, outputUnits} = this.state;
    return (
      <form>
        <div className='card card-block bg-faded'>
          <h2>Input</h2>
          <InputGroup 
            name="inputValue" 
            value={inputValue}
            onChange={this.onChangeInput}>
            <Input name="inputValue" value={inputValue} />
          </InputGroup>
          
          <InputGroup name='inputUnits' labelText='Units' >
            <Select
              name='inputUnits'
              options={options}
              value={inputUnits}
              onChange={this.onChangeInput}
            />
          </InputGroup>
        </div>
        <Output
          inputValue={inputValue}
          inputUnits={inputUnits}
          outputUnits={outputUnits}
          onChange={this.onChangeInput}
        />
      </form>
    )
  }
}

export default Form;