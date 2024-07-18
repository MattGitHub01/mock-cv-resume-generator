import { useState } from 'react'

export default function Education({ elRef }) {
    const [eduData, setEduData] = useState('test');

    const eduSubmit = (e) => {
        e.preventDefault();
        var data = new FormData(e.target);
        let eduObject = Object.fromEntries(data.entries());
        setEduData(eduObject);
      }

    return (
        <div>
            <form className="education-info" action="#" onSubmit={eduSubmit}>
                <h2>Education</h2>
                <div className="education-school">
                    <label htmlFor="educationSchool">School Name: </label>
                    <input
                        ref={elRef}
                        type="text"
                        id="educationSchool"
                        name="educationSchool"
                        required
                     />
                </div>

                <div className="education-degree">
                    <label htmlFor="educationDegree">Degree: </label>
                    <input
                        type="text"
                        id="educationDegree"
                        name="educationDegree"
                        required
                    />
                </div>

                <div className="educationLocation">
                    <label htmlFor="educationLocation">Location: </label>
                    <input
                        type="text"
                        id="educationLocation"
                        name="educationLocation"
                        required
                    />

                </div>

                <div className="education-date">
                    <label htmlFor="educationStart">Start Date: </label>
                    <input
                        type="date"
                        id="educationStart"
                        name="educationStart"
                        required
                        />

                    <label htmlFor="educationEnd">End Date: </label>
                    <input
                        type="date"
                        id="educationEnd"
                        name="educationEnd"
                        required
                        />
                </div>

                <button type="submit" className="education-submit">Submit</button>
                <p className="right-side" key={eduData}>Name: {eduData.educationSchool}</p>
            </form>
        </div>
    )
}

