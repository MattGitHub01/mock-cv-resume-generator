function Personal() {
    return (
        <div className="personal-info">
            <form action="#">
                <label htmlFor="personal-name">Name: </label>
                <input
                    type="text"
                    id="personal-name"
                    name="personal-name"
                    required
                    placeholder="John Doe"
                >
                </input>

                <label htmlFor="personal-email">E-Mail: </label>
                <input
                    type="email"
                    id="personal-email"
                    name="personal-email"
                    required
                    placeholder="example@example.com"
                >
                </input>

                <label htmlFor="personal-phone">Phone: </label>
                <input
                    type="tel"
                    id="personal-phone"
                    name="personal-phone"
                    required
                    placeholder="555-555-5555"
                >
                </input>

                <label htmlFor="personal-address">Address: </label>
                <input
                    type="text"
                    id="personal-address"
                    name="personal-address"
                    required
                    placeholder="123 Street #5 City, NY 12345"
                >
                </input>
                <button type="submit" className="personal-submit">Submit</button>
            </form>
        </div>
    )
}

export default Personal