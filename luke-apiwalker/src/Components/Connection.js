import axios from 'axios';
import {useEffect, useState} from 'react'

export const Connection = (type,id) => {
   
    useEffect(() =>{
        axios.get(`https://swapi.dev/api/${type}/${id}/`)
            .then(response=>{setResult(response.data)
    })
    
},[])
    return result
}


