import { useState } from 'react'

export default function Education() {
    const [eduData, setEduData] = useState('');

    const eduSubmit = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        let eduObject = Object.fromEntries(data.entries());
        setEduData(eduData, data);
      }

    return (
        <div>
            <form className="education-info" action="#" onSubmit={eduSubmit}>
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
            <div className='main'>
                <h3>School: {eduData.school}</h3>
            </div>
        </div>
    )
}

