import UserContent from './UserContent.jsx'

function Content(props) {
    return (
        <>
            <UserContent key={props.usr} usr={props.usr} />
        </>
    )
}

export default Content