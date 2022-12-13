import Footer from '../Components/Footer';
import {useRef } from 'react';
import { useNavigate } from 'react-router-dom';
function AddMeet()
{
    const meetTitle=useRef(0);
    const meetLink=useRef(0);
    const meetDesc=useRef(0);
    const navigate=useNavigate();
    function meetHandler()
    {
        const temptitle=meetTitle.current.value;
        const templink=meetLink.current.value;
        const tempdesc=meetDesc.current.value;
        let meet_detail={
            title:temptitle,
            link:templink,
            description:tempdesc,
        }
        fetch('https://meeting-react-a-default-rtdb.firebaseio.com/meet_detail.json',{method:'post',body:JSON.stringify(meet_detail)}).then(()=>
        {
            navigate('/your-meet')
        });
    }

    function statusHandler()
    {
        meetTitle.current.value="";
        meetLink.current.value="";
        meetDesc.current.value="";

    }
    return(
        <div>
            <div className="meet">
            <h2>Kindly enter your meet detail</h2>
            <input type="text" className="inp" placeholder="Enter meet title" ref={meetTitle} onFocus={statusHandler}/>
            <input type="text" className="inp" placeholder="Enter meet link" ref={meetLink} onFocus={statusHandler}/>
            <textarea placeholder="Enter meet description" className="meet-desc" ref={meetDesc} onFocus={statusHandler}></textarea>
            <button className="btn btn2" onClick={meetHandler} >Add Meet</button>
            </div>
            <Footer/>
        </div>
    );
}

export default AddMeet;