import React from 'react'

import Scroll from '../../components/Scroll'
import UserCard from '../../components/UserCard'
import './style.scss'

export default function Home() {
  return (
    <Scroll
      limit={15}
      url="http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user"
    >
      {
        (data) => (
          <div className="home-users-cards">
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
  )
}
