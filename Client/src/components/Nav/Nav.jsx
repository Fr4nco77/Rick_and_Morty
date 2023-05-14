import SearchBar from "../SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";
import styles from "./Nav.module.css"

export default function Nav(props) {
    const { pathname } = useLocation();
    return(
        <div className={styles.container}> 
            <div className={styles.buttons}>
                <Link to= "/home"><button>Home</button></Link>
                <Link to="/favorites"><button>Deposit</button></Link>
                <Link to = "/"><button>Leave</button></Link> 
            </div>
            {
                pathname === "/home" && <SearchBar id={styles.bar} onSearch={props.onSearch}/>
            }
        </div>
    )
}