import faker from '@faker-js/faker'
import React, { useEffect, useState } from 'react'

function Suggestions() {
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, index) => ({
      ...faker.helpers.contextualCard(),
      id: index,
    }))

    setSuggestions(suggestions)
  }, [])
  return (
    <div className="mt-4 ml-10">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See all</button>
      </div>
      {suggestions?.map((profile) => (
        <div key={profile.id} className="mt-3 flex items-center justify-between">
          <img src={profile.avatar} alt="" className="h-10 w-10 rounded-full border p-[2px]" />
          <div className='flex-1 ml-4'>
            <h2 className="text-sm font-semibold">{profile.username}</h2>
            <h3 className="text-xs text-gray-400"> Works at {profile.company.name}</h3>
          </div>
          <button className="text-blue-400 text-xs">Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
