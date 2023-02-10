import './contactus.css'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'


const ContactUs = () => {
    return (
        <section className="Contactus_container" id="Contactus">
            <p>ارتباط با من </p>
            <section className="Contactus_container_items">
                <div className="Contactus_container_item">
                    <div className="Container2">
                        <FaPhoneAlt className="Contactus_icon" />
                        <p>تلفن</p>
                    </div>
                    <div className="Contactus_text">
                        <p>09104890609</p>
                    </div>
                </div>
                <div className="Contactus_container_item">
                    <div className="Container2">
                        <FaEnvelope className="Contactus_icon" />
                        <p>ایمیل</p>
                    </div>
                    <div className="Contactus_text">
                        <p>alinikfarjam344@gmail.com</p>
                    </div>
                </div>
                <div className="Contactus_container_item">
                    <div className="Container2">
                        <FaTelegram className="Contactus_icon" />
                        <p>تلگرام</p>
                    </div>
                    <div className="Contactus_text">
                        <p>@nikoali</p>
                    </div>
                </div>
                <div className="Contactus_container_item">
                    <div className="Container2">
                        <FaMapMarkerAlt className="Contactus_icon" />
                        <p>موقعیت </p>
                    </div>
                    <div className="Contactus_text">
                        <p>استان سمنان</p>
                    </div>

                </div>
            </section>
        </section>
    );
}

export default ContactUs;