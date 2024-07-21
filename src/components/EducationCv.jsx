function EducationCv ({ eduData }) {

    return (
        <div className="education-content">
            <h3 className="ed-school" key={eduData}>{eduData.school}</h3>
            <h3 className="ed-degree" key={eduData}>{eduData.degree}</h3>
            <span className="ed-location" key={eduData}>{eduData.location}</span>
            <div className="ed-start">
                <span>ClrTstStart: </span>
                <span key={eduData}>{eduData.eStart}</span>
            </div>
            <div className="ed-end">
                <span>End: </span>
                <span key={eduData}>{eduData.eEnd}</span>
            </div>
        </div>
    )
}

export default EducationCv