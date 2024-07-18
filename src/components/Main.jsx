import { useState } from 'react'

export default function Main({ getRefFrom }) {
    const [value, setValue] = useState('')

    const submit = () => setValue(getRefFrom.current?.value);

    return (
        <>  
            <button type="button" onClick={submit}>Submit Here</button>
            <div>{value}</div>
        </>
    )
}

