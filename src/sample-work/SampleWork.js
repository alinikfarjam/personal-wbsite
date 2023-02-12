import "./samplework.css"
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from "react-router-dom";
import SamplePhotoShop from "./photoShop/SamplePhotoShop";
import SampleMobile from "./mobile/SampleMobile";
import SampleWebsite from "./website/SampleWebsite";

const SampleWork = () => {
    return (
        <section className="SampleWork_container" id="SampleWork">
            <p> نمونه کار</p>
            <section className="SampleWork_container_2">
                <nav >
                    <ul className="SampleWork_nav">
                        <NavLink className={({ isActive }) => isActive ? 'SampleWork_activeLink' : 'Link'} to="/webSite">وب سایت</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'SampleWork_activeLink' : 'Link'} to="/Phtoshop">فتوشاپ</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'SampleWork_activeLink' : 'Link'} to="/flutter">موبایل</NavLink>
                    </ul>
                </nav>
                <div className="SampleWork_container_items">

                    <Routes>
                        <Route path="/Phtoshop" element={<SamplePhotoShop />} />
                        <Route path="*" element={<SampleWebsite />} />
                        <Route path="/flutter" element={<SampleMobile />} />
                    </Routes>
                </div>
            </section>
        </section>
    );
}

export default SampleWork;