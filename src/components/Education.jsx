function Education(props) {
    const education = {
        school: props.school,
        degree: props.degree,
        location: props.location,
        startE: props.startE,
        endE: props.endE
    };

    return (
        <div className="education-info">
            <form action="#">
                <label htmlFor="education-school">School Name: </label>
                <input
                    value={education.school}
                    type="text"
                    id="education-school"
                    name="education-school"
                    required
                >
                </input>

                <label htmlFor="education-degree">Degree: </label>
                <input
                    value={education.degree}
                    type="text"
                    id="education-degree"
                    name="education-degree"
                    required
                >
                </input>

                <label htmlFor="education-location">Location: </label>
                <input
                    value={education.location}
                    type="text"
                    id="education-location"
                    name="education-location"
                    required
                >
                </input>

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
                <button type="submit" className="education-submit">Submit</button>
            </form>
        </div>
    )
}

export default Education