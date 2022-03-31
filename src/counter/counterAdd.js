import React from "react";
import { connect } from "react-redux";
import addSum from "../reducer/sumAction";

class CounterAdd extends React.Component {
  render() {
    let input;

    return (
      <div>
        <input
          onChange={(event) => (input = parseInt(event.target.value))}
          type={"number"}
        />
        <button onClick={() => this.props.onClick(input)}>{"Add"}</button>
      </div>
    );
  }
}

// mapDispatchToProps
// dispatch is a function that will emit an action to the store
// notice that it also accepts props (i.e., React Props that you
// would provide to the Component)
let mapDispatchToProps = function (dispatch, props) {
  return {
    onClick: (val) => {
      dispatch(addSum(val));
    }
  };
};

// this guy isn't used here, but just reminding you of it's existence!
function mapStateToProps(state, props) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterAdd);
