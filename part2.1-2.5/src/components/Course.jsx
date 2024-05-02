import Topic from "./Topic.jsx";
import Title from "./Title.jsx";
import Total from "./Total.jsx";

const Course = (props) => {
    const {courseInfo} = props

    const name = courseInfo.name;
    const topics = courseInfo.parts;

    return (
        <>
            <Title text={name}/>
            {topics.map(topic => <Topic key={topic.id} name={topic.name} exercises={topic.exercises}/>)}
            <Total value={topics.reduce((sum, topic) => sum + topic.exercises, 0)}/>
        </>
    )
}

export default Course