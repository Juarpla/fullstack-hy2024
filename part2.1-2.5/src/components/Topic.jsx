const Topic = (props) => {
    const {name, exercises} = props
    return (
        <p>{name} {exercises}</p>
    )
}

export default Topic