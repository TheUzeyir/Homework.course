import React, { Component } from 'react'
import Btn from './btn/Btn';

export default class ClassComponent extends Component {

    constructor(props){
        super(props);

        this.state={
            count:0,
        };
    }


    handleClickMinus=()=>{
      if (this.state.count > 0) {
        this.setState({
            count: this.state.count - 1,
        });
    }
    }

    handleClickPlus=()=>{
        this.setState({
            count:this.state.count +1,
        })
    }


    handleClickReset=()=>{
        this.setState({
            count:this.state.count =0,
        })
    }

    

  render() {
    return (
      <div>
        {/* <Btn type="plus" btnText="+"/>
        <Btn type="minus" btnText="-"/>
        <Btn type="reset" btnText="reset"/> */}
        <button onClick={this.handleClickPlus}>+</button>
        <button onClick={this.handleClickMinus}>-</button>
        <button onClick={this.handleClickReset}>Reset</button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}
