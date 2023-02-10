import "./aboutme.css";
import logo from "../assets/image/logo.png"

const Aboutme = () => {
    return (

        <section className="Aboutme_container" id="Aboutme">
            <p>درباره من</p>
            <section className="Aboutme_detail_container">
                <div className="Aboutme_img_container">
                    <figure>
                        <img src={logo} />
                    </figure>
                </div>
                <div className="Aboutme_Text_container">
                    <div>
                        <p className="Hello">سلام !</p>
                    </div>
                    <div>
                        <p>
                            من علی نیک فرجام هستم؛ توسعه دهنده وب و گرافیست. من در طراحی وب سایت، پیاده سازی و سفارشی سازی آن تجربه بسیاری دارم و همچنین آشنایی و تسلط کاملی روی فتوشاپ دارم.
                        </p>
                    </div>
                    <div className="Aboutme_information">
                        <div>
                            <p>
                                <span>نام : </span>
                                <span>علی نیک فرجام</span>
                            </p>
                            <p>
                                <span>شماره تماس : </span>
                                <span>09104890609</span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <span>موقعیت :</span>
                                <span> ایران ، سمنان</span>
                            </p>
                            <p>
                                <span>ایمیل :</span>
                                <span> alinikfarjam344@gmail.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    );
}

export default Aboutme;