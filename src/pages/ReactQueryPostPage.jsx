import React from 'react'
import Loading from '../components/Loading';

const ReactQueryPostPage = () => {
  const isLoading = false;
  const isError = false;
  const listPost = []
  if(isLoading) {
    return <Loading />
  }

  if(isError) {
    return <h1>Error</h1>
  }
  return (
    <div className='content'>
      <h1>ReactQueryPostPage</h1>
      {listPost.map((post) => {
          return (
            <div className='post__name' key={post.id}>{post.title}</div>
          )
        })}
    </div>
  )
}

export default ReactQueryPostPage