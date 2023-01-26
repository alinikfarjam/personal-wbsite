import "./sidebar.css"
import logo from "../assets/image/logo.png"
const Sidebar = () => {
    return (
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
                        <li>خانه</li>
                        <li>درباره من</li>
                        <li>خدمات</li>
                        <li>نمونه کار </li>
                        <li>ارتباط با من</li>

                    </ul>
                </nav>
            </section>
            <section className="Sidebar_bottom_section">

            </section>
        </aside>
    );
}

export default Sidebar;