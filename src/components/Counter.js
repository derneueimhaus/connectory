import React, { useState } from "react";

import { connect } from "react-redux";

import { storeCount } from "../redux/actions/counterActions";

function Counter({ storeCount }) {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
    storeCount(count + 1);
  };

  return (
    <div>
      <button onClick={increaseCount}>Increase</button>
      <p>{count}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapActionsToProps = { storeCount };

export default connect(mapStateToProps, mapActionsToProps)(Counter);
