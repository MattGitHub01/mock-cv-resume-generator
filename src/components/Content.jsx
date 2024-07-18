import Personal from './Personal.jsx'
import Professional from './Professional.jsx'
import Education from './Education.jsx'
import Main from './Main.jsx'

function Content() {
    return (
        <div className="content">
            <Personal />
            <Professional />
            <Education />
            <Main />
        </div>
    )
}

export default Content