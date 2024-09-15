import React from 'react'

const News: React.FC<{ news: string }> = props => {
  return (
    <div className='bg-black text-white text-base text-center p-2'>
      <span className='inline-block animate-pulse'>{props.news}</span>
    </div>
  )
}

export default News
