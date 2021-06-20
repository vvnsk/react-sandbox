import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = (props: any) => {
    const {theme} = useContext(ThemeContext as any);
    
    return (
        <div className="padT4 padB4">
            <div className="container mobile-container">
                <div className="d-flex justify-content-between">
                    <img 
                        alt="Home Page" 
                        width="300"
                        src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png"
                    />
                    <div className="light">
                        <h4 className="header-title">Silicon Valley Code Camp</h4>
                    </div>
                    <div className={
                        theme === "light" ? "" : "text-info"
                    }>
                        Hello Mr. Smith &nbsp;&nbsp;
                        <span>
                        <a href="#">sign-out</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;