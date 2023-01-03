import React from "react";
import './Footer.css'

export default function Footer(){
    return (
        <div className="footer-container">
            {/* {logo and about esquare} */}
            <div className="company">
                <div>
                 <img className="logoimg" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wwgdAltsp9IF6-2lfdE2ZEW_wJ1Kpb8D1Q&usqp=CAU"
                    // style={{height: 75, width: 75}}
                />
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fuga, 
                    beatae voluptas, dicta, provident id aliquam magni repudiandae accusamus 
                    sed architecto ab assumenda repellendus perspiciatis veniam vitae sit atque praesentium?
                </p>
                </div>
                
                <div className = "social-icons">
                    <i className="fa fa-brands fa-facebook"></i>
                    <i className="fa fa-brands fa-instagram"></i>
                    <i className="fa fa-brands fa-twitter"></i>
                    <i className="fa fa-brands fa-linkedin"></i>
                </div>
            </div>

            {/* address and contact details */}
            <div className="contact">
                <div>
                    <p>Hinjewadi Phase 1, Pune, Maharasthra</p>
                    <p>8999828044</p> <p>9552043123</p>
                    <p>esquare@gmail.com</p>
                </div>
                <div>
                    Copyrights 2020 <span>E-square</span> All rights Reserved.
                </div>
            </div>
           
            
        </div>
    )};
