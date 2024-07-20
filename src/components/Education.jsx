export default function Education({ onChange }) {

    return (
        <div>
            <form className="education-info" action="#" onSubmit={onChange}>
                <h2>Education</h2>
                <div className="education-school">
                    <label htmlFor="school">School Name: </label>
                    <input
                        type="text"
                        id="school"
                        name="school"
                        required
                     />
                </div>

                <div className="education-degree">
                    <label htmlFor="degree">Degree: </label>
                    <input
                        type="text"
                        id="degree"
                        name="degree"
                        required
                    />
                </div>

                <div className="educationLocation">
                    <label htmlFor="location">Location: </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        required
                    />

                </div>

                <div className="education-date">
                    <label htmlFor="dateStart">Start Date: </label>
                    <input
                        type="date"
                        id="dateStart"
                        name="dateStart"
                        required
                        />

                    <label htmlFor="dateEnd">End Date: </label>
                    <input
                        type="date"
                        id="dateEnd"
                        name="dateEnd"
                        required
                        />
                </div>
                <button type="submit" className="education-submit">Submit</button>
            </form>
        </div>
    )
}

