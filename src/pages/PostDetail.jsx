import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import PostService from '../API/PostService'
import Loader from "../components/UI/Loader/Loader";
import {useFetch} from '../hooks/useFetch'

const PostDetail = () => {
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const params = useParams() // тут будет id

    const [fetchPost, isLoading, error] = useFetch(async () => {
        const response = await PostService.getIdPost(params.id)
        setPost(response.data)
    })
    const [fetchCommentsPost, isCommentsLoading, commentsError] = useFetch(async () => {
        const response = await PostService.getIdPostComments(params.id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPost()
        fetchCommentsPost()
    }, [])

    return (
        <>
            <h1>Вы открыли страницу с постом ID={params.id}</h1>
            {isLoading
                ? <Loader />
                : <div className='post'>
                    <div className='post__content'>
                        <strong>{ post.id }. { post.title }</strong>
                        <div>
                            { post.body }
                        </div>
                    </div>
                </div>
            }
            <h1>Комментарии</h1>
            {isCommentsLoading
                ?<Loader />
                :<div className='comments'>
                    {comments.map(comment => 
                        <div className='comment' key={comment.id}>
                            <p>{comment.id}. {comment.name}</p>
                            <div>
                                <p>{comment.body}</p>
                            </div>
                        </div>
                    )}
                </div>
            }
        </>
    )
}

export default PostDetail