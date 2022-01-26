import React, { useState } from 'react'
import { Card } from './Card';
import {Connection} from './Connection'

export const Form = () => {
    const [type, setType] = useState("people")
    const [id, setId] = useState(1)
    const [result, setResult] = useState()
    const [press, setPress] = useState(false)
    Connection(type,id,setResult)
    const onSubmitHandle = (e) => {
        e.preventDefault();
        setPress(true)
        
    }
    // {press && Connection(type,id)}
    return (
        <div>
            <form onSubmit={onSubmitHandle}>
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label className="col-form-label">Search for: </label>
                    </div>
                    <div className="col-5">
                        <select className="form-select" aria-label="Default select example" onChange={(e) => setType(e.target.value)}>
                            <option value="people">People</option>
                            <option value="films">Films</option>
                            <option value="starships">Starships</option>
                            <option value="vehicles">Vehicles</option>
                            <option value="species">Species</option>
                            <option value="planets">Planets</option>
                        </select> 
                    </div>
                    <div className="col-2">
                        <input type="number" className="form-control" onChange = {(e) => setId(e.target.value)}/>
                    </div>
                    <div className="col-auto">
                    <button type="submit" className="btn btn-primary">Search</button>
                    </div> 
                </div>
                
            </form>
            <Card/>
        </div>
    )
}
