
import { decrement, decrementByValue, increment, incrementByValue } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  const numberOfBlocks = Math.floor (count/5)
  return (
    <div className=" h-screen max-w-3xl mx-auto mt-20">
      <div className="flex items-center justify-center border-4 gap-10 border-rose-600 p-10 rounded">
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
        <button
          onClick={() => dispatch(decrementByValue(5))}
          className="text-white bg-green-500 p-3 rounded-md"
        >
          Decrease by value
        </button>
      </div>
      {/* Render blocks */}
      <div className="mt-5 flex gap-2">
        {Array.from({ length: numberOfBlocks }).map((_, index) => (
          <div key={index} className="p-4 size-1 mt-5 bg-orange-600"></div>
        ))}
      </div>
    </div>
  );
}

export default App;
