import React from 'react'
import UserCard from '../components/UserCard'

const fakeData = {
  "id": 1,
  "name": "Jazmin",
  "lastName": "Abernathy",
  "prefix": "Mrs.",
  "title": "Corporate Markets Director",
  "imageUrl": "http://placeimg.com/640/480/animals"
}

export default function Home() {
  return (
    <div>
      <UserCard {...fakeData} />
      <UserCard {...fakeData} />
      <UserCard {...fakeData} />
      <UserCard {...fakeData} />
      <UserCard {...fakeData} />
      <UserCard {...fakeData} />
      <UserCard {...fakeData} />
      <UserCard {...fakeData} />
      <UserCard {...fakeData} />
    </div>
  )
}
