import React from 'react'
import { Link } from '@tanstack/react-location'

import './style.scss'

export default function UserCard({
    id, name, lastName, prefix, title, imageUrl,
}) {
    return (
        <article className='user-card'>
            <div className='cover'>
                <img src={imageUrl} />
            </div>
            <h3>{`${prefix} ${name} ${lastName}`}</h3>
            <p>{title}</p>
            <Link to={`/user/${id}`}>Open profile</Link>
        </article>
    )
}
