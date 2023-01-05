import React from "react";
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer(){
    return (
        <footer>
            <div className="footer-container">
            {/* {logo and about esquare} */}
            <div className="footer-company">
                <div>
                    <div className='img-name'> 
                        <img 
                    className="logo-img" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wwgdAltsp9IF6-2lfdE2ZEW_wJ1Kpb8D1Q&usqp=CAU"
                />
                <h1>E-Square</h1>
                </div>              
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

            {/* Links */}
            <div className='footer-links'>
                <h2> Links</h2>
                <ul>
                <li> <a href="#">Services</a>  </li>
                <li> <a href="#">About us</a>  </li>
                <li> <a href="#">Contact us</a>  </li>
                </ul>       
            </div>


            {/* address and contact details */}
            <div className="footer-contact">
                <h2>Contact Us</h2>
                <p>Hinjewadi Phase 1, Pune, Maharasthra</p>
                <p>8999828044</p> <p>9552043123</p>
                <p>esquare@gmail.com</p>       
            </div>
              
        </div>
        </footer>
    )};
