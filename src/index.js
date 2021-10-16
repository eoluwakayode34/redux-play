import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect} from 'react-redux';
import {createStore} from 'redux'
import './styles.scss';


const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const initialState = {
  count : 0
}
const IncrementReducer = (state = initialState, action) => {
  if(action.type === INCREMENT){

    return {count: state.count + 1 }
  }

  if(action.type === DECREMENT){
    return {count: state.count - 1}
  }

  return state
}

const IncrementValue = () => (
   {
    type: INCREMENT
  }
)


const DecrementValue = () => (
  {
    type: DECREMENT
  }
)

const store = createStore(IncrementReducer)




class Counter extends Component {

  render() {

    const {count,decrement, increment} = this.props

    return (

      <main className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button>Reset</button>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {

  return state
}

const mapDispatchToProps = dispatch => {
return {
  increment(){
    dispatch(IncrementValue())
  },
  decrement(){
    dispatch(DecrementValue())
  }
}
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

render(
  <Provider store={store}>

<CounterContainer />
</Provider>
, document.getElementById('root'));
