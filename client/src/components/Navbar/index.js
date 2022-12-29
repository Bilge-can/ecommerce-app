import styles from "./styles.module.css";
import React from   "react";
import {Link} from "react-router-dom";
import { Button } from '@chakra-ui/react'

function Navbar(){
    return(
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className="logo">
                    <Link to="/">eCommerce</Link>
                </div>

                <ul className={styles.left}>
                    <li>
                        <Link to="/">Products</Link>

                    </li>
                </ul>

            </div>
            <div className={styles.right}>
                <Link to="/singin">
                    <Button colorScheme='ping'>Login</Button>
                </Link>
                <Link to="/singup">
                    <Button colorScheme='ping'>Register</Button>
                </Link>

            </div>
        </nav>
    )
}

export default Navbar