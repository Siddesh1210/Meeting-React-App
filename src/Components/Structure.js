function Structure(props)
{
    return(
        <div className="show-detail">
            <h3>Title : {props.title}.</h3>
            <h4>Date & Time : {props.date}</h4>
            <h4>Link : {props.link}.</h4>
            <p>Description : {props.desc}.</p>
        </div>
    );
}

export default Structure;