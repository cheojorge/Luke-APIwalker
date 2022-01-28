import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card } from './Card';
import { Modal } from './Modal';
import { Link } from '@reach/router';
export const People = ({ id }) => {
    const [result, setResult] = useState([])
    const [error, setError] = useState(false)
    const [homeWorld, setHomeWorld] = useState("")
    const [url, setUrl] = useState("")

    useEffect(() => {

        axios.get(`https://swapi.dev/api/people/${id}/`)
            .then(response => { 
                setResult(response.data) 
                setUrl(response.data.homeworld)    
            })
            .catch(error => { setError(true) })
            
        if(url){
            axios.get(url)
            .then(response => { setHomeWorld(response.data) })
            .catch(error => { setError(true) })
        }
   

    }, [url])
    return (
        <div>
            <Link to='/'>HOME</Link>
            <hr />
            <div className="alert alert-info" role="alert">
                HOMEWORLD: {homeWorld.name}
            </div>
            {
                result.length != [] && <Card result={result} />
            }

            {
                error && <Modal setError={setError} />
            }

        </div>
    )
}
