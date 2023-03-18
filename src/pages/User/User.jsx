import { useSearch } from '@tanstack/react-location'
import React, { useEffect, useState } from 'react'

import Scroll from '../../components/Scroll'
import UserCard from '../../components/UserCard'
import './style.scss'

export default function User() {
  const { id } = useSearch()
  const [user, setUser] = useState()

  useEffect(() => {
    fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setUser(res)
      })
  }, [id])

  if (!user) {
    return null
  }

  return (
    <div className="user-details">
      <div className='data'>
        <div className='cover'>
          <img src={user.imageUrl} />
        </div>
        <h1>{`${user.prefix} ${user.name} ${user.lastName}`}</h1>
        <p className='company'>{`${user.title} at ${user.company.name}`}</p>
        <span className='contact'>
          {user.email}
        </span>
      </div>
      <Scroll
        limit={10}
        url="http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user"
      >
        {
          (data) => (
            <div className="user-users-cards">
              {
                data.map((item, i) => (
                  <UserCard
                    key={`user-item-${i}-${item.id}`}
                    {...item}
                  />
                ))
              }
            </div>
          )
        }
      </Scroll>
    </div>
  )
}
