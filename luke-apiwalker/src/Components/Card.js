import React from 'react'

export const Card = () => {
    const divStile = {
        width: "18rem"
    }
    return (
        <div className="card mt-5" style={divStile}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>   
                    <li className="list-group-item">A third item</li>   
                </ul>
        </div>
    )
}
