import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

export const Card=({name,poster,length,writer,link,type,date})=>{
    
    const navigate = useNavigate()
    const [show,setShow] = useState(true)
    const dateStyle = {color:"blue"}
    const lengthStyle = {color:length<5?"green":"red"}
   
    return(
        <>   
        <div className="card m-1 ms-2 bg-dark text-white" style={{width: "19rem",height:"480px"}}>
            <Link to={link}>
                <img src={poster} className="card-img-top" style={{height:"300px"}} alt="..."/>
            </Link>
            <div className="card-body">
                <div className='d-flex'>
                    <h6 className="card-title">{name}</h6>
                </div>
                <div className="card-text" style={{height:"75px"}}><em>By {writer}</em></div>
                <div className='d-flex justify-content-between'>
                    <div style={dateStyle} >{date}</div>
                    <div style={lengthStyle}>{length} Min Read</div>
                </div>
            </div>
        </div>
        </>
    )
}

