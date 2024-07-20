export default function Education({ onSubmit }) {

    return (
        <div>
            <form className="education-info" action="#" onSubmit={onSubmit}>
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
                    <label htmlFor="eStart">Start Date: </label>
                    <input
                        type="date"
                        id="eStart"
                        name="eStart"
                        required
                        />

                    <label htmlFor="eEnd">End Date: </label>
                    <input
                        type="date"
                        id="eEnd"
                        name="eEnd"
                        required
                        />
                </div>
                <button type="submit" className="education-submit">Submit</button>
            </form>
        </div>
    )
}

