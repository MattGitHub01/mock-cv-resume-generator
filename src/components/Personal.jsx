function Personal(props) {
    const personal = {
        name: props.name,
        email: props.email,
        phone: props.phone,
        address: props.address
    };

    return (
        <div>
            <form className="personal-info" action="#">
                <h2>Personal Information</h2>
                <div className="personal-name">
                    <label htmlFor="personal-name">Name: </label>
                    <input
                        value={personal.input}
                        type="text"
                        id="personal-name"
                        name="personal-name"
                        required
                    >
                    </input>
                </div>

                <div className="personal-email">
                    <label htmlFor="personal-email">E-Mail: </label>
                    <input
                        value={personal.email}
                        type="email"
                        id="personal-email"
                        name="personal-email"
                        required
                    >
                    </input>
                </div>

                <div className="personal-phone">
                    <label htmlFor="personal-phone">Phone: </label>
                    <input
                        value={personal.phone}
                        type="tel"
                        id="personal-phone"
                        name="personal-phone"
                        required
                    >
                    </input>
                </div>

                <div className="personal-address">
                    <label htmlFor="personal-address">Address: </label>
                    <input
                        value={personal.address}
                        type="text"
                        id="personal-address"
                        name="personal-address"
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