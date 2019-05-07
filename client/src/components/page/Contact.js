import React from 'react';
import ru from "../../dictionary";

const Contact = () => {
    return (
        <div className='wrapper'>
            <div className="contact1">
                <div className="container-contact1">
                    <form className="contact1-form validate-form">
                        <h2 className="contact1-form-title">
                            {ru.TITLE.CONTACT}
                        </h2>
                        <div className="form-control" data-validate="Name is required">
                            <input className="input1" type="text" name="name" placeholder="Name"/>
                            <span className="shadow-input1"></span>
                        </div>

                        <div className="form-control" data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input1" type="text" name="email" placeholder="Email"/>
                            <span className="shadow-input1"></span>
                        </div>

                        <div className="form-control" data-validate="Subject is required">
                            <input className="input1" type="text" name="subject" placeholder="Subject"/>
                            <span className="shadow-input1"></span>
                        </div>

                        <div className="form-control" data-validate="Message is required">
                            <textarea className="input1" name="message" placeholder="Message"></textarea>
                            <span className="shadow-input1"></span>
                        </div>

                        <div className="form-control">
                            <button className="contact1-form-btn">
						<span>
                            {ru.SEND}
							<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
						</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;