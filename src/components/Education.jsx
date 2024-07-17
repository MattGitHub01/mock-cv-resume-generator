function Education() {
    return (
        <div className="education-info">
            <form action="#">
                <label htmlFor="education-school">School Name: </label>
                <input
                    type="text"
                    id="education-school"
                    name="education-school"
                    required
                >
                </input>

                <label htmlFor="education-degree">Degree: </label>
                <input
                    type="text"
                    id="education-degree"
                    name="education-degree"
                    required
                >
                </input>

                <label htmlFor="education-location">Location: </label>
                <input
                    type="text"
                    id="education-location"
                    name="education-location"
                    required
                >
                </input>

                <label htmlFor="education-start">Start Date: </label>
                <input
                    type="date"
                    id="education-start"
                    name="education-start"
                    required
                >
                </input>

                <label htmlFor="education-end">End Date: </label>
                <input
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