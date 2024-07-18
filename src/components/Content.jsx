//import PersonalContent from './PersonalContent.jsx'

function Content(formObject) {
    console.table(formObject)
    return (
        <div>
            <h1 key={formObject.name}>{formObject.name}</h1>
        </div>
    )
}

export default Content