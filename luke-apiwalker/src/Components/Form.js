import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Card } from './Card';
import { Modal } from './Modal';


export const Form = () => {
    const [type, setType] = useState("people")
    const [id, setId] = useState(1)
    const [result, setResult] = useState()
    const [error, setError] = useState(false)
    const [press, setPress] = useState(false)
    useEffect(() =>{
        if(press){
            axios.get(`https://swapi.dev/api/${type}/${id}/`)
            .then(response=>{setResult(response.data)})
            .catch(error => {setError(true)})
        }
    },[press])
    const onSubmitHandle = (e) => {
        e.preventDefault();
        setPress(true)    
    }
    const changeType = (e) =>{
        setType(e.target.value)
        setPress(false)
        setResult('')  
    }
    const changeId = (e) =>{
        setId(e.target.value)
        setPress(false) 
        setResult('')
    }
    const closeModal = () => {
        
        

    }
    
    return (
        <div>
            <form onSubmit={onSubmitHandle}>
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label className="col-form-label">Search for: </label>
                    </div>
                    <div className="col-5">
                        <select className="form-select" aria-label="Default select example" onChange={changeType}>
                            <option value="people">People</option>
                            <option value="films">Films</option>
                            <option value="starships">Starships</option>
                            <option value="vehicles">Vehicles</option>
                            <option value="species">Species</option>
                            <option value="planets">Planets</option>
                        </select> 
                    </div>
                    <div className="col-2">
                        <input type="number" className="form-control" onChange = {changeId}/>
                    </div>
                    <div className="col-auto">
                    <button type="submit" className="btn btn-primary">Search</button>
                    </div> 
                </div>
                
            </form>
            {
                press && result && <Card result={result}/>
            }
            {
                error && <Modal closeModal={closeModal}/>
            }
            
            
        </div>
    )
}
