function Professional() {
    return (
        <div className="professional-info">
            <form action="#">
                <label htmlFor="professional-title">Job Title: </label>
                <input
                    type="text"
                    id="professional-title"
                    name="professional-title"
                    required
                    placeholder="Web Developer"
                >
                </input>

                <label htmlFor="professional-company">Company Name: </label>
                <input
                    type="text"
                    id="professional-company"
                    name="professional-company"
                    required
                >
                </input>

                <label htmlFor="professional-description">Job Description: </label>
                <input
                    type="textArea"
                    id="professional-description"
                    name="professional-description"
                    required
                >
                </input>

                <label htmlFor="professional-start">Start Date: </label>
                <input
                    type="date"
                    id="personal-start"
                    name="personal-start"
                    required
                >
                </input>

                <label htmlFor="professional-end">End Date: </label>
                <input
                    type="date"
                    id="professional-end"
                    name="professional-end"
                    required
                >
                </input>
                <button type="submit" className="professional-submit"></button>
            </form>
        </div>
    )
}

export default Professional