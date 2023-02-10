import "./services.css"
import { FaComment } from 'react-icons/fa'
import { FaCheckSquare } from 'react-icons/fa'
import { FaGlobe } from 'react-icons/fa'
import { FaVial } from 'react-icons/fa'
import { FaShapes } from 'react-icons/fa'
import { FaMedapps } from 'react-icons/fa'

const Services = () => {
    return (
        <section className="Services_container" id="Services">
            <p>خدمات</p>
            <section className="Services_item_container">
                {Items(<FaGlobe className="Services_icon" />, "توسعه")}
                {Items(<FaCheckSquare className="Services_icon" />, "طراحی")}
                {Items(<FaVial className="Services_icon" />, "تبلیغات")}
                {Items(<FaShapes className="Services_icon" />, "طراحی سایت")}
                {Items(<FaMedapps className="Services_icon" />, "ادیت")}
                {Items(<FaComment className="Services_icon" />, "پشتیبانی")}
            </section>
        </section>
    );
}

export default Services;

function Items(icontag, title) {
    return (
        <div className="Services_item">
            {icontag}
            <p>{title}</p>
        </div>
    )
}