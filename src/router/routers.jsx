import About from '../pages/About'
import Error from '../pages/Error'
import PostDetail from '../pages/PostDetail'
import Posts from '../pages/Posts'
import Login from '../pages/Login'


export const privateRoutes = [
    {path: '/about', element: <About/>},
    {path: '/error', element: <Error/>},
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <PostDetail/>},
]

export const publicRoutes = [
    {path: '/login', element: <Login/>},
]
