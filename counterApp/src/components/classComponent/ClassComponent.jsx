import React, { Component } from 'react'
import Btn from '../btn/Btn';
import "./classComponent.css"

export default class ClassComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
        count: 0,
    };
}

handleClickMinus = () => {
    if (this.state.count > 0) {
        this.setState({
            count: this.state.count - 1,
        });
    }
}

handleClickPlus = () => {
    this.setState({
        count: this.state.count + 1,
    });
}

handleClickReset = () => {
    this.setState({
        count: 0,
    });
}

render() {
    return (
        <div className='btn_box'>
          <h1>Counter App</h1>
          <h3>Men olsaydim 100balin yanina 1denede elave 0 yazardim</h3>
            <div className="counter_box">
                <Btn type="plus" btnText="+" handleClick={this.handleClickPlus} />
                <p className='counter_box_text'>{this.state.count}</p>
                <Btn type="minus" btnText="-" handleClick={this.handleClickMinus} />
            </div>
            <Btn type="reset" btnText="Reset" handleClick={this.handleClickReset} />

        </div>
    )
}
}