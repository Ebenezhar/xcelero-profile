import React, { useContext } from 'react'
import UserContext from '../../Context/UserContext';

function Model2() {
    const nameFont = {
        "font-size": "40px",
        "font-weight": "bold"
    }
    const userContextData = useContext(UserContext);
    console.log(userContextData.profile);
    return (
        <div style={{ height: "830px", width: "600px" }} id="model2" className='p-2'>
            <header className='border-bottom d-flex justify-content-center'>
                <span style={nameFont} id='name'>{userContextData.profile && userContextData.profile.firstName} </span>
                <span>&nbsp;</span>
                <span style={nameFont} id='name'>{userContextData.profile && userContextData.profile.secondName}</span>
            </header>
            <section className='p-2'>
                <div className='p-2 border-bottom' id='other details'>
                    <p><strong>Email: </strong>{userContextData.profile && userContextData.profile.email}</p>
                    <p><strong>Country: </strong>{userContextData.profile && userContextData.profile.country}</p>
                    <p><strong>Date of Birth: </strong>{userContextData.profile && userContextData.profile.dateOfBirth}</p>
                    <p><strong>Department: </strong>{userContextData.profile && userContextData.profile.department}</p>
                </div>
                <div className='py-2 border-bottom' id="experience">
                    <h5>Experience:</h5>
                    <div id='content' className='p-2'>
                        <p><strong>Years of Experience: </strong>{userContextData.profile && userContextData.profile.yearsOfExp}</p>
                        <p><strong>Company: </strong>{userContextData.profile && userContextData.profile.company}</p>
                    </div>
                </div>
                <div className='py-2 border-bottom' id="skills">
                    <h5>Additional Skills:</h5>
                    <ul id='content'>
                        {userContextData.profile.skills && userContextData.profile.skills.map(skill => <li>{skill}</li>)}
                    </ul>
                </div>
            </section>

        </div>
    )
}

export default Model2