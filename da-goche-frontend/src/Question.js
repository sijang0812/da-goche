import React from 'react'

export default function Question({ category }) {
    return (
        <div className="divAnswr">
            <img className="imgAnswr" src={require( './img/' +  category.id + '.png').default} />
            <p className="pAnswr">{category.name}</p>
        </div>
    )
}
