import Course from "./Course.jsx";

const Curriculum = (props) => {
    const {courses} = props
    return (
        <>
            <h1>Web Development curriculum</h1>
            {courses.map(course => <Course key={course.id} courseInfo={course}/>)}
        </>
    )
}

export default Curriculum