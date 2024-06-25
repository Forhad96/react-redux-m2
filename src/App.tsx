
import { decrement, increment, incrementByValue } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="flex items-center justify-center border-4 gap-10 border-rose-600 p-20">
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="text-white bg-green-500 p-3 rounded-md"
        >
          Increase by value
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="text-white bg-green-500 p-3 rounded-md"
        >
          Increase
        </button>
        <p>Count:{count}</p>
        <button
          onClick={() => dispatch(decrement())}
          className="text-white bg-red-500 p-3 rounded-md"
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;
