import React, { useEffect, useState } from 'react'
import * as Servives from '../services/index'
import Loading from '../components/Loading';

const ReactPostPage = () => {
  const [listPost, setListPost] = useState([])
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllPost = async () => {
    setIsLoading(true)
    try {
      Servives.getAllPosts().then(res => {
        if(res?.status === 200) {
          setListPost(res.data)
          setIsSuccess(true)
        }else {
          setIsError(true)
        }
      setIsLoading(false)
      })
    } catch (error) {
      setIsError(true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchAllPost()
  }, [])

  if(isLoading) {
    return <Loading />
  }

  if(isError) {
    return <h1>Error</h1>
  }


  return (
    <div className='content'>
      <h1>ReactPostPage</h1>
        {listPost?.map((post) => {
          return (
            <div className='post__name' key={post.id}>{post.title}</div>
          )
        })}
    </div>
  )
}

export default ReactPostPage