const Part = (props) => {
    return (
        <>
            <p>
                {props.partNumber} {props.exercises}
            </p>
        </>
    );
}

const Header = (props) => {
    const courseName = props.course["name"];
    return (
        <>
            <h1>{courseName}</h1>
        </>
    );
}

const Content = (props) => {
    const parts = props.course["parts"];
    const partsElements = parts.map((part, index) => <Part key={index} partNumber={part["name"]} exercises={part["exercises"]}/>);
    return (
        <>
            {partsElements}
        </>
    );
}

const Total = (props) => {
    const parts = props.course["parts"];
    const sum = parts.reduce((accumulator, currentItem) => accumulator +  currentItem["exercises"] , 0);
    return (
        <>
            <p>
                Number of exercises {sum}
            </p>
        </>
    );
}


const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10
            },
            {
                name: "Using props to pass data",
                exercises: 7
            },
            {
                name: "State of a component",
                exercises: 14
            }
        ]
    };

    return (
        <>
            <Header course={course}/>
            <Content course={course}/>
            <Total course={course}/>
        </>
    )
}

export default App
