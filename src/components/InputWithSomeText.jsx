import React, {useState} from 'react';

const InputWithSomeText = () => {
    const [sometext, setSometext] = useState('Base Sometext')

    return (
        <div>
            <h1>{ sometext }</h1>
            <input
            type="text" 
            onChange={event => setSometext(event.target.value)} 
            value={sometext}/>
        </div>
    )
}

export default InputWithSomeText