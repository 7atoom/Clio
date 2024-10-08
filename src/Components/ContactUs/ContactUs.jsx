import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactUs.css";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
    return <>

        <div className="contact my-5">
            <div className="container">
                
                <div className="row mb-5">

                    <div className="col-lg-7 fs-4">
                        <h2 className="mb-4 fs-1">GET IN TOUCH</h2>

                        <p style={{lineHeight: "1.3"}} className="fs-3">
                            We're here to assist you every step of the way. Whether you 
                            have questions about our products, need technical support, 
                            or simply want to say hello, don’t hesitate to reach out.
                            Our dedicated team at Clio is ready to provide personalized 
                            assistance and expert advice
                        </p>
                    </div>

                    <div className="col-lg-5 mt-5 contact-form">
                        <form onSubmit={e => e.preventDefault()}>
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Email" />
                            <textarea placeholder="Message"></textarea>
                            <button>SEND</button>
                        </form>
                    </div>
                </div>

                <div className="py-5"></div>

                <div className="row gy-5">

                    <div className="col-lg-4">
                        <div className="gap-3 h-100 bg-main-2 p-3 text-main d-flex align-items-center"> 
                            <FontAwesomeIcon style={ { fontSize: "60px" } } className="mx-3" icon={faEnvelope} /> 
                            <p className="m-0 fs-3" style={ { wordBreak: "break-all" } } > info@cliogems.com </p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="gap-3 h-100 bg-main-2 p-3 text-main d-flex align-items-center">
                            <FontAwesomeIcon style={ { fontSize: "60px" } } className="mx-3" icon={faPhone} />
                            <p className="m-0 fs-3"> +1 (555) 123-4567</p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="gap-3 h-100 bg-main-2 p-3 text-main d-flex align-items-center">
                            <FontAwesomeIcon style={ { fontSize: "60px" } } className="mx-3" icon={faLocationDot} />
                            <p className="m-0 fs-3"> 123 Diamound Strret, Luxe City, Jewelania </p>
                        </div>
                    </div>
                </div>

                <div className="py-3"></div>

                <div className="row mt-5 gy-5">

                    <div className="col-lg-3">
                        <div className="schedule">
                            <div className="text-center">
                                <h5>Saturday to Thursday</h5>
                                <p>10:00 am - 10:00 pm</p>
                            </div>

                            <div className="text-center mt-5">
                                <p className="mb-2">Fridays</p>
                                <p className="mb-0">Days off</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 offset-lg-1">
                        <div>
                            <h2 className="fs-1 mb-3">Working Days</h2>
                            <p className="fs-4">
                                Feel free to give us a call, or send us a message using the form up 
                                there. Your satisfaction is our priority, and we look forward to 
                                connecting with you to ensure your needs are met seamlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </>
}

export default ContactUs;
