import { useContext } from "react";
import withAuth from "../../../common/components/withAuth";
import { ThemeContext } from "../contexts/ThemeContext";

const LoggedIn = (props: any) => {
    const { loggedInUser, setLoggedInUser } = props;
    return (
        <div>
            <span>Logged in as {loggedInUser}</span>&nbsp;&nbsp;
            <button
                className="btn btn-secondary"
                onClick={() => {
                setLoggedInUser("");
                }}
            >
                Logout
            </button>
        </div>
    );
}

const NotLoggedIn = (props: any) => {
    const { setLoggedInUser } = props;
    return (
        <button
            className="btn-secondary"
            onClick={(e) => {
                e.preventDefault();
                const username = window.prompt("Enter Login Name:", "");
                setLoggedInUser(username);
            }}
        >
        Login
        </button>
    );
}

const Header = (props: any) => {
    const { loggedInUser, setLoggedInUser } = props;
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
                        {loggedInUser && loggedInUser.length > 0 
                            ? (
                                <LoggedIn
                                    loggedInUser={loggedInUser}
                                    setLoggedInUser={setLoggedInUser}
                                />
                            ) : (
                                <NotLoggedIn
                                    loggedInUser={loggedInUser}
                                    setLoggedInUser={setLoggedInUser}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withAuth(Header);