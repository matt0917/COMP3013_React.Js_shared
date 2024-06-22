export type Props = {
    count: number;
    increment: () => void;
    decrement: () => void;
};

export function Child(){
    const {count, increment, decrement} = useCounterState((state)=> state);
    return (
        <>
            <h4>I am the counter!</h4>
            
        </>
    );
}