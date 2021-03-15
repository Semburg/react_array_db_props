const FilmItem = (props) => {
    return (
        <section>
            <p>{props.title}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
           <p>{props.duration}</p> 
           <p> {props.genre}</p>
            <p>{props.rate}</p>
        </section>
    )
}

export default FilmItem;