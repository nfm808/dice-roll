import React, { Component } from 'react'
import './RollDice.css'
import Die from '../Die/Die';

export default class RollDice extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       dice1: 1,
       dice2: 1,
       isRolling: false
    }
    this.rollDice = this.rollDice.bind(this);
    this.toggleIsRolling = this.toggleIsRolling.bind(this);
    this.numToString = this.numToString.bind(this);
  }
  
  rollDice() {
    const rand1 = Math.floor(Math.random() * 6) + 1;
    const rand2 = Math.floor(Math.random() * 6) + 1;
    this.setState({
      dice1: rand1,
      dice2: rand2,
    }, this.toggleIsRolling())
    setTimeout(() => {
      this.toggleIsRolling();
    }, 1000);
  }

  toggleIsRolling() {
    this.setState({
      isRolling: !this.state.isRolling
    })
  }

  numToString(num) {
    let text;
    num === 1 ? text ='one'
    : num === 2 ? text = 'two'
    : num === 3 ? text = 'three'
    : num === 4 ? text = 'four'
    : num === 5 ? text = 'five'
    : text = 'six'
    return text;
  }

  render() {
    const {dice1, dice2, isRolling} = this.state;
    const rollText = isRolling ? "Rolling..." : "Roll Dice!";
    const ani = isRolling ? "Die-shake" : null;
    return (
      <section className='RollDice'>
        <div className='RollDice-Die'>
          <Die 
            iconText={this.numToString(dice1)} 
            anime={ani} 
          />
          <Die 
            iconText={this.numToString(dice2)} 
            anime={ani} 
          />
        </div>
        <button 
          className='RollDice-button'
          onClick={this.rollDice} 
          disabled={isRolling}
        >
          {rollText}
        </button>
      </section>
    )
  }
}
