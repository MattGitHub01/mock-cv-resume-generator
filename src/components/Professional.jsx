function Professional({ onSubmit }) {

    return (
        <div>
            <form className="professional-info" action="#" onSubmit={onSubmit}>
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
                    <label htmlFor="pStart">Start Date: </label>
                    <input
                        type="date"
                        id="pStart"
                        name="pStart"
                        required
                    >
                    </input>

                    <label htmlFor="pEnd">End Date: </label>
                    <input
                        type="date"
                        id="pEnd"
                        name="pEnd"
                        required
                    >
                    </input>
                </div>
                <button type="submit" className="professional-submit">Submit</button>
            </form>
        </div> 
    )
}

export default Professional