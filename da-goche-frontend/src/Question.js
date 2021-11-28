import React from 'react'

export default function Question({ category }) {
    return (
        <div className="divAnswr">
            <img src={category.url} alt={category.url} />
        </div>
    )
}
