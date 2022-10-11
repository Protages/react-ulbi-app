import React, {useState} from 'react';

export const useFetch = (callback) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    // const fetching = async () => {
    //     try {
    //         setIsLoading(true)
    //         await callback()
    //     } catch (e) {
    //         setError(e.message)
    //     } finally {
    //         setIsLoading(false)
    //     }
    // }

    const fetching = async () => {
        try {
            setIsLoading(true)
            setTimeout(async () => {
                await callback()
                setIsLoading(false)
            }, 500)
        } catch (e) {
            setError(e.message)
        }
    }
    
    return [fetching, isLoading, error]
}