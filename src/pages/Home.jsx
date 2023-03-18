import React from 'react'
import Scroll from '../components/Scroll'
import UserCard from '../components/UserCard'



export default function Home() {
  return (
    <Scroll url="http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user">
      {
        (data) => (
          data.map((item, i) => (
            <UserCard
              key={`user-item-${i}-${item.id}`}
              {...item}
            />
          ))
        )
      }
    </Scroll>
  )
}
