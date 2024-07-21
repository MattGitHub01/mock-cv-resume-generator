import Personal from './Personal.jsx'
import PersonalCv from './PersonalCv.jsx'
import Professional from './Professional.jsx'
import ProfessionalCv from './ProfessionalCv.jsx'
import Education from './Education.jsx'
import EducationCv from './EducationCv.jsx'
import { useState } from "react";

function Content() {
    const [persData, setPersData] = useState('');
    const [profData, setProfData] = useState('');
    const [eduData, setEduData] = useState('');

    const persSubmit = (e) => {
        e.preventDefault();
        let peData = new FormData(e.target);
        let persObject = Object.fromEntries(peData.entries());
        setPersData(persObject);
    }

    const profSubmit = (e) => {
        e.preventDefault();
        let prData = new FormData(e.target);
        let profObject = Object.fromEntries(prData.entries());
        setProfData(profObject);
    }

    const eduSubmit = (e) => {
        e.preventDefault();
        let eData = new FormData(e.target);
        let eduObject = Object.fromEntries(eData.entries());
        setEduData(eduObject);
    }

    return (
        <>
            <div className="content">
                <Personal onSubmit={persSubmit} />
                <Professional onSubmit={profSubmit} />
                <Education onSubmit={eduSubmit} />
            </div>
            <div className="cv-wrapper">
                <PersonalCv persData={persData} />
                <ProfessionalCv profData={profData} />
                <EducationCv eduData={eduData} />
            </div>
        </>
    )
}

export default Content