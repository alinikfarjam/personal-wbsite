import Sidebar from "../sidebar/Sidebar";
import Main from "../main/Main";
import "./layout.css"
const Layout = () => {
    return (
        <section className="Layout_Container">
            <Sidebar />
            <Main />
        </section>
    );
}

export default Layout;