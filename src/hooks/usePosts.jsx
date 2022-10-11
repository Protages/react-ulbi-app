import React, {useMemo} from 'react';


export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        // console.log('sortedPosts Вызывана!')
        if (sort) {
            // Так выглядит сорторовка массива, без изменения самого массива.
            return [...posts].filter((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [posts, sort])

    return sortedPosts
}

export const useSortedAndQueryPosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)

    const sortedAndSearchPosts = useMemo(() => {
        // console.log('sortedAndSearchPosts Вызывана!')
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [sortedPosts, query])

    return sortedAndSearchPosts
}