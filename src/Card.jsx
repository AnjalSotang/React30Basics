function Card(props){
    const {title, body} = props
    return(
        <div style={{backgroundColor: "yellow"}}>
        <h1>{title}</h1>
        <h1>{body}</h1>
        </div>
    )

}

export default Card