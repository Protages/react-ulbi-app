import React, { useEffect, useState, useRef } from 'react';
import PostService from '../API/PostService';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import Loader from '../components/UI/Loader/Loader';
import MyModal from '../components/UI/MyModal/MyModal';
import Pagination from '../components/UI/pagination/Pagination';
import { useFetch } from '../hooks/useFetch';
import { useObserver } from '../hooks/useObserver';
import { useSortedAndQueryPosts } from '../hooks/usePosts';
import '../styles/App.css';
import { getPageCount } from '../utils/pages';


function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modalVisible, setModalVisible] = useState(false)
    const sortedAndSearchPosts = useSortedAndQueryPosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)

    const lastElement = useRef()

    const [fetchPosts, isPostsLoading, error] = useFetch(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchPosts()
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModalVisible(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <>
            <MyButton onClick={() => setModalVisible(true)}>Создать пост</MyButton>
            <MyModal visible={modalVisible} setVisible={setModalVisible}>
                <PostForm create={createPost} />
            </MyModal>
            <hr />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {error &&
                <h1>Ошибка: {error}</h1>
            }
            <PostList
                remove={removePost}
                posts={sortedAndSearchPosts}
                title={'Список постов'}
            />
            <div className="last_element_block">
                <div ref={lastElement} className='last_element'></div>
            </div>
            {isPostsLoading &&
                <Loader />
            }   
            <Pagination totalPages={totalPages} page={page} setPage={setPage} />
            </>
    );
}


export default Posts;
