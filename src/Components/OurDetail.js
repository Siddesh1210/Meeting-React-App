function OurDetail()
{
    return(
        <div className="detail">
            <h1 className="head"><span className="detail-inside"> OUR CORE FEATURE'S </span></h1>
            <div className="card">
                <div className="features">
                    <h1 className="f-logo1"><i class="bi bi-info-circle"></i></h1>
                    <h3 className="info infoo">INFORM & ENGAGE</h3>
                    <p className="info">Things running behind the schedule? Unexpected change of the conference room? Don’t worry, the agenda will update accordingly.</p>
                </div>

                <div className="features">
                    <h1 className="f-logo2"><i class="bi bi-alarm"></i></h1>
                    <h3 className="info infoo">SAVE TIME</h3>
                    <p className="info">Stop wasting your time on designing and printing materials that will be thrown into the bin as soon as the event ends.</p>
                </div>

                <div className="features">
                    <h1 className="f-logo3"><i class="bi bi-reception-4"></i></h1>
                    <h3 className=" info">BOOST NETWORKING</h3>
                    <p className="info">Levarage the potential of event application in initiating new business contacts between attendees. Add extra benefit in conference.</p>
                </div>

                <div className="features">
                    <h1 className="f-logo4"><i class="bi bi-hand-index-thumb"></i></h1>
                    <h3 className=" info">SURVEY AND VOTE</h3>
                    <p className="info">Stop wondering how your event went and get sure about it. Knowing what your audience loved will give you a powerful advantage for the next edition.</p>
                </div>

            </div>
        </div>
    );
}
export default OurDetail;