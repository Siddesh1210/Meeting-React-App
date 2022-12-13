import {useNavigate} from 'react-router-dom';
function Home()
{
    const navigate=useNavigate()
    function addHandler()
    {
        navigate('/add-meet');
    }
    return(
        <div className="home-card">
            <h1 className="heading">BE READY TO ENHANCE<br/>YOUR EVENTS AND CONFERENCE</h1>
            <p className="tagline">Let's create & schedule your meeting just on one click</p>
            <button className="btn" onClick={addHandler}>Add Meeting</button>
        </div>
    );
}

export default Home;