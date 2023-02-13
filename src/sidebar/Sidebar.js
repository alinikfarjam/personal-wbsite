import "./sidebar.css"
import logo from "../assets/image/logo.png"
import { FaInstagram } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
const Sidebar = () => {

    return (
        <div className="Sidebar">
            <aside className="Sidebar_Container">

                <section className="Sidebar_up_section">
                    <figure>
                        <img src={logo} />
                    </figure>
                    <div>
                        <p>علی نیک فرجام</p>
                        <p> برنامه نویس ، طراح سایت ، گرافیست و ...</p>
                    </div>
                </section>
                <section className="Sidebar_mid_section">
                    <nav>
                        <ul>
                            <li><a>خانه</a></li>
                            <li><a href="#Aboutme">درباره من</a></li>
                            <li><a href="#Services">خدمات</a></li>
                            <li><a href="#SampleWork">نمونه کار</a> </li>
                            <li><a href="#Contactus">ارتباط با من</a></li>

                        </ul>
                    </nav>
                </section>
                <section className="Sidebar_bottom_section">
                    <div>
                        <a href=""><FaInstagram className="Sidebar_icon"></FaInstagram></a>

                    </div>
                    <div>
                        <a href=""><FaTelegram className="Sidebar_icon"></FaTelegram></a>
                    </div>
                    <div>
                        <a href="https://github.com/alinikfarjam"><FaGithub className="Sidebar_icon"></FaGithub></a>
                    </div>

                </section>
            </aside>
        </div>
    );
}

export default Sidebar;