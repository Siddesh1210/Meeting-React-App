import Footer from '../Components/Footer';
import {useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddMeet()
{
    const meetTitle=useRef(0);
    const meetDate=useRef(0);
    const meetLink=useRef(0);
    const meetDesc=useRef(0);
    const navigate=useNavigate();
    function meetHandler()
    {
        const temptitle=meetTitle.current.value;
        const tempDate=meetDate.current.value;
        const templink=meetLink.current.value;
        const tempdesc=meetDesc.current.value;
        let meet_detail={
            title:temptitle,
            date_time:tempDate,
            link:templink,
            description:tempdesc,
        }
        if(temptitle.length > 3 && tempDate.length > 3 && templink.length > 3 && tempdesc.length > 3)
        {
            fetch('https://meeting-react-a-default-rtdb.firebaseio.com/meet_detail.json',{method:'post',body:JSON.stringify(meet_detail)}).then(()=>
                {
                     navigate('/your-meet');
                });
        }
        else if (temptitle.length < 3)
        {
            toast.error('Please enter proper title',{
                        position:'top-center',
            });
        }
        else if (templink.length < 3)
        {
            toast.error('Please enter proper link',{
                        position:'top-center',
            });
        }
        else
        {
            toast.error('Please enter description of minimum length 3',{
                        position:'top-center',
            });
        }
    //   end of meetHandler function  
    }

    return(
        <div>
            <div className="meet">
            <h2>Kindly enter your meet detail</h2>
            <input type="text" className="inp" placeholder="Enter meet title" ref={meetTitle} />
            <input type="datetime-local" placeholder="Select date & time" className="inp" ref={meetDate} />
            <input type="text" className="inp" placeholder="Enter meet link" ref={meetLink} />
            <textarea placeholder="Enter meet description" className="meet-desc" ref={meetDesc}></textarea>
            <button className="btn btn2" onClick={meetHandler} >Add Meet</button>
            <ToastContainer/>
            </div>
            <Footer/>
        </div>
    );
}

export default AddMeet;