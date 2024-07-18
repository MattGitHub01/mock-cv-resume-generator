import { useState } from 'react';

function Personal() {
    const [persData, setPersData] = useState('test');

    const formSubmit = (e) => {
        e.preventDefault();
        var data = new FormData(e.target);
        let formObject = Object.fromEntries(data.entries());
        
        console.table(formObject);
        setPersData(formObject);
      }
    return (
        <>
            <div>
            <h1 key={persData.personalName}>TEST: {persData.personalName}</h1>
                <form className="personal-info" action="#" onSubmit={formSubmit}>
                    <h2>Personal Information</h2>
                    <div className="personalName">
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
                        <label htmlFor="personal-email">E-Mail: </label>
                        <input
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
        </>
    )
}

export default Personal