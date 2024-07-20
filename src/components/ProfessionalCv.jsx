function ProfessionalCv ({ profData }) {

    return (
        <div className="professional-content">
            <h3 className="pr-title" key={profData}>{profData.title}</h3>
            <h3 className="pr-company" key={profData}>{profData.company}</h3>
            <span className="pr-description" key={profData}>{profData.description}</span>
            <div className="pr-start">
                <span>Start: </span>
                <span key={profData}>{profData.prStart}</span>
            </div>
            <div className="pr-end">
                <span>End: </span>
                <span key={profData}>{profData.prEnd}</span>
            </div>
        </div>
    )
}

export default ProfessionalCv