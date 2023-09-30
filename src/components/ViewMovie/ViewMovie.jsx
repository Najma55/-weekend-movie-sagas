import React from "react";
import { useParams} from 'react-router-dom';

export default function ViewMovie(){
    const params = useParams();
    return <div>HI {params.id}</div>
   
    
}