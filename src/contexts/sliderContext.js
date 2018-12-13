import React, { Component } from 'react';
import data from '../data/data';

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
    return { ...state, isADuck: !state.isADuck };
  }
};


class StateProvider extends Component {
  state = {
    ...this.props.initialState,
    dispatch: action => {
      this.setState(state => reducer(state, action));
    },
    clickHandler: this.state.dispatch({ type: ActionTypes.TOGGLE })
  }
  render() {
    const { state, props: { children } } = this;

    return (
      <Provider value={state}>{children}</Provider>
    )
  }
}

const Welcome = withState(({ user }) => {
  return (
    <div>
      <button onClick={}>Hello, {user.name}!</button>
    </div>
  )});

class SliderProvider extends Component {
  render() {
    return (
      <StateProvider>
        <Welcome />
        {/* {this.props.children} */}
      </StateProvider>
    )
  }
}

export default SliderProvider;