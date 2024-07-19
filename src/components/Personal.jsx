import { useState } from 'react'

function Personal() {
    const [persData, setPersData] = useState('test');

    const persSubmit = (e) => {
        e.preventDefault();
        var data = new FormData(e.target);
        let persObject = Object.fromEntries(data.entries());
        setPersData(persObject);
      }

    return (
        <div>
            <form className="personal-info" action="#" onSubmit={persSubmit}>
                <h2>Personal Information</h2>
                <div className="personal-name">
                    <label htmlFor="personalName">Name: </label>
                    <input
                        type="text"
                        id="personalName"
                        name="personalName"
                        required
                    >
                    </input>
                </div>

                <div className="personal-email">
                    <label htmlFor="personalEmail">E-Mail: </label>
                    <input
                        type="email"
                        id="personalEmail"
                        name="personalEmail"
                        required
                    >
                    </input>
                </div>

                <div className="personal-phone">
                    <label htmlFor="personalPhone">Phone: </label>
                    <input
                        type="tel"
                        id="personalPhone"
                        name="personalPhone"
                        required
                    >
                    </input>
                </div>

                <div className="personal-address">
                    <label htmlFor="personalAddress">Address: </label>
                    <input
                        type="text"
                        id="personalAddress"
                        name="personalAddress"
                        required
                    >
                    </input>
                </div>

                <button 
                type="submit" 
                className="personal-submit">Submit</button>
            </form>
            {/* 
                Below: How to re-render based on user input form data 
                <p className="right-side" key={persData}>Name: {persData.personalName}</p>
            */}
        </div>
    )
}

export default Personal