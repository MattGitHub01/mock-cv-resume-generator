import { useState } from 'react'

function Professional() {

    const [profData, setProfData] = useState('test');

    const profSubmit = (e) => {
        e.preventDefault();
        var data = new FormData(e.target);
        let profObject = Object.fromEntries(data.entries());
        setProfData(profObject);
      }

    return (
        <div>
            <form className="professional-info" action="#" onSubmit={profSubmit}>
                <h2>Work History</h2>
                <div className="professional-title">
                    <label htmlFor="professionalTitle">Job Title: </label>
                    <input
                        type="text"
                        id="professionalTitle"
                        name="professionalTitle"
                        required
                    >
                    </input>
                </div>

                <div className="professional-company">
                    <label htmlFor="professionalCompany">Company Name: </label>
                    <input
                        type="text"
                        id="professionalCompany"
                        name="professionalCompany"
                        required
                    >
                    </input>
                </div>

                <div className="professional-description">
                    <label htmlFor="professionalDescription">Job Description: </label>
                    <textarea
                        type="textArea"
                        rows="5"
                        cols="30"
                        id="professionalDescription"
                        name="professionalDescription"
                        required
                    >
                    </textarea>
                </div>

                <div className="professional-date">
                    <label htmlFor="professionalStart">Start Date: </label>
                    <input
                        type="date"
                        id="professionalEnd"
                        name="professionalEnd"
                        required
                    >
                    </input>

                    <label htmlFor="professionalEnd">End Date: </label>
                    <input
                        type="date"
                        id="professionalEnd"
                        name="professionalEnd"
                        required
                    >
                    </input>
                </div>

                <button type="submit" className="professional-submit">Submit</button>
                
            </form>
           {/* <p className="right-side" key={profData}>Name: {profData.professionalTitle}</p>*/}
        </div> 
    )
}

export default Professional