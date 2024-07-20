function PersonalCv ({ persData }) {

    return (
        <div className="personal-content">
            <h3 className="pe-name" key={persData}>{persData.name}</h3>
            <span className="pe-email" key={persData}>{persData.email}</span>
            <span className="pe-phone" key={persData}>{persData.phone}</span>
            <span className="pe-address" key={persData}>{persData.address}</span>
        </div>
    )
}

export default PersonalCv