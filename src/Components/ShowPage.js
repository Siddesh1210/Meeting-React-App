import Footer from '../Components/Footer';
import Structure from './Structure';
import {useState , useEffect} from 'react';
function ShowPage()
{
    const[update,setUpdate]=useState([]);
    useEffect(()=>
    {
        fetch('https://meeting-react-a-default-rtdb.firebaseio.com/meet_detail.json').then
        (response=>response.json()).then(data=>
            {
                const meetings=[];
                for(let key in data)
                {
                    const meet_detail={
                        id:key,
                        ...data[key]                    
                }
                meetings.push(meet_detail);
                setUpdate(meetings);
            }
    })
    },[])
    return(
        <div>
            <h1 className='meet-schedule'>Your Meeting Schedule </h1>
            <div>
                {
                    update.map((meet)=>
                    {
                        return <Structure title={meet.title} link={meet.link} desc={meet.description} />
                    })
                }
            </div>
            <Footer/>
        </div>
    );
}

export default ShowPage;