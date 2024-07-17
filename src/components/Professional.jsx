function Professional(props) {
    const professional = {
        title: props.title,
        company: props.company,
        description: props.description,
        startP: props.startP,
        endP: props.endP
    };

    return (
        <div>
            <form className="professional-info" action="#">
                <h2>Work History</h2>
                <div className="professional-title">
                    <label htmlFor="professional-title">Job Title: </label>
                    <input
                        value={professional.title}
                        type="text"
                        id="professional-title"
                        name="professional-title"
                        required
                    >
                    </input>
                </div>

                <div className="professional-company">
                    <label htmlFor="professional-company">Company Name: </label>
                    <input
                        value={professional.company}
                        type="text"
                        id="professional-company"
                        name="professional-company"
                        required
                    >
                    </input>
                </div>

                <div className="professional-description">
                    <label htmlFor="professional-description">Job Description: </label>
                    <input
                        value={professional.description}
                        type="textArea"
                        id="professional-description"
                        name="professional-description"
                        required
                    >
                    </input>
                </div>

                <div className="professional-date">
                    <label htmlFor="professional-start">Start Date: </label>
                    <input
                        value={professional.startP}
                        type="date"
                        id="professional-start"
                        name="professional-start"
                        required
                    >
                    </input>

                    <label htmlFor="professional-end">End Date: </label>
                    <input
                        value={professional.endP}
                        type="date"
                        id="professional-end"
                        name="professional-end"
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