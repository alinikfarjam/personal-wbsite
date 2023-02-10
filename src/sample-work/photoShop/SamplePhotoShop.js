import "./samplePhotoShop.css"
import logo from "../../assets/image/logo.png"

const SamplePhotoShop = () => {
    return (
        <section className="SamplePhotoShop_container">
            <section className="SamplePhotoShop_Item">
                <div>
                    <img src={logo} />
                </div>
            </section>
            <section className="SamplePhotoShop_Item">
                <div>
                    <img src={logo} />
                </div>
            </section>
            <section className="SamplePhotoShop_Item">
                <div>
                    <img src={logo} />
                </div>
            </section>
        </section>
    );
}

export default SamplePhotoShop;