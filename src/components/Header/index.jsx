import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import Navigation from "./Navigation";
import "./index.scss"

const index = () => {
    return (
        <header>
            <HeaderTop />
            <div className="container mx-auto">
                <HeaderMiddle />
                <Navigation />
            </div>
        </header>
    );
};

export default index;
