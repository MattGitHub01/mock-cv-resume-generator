function Personal({ onSubmit }) {

    return (
        <div>
            <form className="personal-info" action="#" onSubmit={onSubmit}>
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
    )
}

export default Personal