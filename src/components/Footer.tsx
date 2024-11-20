import React from "react";
import * as Icons from '../../public/icons'
import * as Images from '../../public/images'


const Footer = () =>{
    return (
        <div aria-label="footer" className="footer">
                <div className="footer-container">
                <div className="saurozen">
                    <h1 className="footer-logo">SAUROZEN</h1>
                    <p className="about">At SAUROZER, we transform discarded ocean plastics into cutting-edge, eco-friendly sunglasses. Style meets sustainability in every pair — wear the change, save the planet.</p>
                    <div className="link-buttons">
                    <button className="link-btn">
                        <img
                        src={Icons.twitter.src}
                        alt="Twitter Icon"
                        className="link-icon"
                        />
                    </button>
                    <button className="link-btn">
                        <img
                        src={Icons.facebook.src}
                        alt="Facebook Icon"
                        className="link-icon"
                        />
                    </button>
                    <button className="link-btn">
                        <img
                        src={Icons.instagram.src}
                        alt="Instagram Icon"
                        className="link-icon"
                        />
                    </button>
                    <button className="link-btn">
                        <img
                        src={Icons.github.src}
                        alt="Github Icon"
                        className="link-icon"
                        />
                    </button>
                    </div>
                </div>
                <div className="footlinks">
                    <div className="footitle">COMPANY
                    <button className="footlink">About</button>
                    <button className="footlink">Features</button>
                    <button className="footlink">Work</button>
                    <button className="footlink">Career</button>
                    </div>
                    <div className="footitle">HELP
                    <button className="footlink">Customer Support</button>
                    <button className="footlink">Delivery Details</button>
                    <button className="footlink">Terms & Conditions</button>
                    <button className="footlink">Privacy Policy</button>
                    </div>
                    <div className="footitle">FAQ
                    <button className="footlink">Account</button>
                    <button className="footlink">Manage Deliveries</button>
                    <button className="footlink">Orders</button>
                    <button className="footlink">Payment</button>
                    </div>
                    <div className="footitle">RESOURCES
                    <button className="footlink">Sustainability</button>
                    <button className="footlink">Upcycling</button>
                    <button className="footlink">Blog</button>
                    <button className="footlink">Playlist</button>
                    </div>
                </div>
                </div>
                <div className="line"></div>
                <div className="bottomfooter">
                <div className="rights">SAUROZER © 2024, All Rights Reserved</div>
                <div className="payments">
                    <div className="whitebox">
                    <img src={Images.visa.src} alt="Visa" className='payment-icon'/>        
                    </div>
                    <div className="whitebox">
                    <img src={Images.mastercard.src} alt="Mastercard" className='payment-icon'/>        
                    </div>
                    <div className="whitebox">
                    <img src={Images.apple.src} alt="Apple" className='payment-icon'/>        
                    </div>
                    <div className="whitebox">
                    <img src={Images.google.src} alt="Google" className='google-icon'/>        
                    </div>
                </div>
                </div>
        </div>
    );
}

export default Footer;