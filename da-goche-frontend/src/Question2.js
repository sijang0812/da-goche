import React from 'react'

export default function Question({ category2 }) {
    function selectLogo(param) {
        alert(param);
    }

    return (
        <div className="divAnswr">
            <img className="imgAnswr" src={require( './img/' +  category2.id + '.png').default } onClick={() => selectLogo(category2.id)} />
            <p className="pAnswr">{category2.name}</p>
        </div>
    )
}