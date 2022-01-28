import React from 'react'

export const Card = ({result}) => {
    
    let fitro = Object.entries(result).filter((item,index) => index <= 4)
    const divStile = {
        width: "18rem"
    }
    return (
        <div className="card mt-5" style={divStile}>
                <ul className="list-group list-group-flush">
                    {
                        fitro.map((item,index) => {
                            if(index>0){
                                return <li key = {index} className="list-group-item">{item[0].toUpperCase()} : {item[1]}</li>
                            }else{
                                return (
                                    <li key = {index}>
                                        <h4 className="card-title card-body">{item[0].toUpperCase()} : {item[1]}</h4>
                                    </li>
                                    
                                )
                            }
                        })
                    }
                </ul>    
        </div>
    )
}
