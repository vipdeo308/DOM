import {useState,useEffect} from 'react';
import {Card} from './Card';

export const CardList = ({type,cardList}) => {

    const [list,setList] = useState([]);   
    
    useEffect(() => {
        if (type === "all") {
            setList(cardList);
        } else {
            setList(cardList.filter((element) => element.type === type));
        }
    }, [type,cardList]);
 
  
    return (
        <div className='d-flex flex-wrap bg-light text-white' style={{gap:"2%"}}>      
            {   
                list.map((element,index)=>(<Card key={index} {...element}/>))
            }
        </div> 
    )
}
