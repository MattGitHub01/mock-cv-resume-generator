// import Personal from './Personal.jsx'
// import Professional from './Professional.jsx'
// import Education from './Education.jsx'
import { useState } from "react";

function Content() {
    const [persData, setPersData] = useState('test');
    const [profData, setProfData] = useState('test');
    const [eduData, setEduData] = useState('');

    const persSubmit = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        let persObject = Object.fromEntries(data.entries());
        setPersData(persObject);
    }

    const profSubmit = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        let profObject = Object.fromEntries(data.entries());
        setProfData(profObject);
    }

    const eduSubmit = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        let eduObject = Object.fromEntries(data.entries());
        setEduData(eduObject);
    }


    return (
        <>
            <div className="personal-wrapper">
                <form className="personal-info" action="#" onSubmit={persSubmit}>
                    <h2>Personal Information</h2>
                    <div className="personal-name">
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                        >
                        </input>
                    </div>

                    <div className="personal-email">
                        <label htmlFor="email">E-Mail: </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        >
                        </input>
                    </div>

                    <div className="personal-phone">
                        <label htmlFor="phone">Phone: </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                        >
                        </input>
                    </div>

                    <div className="personal-address">
                        <label htmlFor="address">Address: </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            required
                        >
                        </input>
                    </div>

                    <button 
                    type="submit" 
                    className="personal-submit">Submit</button>
                </form>
            </div>

            <div className="professional-wrapper">
                <form className="professional-info" action="#" onSubmit={profSubmit}>
                    <h2>Work History</h2>
                    <div className="professional-title">
                        <label htmlFor="title">Job Title: </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            required
                        >
                        </input>
                    </div>

                    <div className="professional-company">
                        <label htmlFor="company">Company Name: </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            required
                        >
                        </input>
                    </div>

                    <div className="professional-description">
                        <label htmlFor="description">Job Description: </label>
                        <textarea
                            type="textArea"
                            rows="5"
                            cols="30"
                            id="description"
                            name="description"
                            required
                        >
                        </textarea>
                    </div>

                    <div className="professional-date">
                        <label htmlFor="startDateProf">Start Date: </label>
                        <input
                            type="date"
                            id="startDateProf"
                            name="startDateProf"
                            required
                        >
                        </input>

                        <label htmlFor="endDateProf">End Date: </label>
                        <input
                            type="date"
                            id="endDateProf"
                            name="endDateProf"
                            required
                        >
                        </input>
                    </div>

                    <button type="submit" className="professional-submit">Submit</button>
                    
                </form>
            {/* <p className="right-side" key={profData}>Name: {profData.professionalTitle}</p>*/}
            </div> 

            <div className="education-wrapper">
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
                    <label htmlFor="startDateEdu">Start Date: </label>
                    <input
                        type="date"
                        id="startDateEdu"
                        name="startDateEdu"
                        required
                        />

                    <label htmlFor="endDateEdu">End Date: </label>
                    <input
                        type="date"
                        id="endDateEdu"
                        name="endDateEdu"
                        required
                        />
                </div>

                <button type="submit" className="education-submit">Submit</button>
            </form>
        </div>
        <div className="cv-wrapper">
            <h1 key={persData}>Name: {persData.name}</h1>
            <h2 key={profData}>Job Title: {profData.title}</h2>
            <h3 key={eduData}>School: {eduData.school}</h3>
        </div>
    </>
    )


    /*return (
        <div className="content">
            <Personal />
            <Professional />
            <Education />
        </div>
    )*/
}

export default Content