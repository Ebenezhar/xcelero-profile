import React, { useContext } from 'react'
import UserContext from '../../Context/UserContext';

function Model3() {
    const nameFont = {
        "font-size": "40px",
        "font-weight": "bold"
    }
    const userContextData = useContext(UserContext);
    console.log(userContextData.profile);
    return (
        <div style={{ height: "830px", width: "600px", }} id="model2" className='p-2'>
            <header style={{ "height": "80px", }} className='text-light bg-dark border-bottom d-flex justify-content-center'>
                <span style={nameFont} id='name'>{userContextData.profile && userContextData.profile.firstName} </span>
                <span>&nbsp;</span>
                <span style={nameFont} id='name'>{userContextData.profile && userContextData.profile.secondName}</span>

            </header>
            <div className='text-light bg-dark px-2 d-flex justify-content-between' id='contact'>
                <span><strong>Email: </strong>{userContextData.profile && userContextData.profile.email}</span>
                <span><strong>Country: </strong>{userContextData.profile && userContextData.profile.country}</span>
            </div>
            <div style={{ "height": "100px", }} id="content" className="d-flex flex-column px-2 mt-2">
                <div className='row px-1'>
                    <div className='col-3 py-1 text-light bg-dark'><span>Department</span></div>
                    <div className='col-8 py-1'> <span>{userContextData.profile && userContextData.profile.department}</span></div>
                </div>
                <div className='row px-1 mt-2'>
                    <h5>Experience</h5>
                    <div className='col-3 py-1 text-light bg-dark'><span>In Years</span></div>
                    <div className='col-8 py-1'> <span>{userContextData.profile && userContextData.profile.yearsOfExp}</span></div>
                    <div className='col-3 py-1 text-light bg-dark'><span>Company</span></div>
                    <div className='col-8 py-1'> <span>{userContextData.profile && userContextData.profile.company}</span></div>
                </div>
                <div className='row px-1 mt-2'>
                    <div className='col-3 py-1 text-light bg-dark'><span>Skills</span></div>
                    <div className='col-8 py-1'> <ul id='content'>
                        {userContextData.profile.skills && userContextData.profile.skills.map(skill => <li>{skill}</li>)}
                    </ul></div>

                </div>


            </div>


        </div>
    )
}

export default Model3