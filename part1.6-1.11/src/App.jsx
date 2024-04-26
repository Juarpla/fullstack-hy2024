import { useState } from 'react'

const Title = (props) => {
  return(
      <h2>{props.text}</h2>
  );
}

const Button = ({handleClick, text}) => {
   return (
       <button onClick={handleClick}> {text} </button>
   );
}

const Data = ({text, result}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{result}</td>
        </tr>
    );
}

const Statistics = ({stats}) => {
    if (stats.all === 0) {
        return (
            <table>
                <tbody>
                    <Data text={"No feedback given"}/>
                </tbody>
            </table>
        );
    }
    return(
        <table>
            <tbody>
                <Data text={"good"} result={stats.good}/>
                <Data text={"neutral"} result={stats.neutral}/>
                <Data text={"bad"} result={stats.bad}/>
                <Data text={"all"} result={stats.all}/>
                <Data text={"average"} result={stats.average}/>
                <Data text={"positive"} result={stats.positive}/>
            </tbody>
        </table>

    );
}

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const dataNumbers = [bad, good, neutral];
    const all = dataNumbers.reduce((sum, current) => sum + current);
    const average = Math.round(all / 3 * 100) / 100;
    const positive = Math.round((good / all * 100) * 100) / 100 + " %";

    const statsData = {
        "good": good,
        "neutral" : neutral,
        "bad": bad,
        "all": all,
        "average": average,
        "positive": positive
    }

    const handleClickGood = () => setGood(good + 1);
    const handleClickNeutral = () => setNeutral(neutral + 1);
    const handleClickBad = () => setBad(bad + 1);

    return (
        <div>
            <Title text={"Give feedback"}/>
            <Button handleClick={handleClickGood} text={"good"}/>
            <Button handleClick={handleClickNeutral} text={"neutral"}/>
            <Button handleClick={handleClickBad} text={"bad"}/>
            <Title text={"Statistics"}/>
            <Statistics stats={statsData}/>
        </div>
    );
}

export default App
