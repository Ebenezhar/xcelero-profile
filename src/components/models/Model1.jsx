import React, { useContext } from 'react'
import UserContext from '../../Context/UserContext';

function Model1() {
    const userContextData = useContext(UserContext);
    console.log(userContextData.profile);
    return (
        <div style={{ height: "830px", width: "600px" }} id="model1" className='row '>
            <div style={{ width: "250px" }} className=' bg-secondary p-2 px-5 pt-5 m-0'>
                <h5>Contact Details</h5>
                <h6 className='px-1'>Country</h6>
                <p className='px-2'>{userContextData.profile && userContextData.profile.country}</p>
                <h6 className='px-1'>Email: </h6>
                <p className='px-2'>{userContextData.profile && userContextData.profile.email}</p>
            </div>
            <div style={{ width: "350px", height: "100%" }} className='col p-2 px-5 pt-5 m-0'>
                <span style={{ fontSize: "25px", "font-weight": "bold" }}>{userContextData.profile && userContextData.profile.firstName} </span>
                <span style={{ fontSize: "25px", "font-weight": "bold" }}>{userContextData.profile && userContextData.profile.secondName}</span>
                <h5 className='mt-2'>Personal Details</h5>
                <p className='px-2'><strong>Age: </strong>{userContextData.profile && userContextData.profile.age}</p>
                <h6>------</h6>
                <h5>Experience</h5>
                <p className='px-2'><strong>In Years: </strong>{userContextData.profile && userContextData.profile.yearsOfExp}</p>
                <p className='px-2'><strong>Company Name: </strong>{userContextData.profile && userContextData.profile.company}</p>
                <h6>------</h6>
                <h5>Department</h5>
                <p className='px-2'><strong>Department: </strong>{userContextData.profile && userContextData.profile.department}</p>
                <h5>Skills: </h5>
                <ul>
                    {userContextData.profile.skills && userContextData.profile.skills.map(skill => <li>{skill}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Model1