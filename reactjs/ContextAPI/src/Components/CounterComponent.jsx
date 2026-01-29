import useCounter from "../Hooks/useCounter"

const CounterComponent = () => {
    const {count,increment,decrement,reset}=useCounter(5);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>

    </div>
  )
}

export default CounterComponent
