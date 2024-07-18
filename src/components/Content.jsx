import Personal from './Personal.jsx'
import Professional from './Professional.jsx'
import Education from './Education.jsx'
import Main from './Main.jsx'
import { useRef } from 'react'

function Content() {
    const elementRef = useRef();

    return (
        <div className="content">
            <Personal />
            <Professional />
            <Education elRef={elementRef} />
            <Main getRefFrom={elementRef} />
        </div>
    )
}

export default Content