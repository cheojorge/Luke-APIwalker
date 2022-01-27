import React from 'react'

export const Card = ({result}) => {
    let fitro = Object.entries(result).filter((item,index) => index <= 4)
    const divStile = {
        width: "18rem"
    }
    return (
        <div className="card mt-5" style={divStile}>
                <div className="card-body">
                    <h5 className="card-title">{fitro[0][0]} : {fitro[0][1]}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{fitro[1][0]} : {fitro[1][1]}</li>
                    <li className="list-group-item">{fitro[2][0]} : {fitro[2][1]}</li>
                    <li className="list-group-item">{fitro[3][0]} : {fitro[3][1]}</li>   
                    <li className="list-group-item">{fitro[4][0]} : {fitro[4][1]}</li>   
                </ul>
               
        </div>
    )
}
