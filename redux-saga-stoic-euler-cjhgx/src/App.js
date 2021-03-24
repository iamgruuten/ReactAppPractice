import React, { PureComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import { getUser } from "./redux/ducks/user";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);
  console.log(user);

  const count = useSelector((state) => state.counter.count);
  const voters = [
    "Anthony Sistilli ",
    "Bob Smith",
    "Stephanie Foo",
    "Kevin Ma"
  ];
  return (
    <div className="App">
      {user && <h1> Hello, {user.firstName} </h1>}
      <h1>Redux made easy</h1>
      <h2> Total Votes: {count}</h2>
      {voters.map((voter) => (
        <Counter name={voter} />
      ))}
    </div>
  );
}