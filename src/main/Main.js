import "./main.css"
import Aboutme from "../About_me/About_me";
import Skill from "../my_skil/Skil";
import Services from "../service/Services";
import SampleWork from "../sample-work/SampleWork";
import ContactUs from "../Contactus/ContactUs";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Main = () => {
    return (

        <main className="Main_Container">
            <figure>
                <div className="Main_image_container">
                </div>
            </figure>
            <Aboutme />

            <Skill />
            <Services />
            <SampleWork />
            <ContactUs />
        </main>
    );
}

export default Main;