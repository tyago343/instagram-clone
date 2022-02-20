import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/outline'
import React from 'react'
function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="my-7 rounded-sm border bg-white">
      <div className="flex items-center p-5">
        <img src={userImg} className="mr-3 h-12 w-12 rounded-full border object-contain p-1" alt="" />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img src={img} classname="object-cover w-full" alt="" />
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
    </div>
  )
}

export default Post
