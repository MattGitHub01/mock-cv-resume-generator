function Education(props) {
    const education = {
        school: props.school,
        degree: props.degree,
        location: props.location,
        startE: props.startE,
        endE: props.endE
    };

    return (
        <div>
            <form className="education-info" action="#">
                <h2>Education</h2>
                <div className="education-school">
                    <label htmlFor="education-school">School Name: </label>
                    <input
                        value={education.school}
                        type="text"
                        id="education-school"
                        name="education-school"
                        required
                    >
                    </input>
                </div>

                <div className="education-degree">
                    <label htmlFor="education-degree">Degree: </label>
                    <input
                        value={education.degree}
                        type="text"
                        id="education-degree"
                        name="education-degree"
                        required
                    >
                    </input>
                </div>

                <div className="education-location">
                    <label htmlFor="education-location">Location: </label>
                    <input
                        value={education.location}
                        type="text"
                        id="education-location"
                        name="education-location"
                        required
                    >
                    </input>
                </div>

                <div className="education-date">
                    <label htmlFor="education-start">Start Date: </label>
                    <input
                        value={education.startE}
                        type="date"
                        id="education-start"
                        name="education-start"
                        required
                    >
                    </input>

                    <label htmlFor="education-end">End Date: </label>
                    <input
                        value={education.endE}
                        type="date"
                        id="education-end"
                        name="education-end"
                        required
                    >
                    </input>
                </div>

                <button type="submit" className="education-submit">Submit</button>
            </form>
        </div>
    )
}

export default Education