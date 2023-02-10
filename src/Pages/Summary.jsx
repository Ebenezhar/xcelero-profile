import jsPDF from 'jspdf';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Model1 from '../components/models/Model1';
import Model2 from '../components/models/Model2';
import Model3 from '../components/models/Model3';
import UserContext from '../Context/UserContext';

function Summary() {
    const userContextData = useContext(UserContext);
    console.log(userContextData.profile);
    const [model, setModel] = useState(<Model1 />)
    let navigate = useNavigate();


    let handleModel = (modelNum) => {
        if (modelNum == 1) {
            setModel(<Model1 />)
        } else if (modelNum == 2) {
            setModel(<Model2 />)
        }
        else if (modelNum == 3) {
            setModel(<Model3 />)
        }
    }

    let generatePdf = () => {
        let doc = new jsPDF("p", "pt", "a4");
        doc.html(document.querySelector("#page"), {
            callback: function (pdf) {
                pdf.save(`${userContextData.profile.firstName} Profile.pdf`)
            }
        })
    }

    let navigateHome = () => {
        navigate('/')
        window.location.reload()
    }

    let editInfo = () => {
        navigate('/edit')
    }

    return (
        <div className='p-2'>
            <h3>Summary of your Profile</h3>
            <div className='text-end'>
                <button onClick={navigateHome} className='btn btn-primary m-2'>Home <i className="fa-solid fa-house-chimney"></i></button>
                <button onClick={editInfo} className='btn btn-info m-2'>Edit <i class="fa-solid fa-user-pen"></i></button>
                <button onClick={generatePdf} className='btn btn-success m-2'>Generate PDF <i className="fa-solid fa-file-pdf"></i></button>
            </div>
            <div style={{ "background-color": "#DAF7A6" }} className='col m-2'>
                <button onClick={() => handleModel(1)} className='m-1 btn btn-light'>Model 1</button>
                <button onClick={() => handleModel(2)} className='m-1 btn btn-light'>Model 2</button>
                <button onClick={() => handleModel(3)} className='m-1 btn btn-light'>Model 3</button>
            </div>
            <div style={{ "background-color": "white" }} id="page">
                {model}
            </div>

        </div >
    )
}

export default Summary