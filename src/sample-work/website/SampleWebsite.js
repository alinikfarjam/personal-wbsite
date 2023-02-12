import shop from "../../assets/image/shop.JPG"
import todo from "../../assets/image/todo.JPG"
import "../photoShop/SamplePhotoShop";

const SampleWebsite = () => {
    return (
        <section className="SamplePhotoShop_container">
            <a href="https://effervescent-naiad-13647d.netlify.app">
                <section className="SamplePhotoShop_Item">
                    <div>
                        <img src={todo} />
                    </div>
                </section>
            </a>

            <a href="https://remarkable-axolotl-f3bd67.netlify.app">
                <section className="SamplePhotoShop_Item">
                    <div>
                        <img src={shop} />
                    </div>
                </section>
            </a>
        </section>
    );
}

export default SampleWebsite;