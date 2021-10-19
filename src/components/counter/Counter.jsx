import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';

import { Button } from 'react-bootstrap';

function CounterComponent() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <Button
          aria-label='Increment by amount'
          onClick={() => dispatch(incrementByAmount(22))}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
}

export default CounterComponent;
