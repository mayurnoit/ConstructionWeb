import React from 'react'
import img from '../images/desktop.png';
import eng from '../images/Eng.jpg';
import Coursel from './Coursel.jsx';
import Testimonials from './Testimonials.jsx';
import Card from './Card.jsx';





export default function Home() {

    return (
        <>
                    <div className='container-fluid'>
                <div className='Back row'>
                    <div className='d-flex justify-content-center'>
           
                      <img className='mt-5' src={img} alt="" height={350}/>
            
                    </div>
                </div>
            </div>

            <div className="container-fluid bg mt-5">
                <div className="row " >
                    <div className="col-md-6 d-flex justify-content-center p-5">
                        <div className=' '>
                         <img className="object-fit w-100" src={eng} alt="" height={300}/>
                         </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center p-md-5">
                        <p className=' text-white fw-bold fs-4'>
                        Civil engineers leverage the knowledge and <br />skills of various disciplines to design and <br />build effective structures, machines, and systems <br />that begin in one world and often <br />end up significantly impacting society.</p>
                    </div>
                </div>
            </div>
        

<div>
<Coursel/>

</div>

<div>
    <Testimonials/>
</div>

<div>
    <Card/>
</div>

        </>
    )
}
