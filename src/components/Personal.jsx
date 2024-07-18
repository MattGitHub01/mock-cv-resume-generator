function Personal(props) {
    const formSubmit = (event) => {
        event.preventDefault();
        var data = new FormData(event.target);
        let formObject = Object.fromEntries(data.entries());
        console.log(formObject);
      }

    return (
        <div>
            <form className="personal-info" action="#" onSubmit={formSubmit}>
                <h2>Personal Information</h2>
                <div className="personal-name">
                    <label htmlFor="personal-name">Name: </label>
                    <input
                        value={props.input}
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
                        value={props.email}
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
                        value={props.phone}
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
                        value={props.address}
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