import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput 
                placeholder='Поиск ...'
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect 
                defaultOption="Сортировка"
                options={[
                    {'value': 'title', 'name': 'По названию'},
                    {'value': 'body', 'name': 'По описанию'}
                ]}
                value={filter.sort}
                change={sortSelected => setFilter({...filter, sort: sortSelected})}
            />
        </div>
    )
}

export default PostFilter