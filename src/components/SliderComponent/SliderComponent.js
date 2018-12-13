import React, { Component } from "react";
import './SliderComponent.scss';

import SliderCard from '../SliderCardComponent/SliderCardComponent';

// class Slider extends Component {
  

//   render() {
//     return (
//       <div className="slider">
//         <button className="Slider__btn">prev</button>
//         <button className="Slider__btn">next</button>
//         <div className="Slider__content">
//           <SliderCard />
//         </div>
//       </div>
//     );
//   }
// }
const { Provider, Consumer } = React.createContext()

const ActionTypes = {
  TOGGLE: "TOGGLE"
};

const initialState = {
  user: {
    name: 'Alex'
  },
  isADuck: false
};

const withState = WrappedComponent => props => (
  <Consumer>{state => <WrappedComponent {...state} {...props} />}</Consumer>
);

const reducer = (state, action) => {
  if (action.type === ActionTypes.TOGGLE) {
    console.log(state.isADuck)
    return { ...state, isADuck: !state.isADuck };
  }
  console.log(state.isADuck)
};


class StateProvider extends Component {
  state = {
    ...this.props.initialState,
    dispatch: action => {
      this.setState(state => reducer(state, action));
    },
    // clickHandler: this.state.dispatch({ type: ActionTypes.TOGGLE })
  }

  render() {
    const { state, props: { children } } = this;

    return (
      <Provider value={state}>{children}</Provider>
    )
  }
}

const Welcome = withState(({ user, clickHandler, dispatch  }) => {
  return (
    <div>
      <button onClick={e => dispatch({ type: ActionTypes.TOGGLE })}>Hello, {user.name}!</button>
    </div>
  )});

class SliderProvider extends Component {
  render() {
    return (
      <StateProvider initialState={initialState}>
        <Welcome />
        {/* {this.props.children} */}
      </StateProvider>
    )
  }
}

export default SliderProvider;
