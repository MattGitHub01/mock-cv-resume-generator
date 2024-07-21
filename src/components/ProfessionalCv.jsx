function ProfessionalCv ({ profData }) {

    return (
        <div className="professional-content">
            <h3 className="pr-title" key={profData}>{profData.title}</h3>
            <h3 className="pr-company" key={profData}>{profData.company}</h3>
            <span className="pr-description" key={profData}>{profData.description}</span>
            <div className="pr-start">
                <span>Start: </span>
                <span key={profData}>{profData.pStart}</span>
            </div>
            <div className="pr-end">
                <span>End: </span>
                <span key={profData}>{profData.pEnd}</span>
            </div>
        </div>
    )
}

export default ProfessionalCv