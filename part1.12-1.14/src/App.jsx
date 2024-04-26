import { useState } from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ];

    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

    const handleClickSelected = () => {
        const arrayLength = anecdotes.length;
        const randomNumber = Math.floor(Math.random() * arrayLength);
        return(setSelected(randomNumber));
    }

    const handleClickVote = () => {
        const copyPoints = [...points ];
        copyPoints[selected] = points[selected] + 1;
        setPoints(copyPoints);
    }

    const maxPoints = Math.max(...points);
    const indexMax = points.indexOf(maxPoints);

    return (
        <div>
            <h2>Anecdote of the day</h2>
            <p>{anecdotes[selected]}</p>
            <p> has {points[selected]} votes</p>
            <button onClick={handleClickVote}>vote</button>
            <button onClick={handleClickSelected}>Next Anecdote</button>
            <h2>Anecdote with most votes</h2>
            <p>{anecdotes[indexMax]}</p>
            <p> has {points[indexMax]} votes</p>
        </div>
    );
}

export default App