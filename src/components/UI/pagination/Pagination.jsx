import React from 'react';
import classes from './Pagination.module.css'
import {getPageCount, getPagesArray} from '../../../utils/pages'

const Pagination = ({totalPages, page, setPage}) => {
    let pagesArray = getPagesArray(totalPages)

    return (
        <div className='page__wrapper'>
            {pagesArray.map(p => 
                <span 
                    className={p === page ? 'page page__curent' : 'page'} 
                    onClick={() => setPage(p)}
                    key={p}
                >
                    {p}
                </span>
            )}
        </div>
    )
}

export default Pagination
