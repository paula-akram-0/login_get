import React, {useEffect,useRef,useState} from 'react'
import logoImg from './img/MicrosoftTeams-image@2x.png'
import mapImg from './img/world_map_PNG28@2x.png'
import background from './img/Path 95469.svg'
import Lottie from 'lottie-web'
import './css.css'
export default function Login() {
const Mov = useRef(null)

const[Lott,setLott]=useState(true)
    useEffect(() => {
        setLott(function(Lott){
            if(Lott){
                Lottie.loadAnimation({
                    container:Mov.current,
                    renderer: 'svg',
                    loop: true,
                    autoplay:true,
                    animationData: require('./71003-big-data-centre-isomatric-animation-json.json')
                });
              
            }
            return false
        })
        
    }, [])




    return (
        <>
        
           <div className="row align-items-center vh-100">
               <div className="col-md-6">
                   <div className="container item1">
                   <img  className="logo" src={logoImg} alt="" />
                    <div className="title">
                        <img src={mapImg} alt="" />
                        <div className="title-content">
                            <p className="text-muted">Hello Dear ,</p>
                            <h2 className="fw-border">System Login</h2>
                        </div>
                    </div>
                   </div>

                   <div className="form container">
                       <label htmlFor="UserName">User Name</label>
                       <input type="text" id="UserName" placeholder="Enter User Name" className="form-control w-75 my-2" />
                       <label htmlFor="password">Password</label>
                       <input type="password" id="password" placeholder="Enter password" className="form-control w-75 my-2" />
                       <button className="submit ">Sign In</button>
                   </div>
               </div>






               <div className="col-md-6">
                <div className='over'>
                <img src={background} className="backg"  alt="" />
               <div className="lottieMov" ref={Mov}></div>
                </div>

               </div>
           </div>
        </>
    )
}
