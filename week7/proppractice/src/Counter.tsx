type Props = {
    count: number;
    increment: () => void;
    decrement: () => void;
  };

  export function Counter({ count, increment, decrement }: Props) {
    return (
      <div>
        <button onClick={increment}>Increase</button>
        <span>{count}</span>
        <button onClick={decrement}>Decrease</button>
      </div>
    );
  }