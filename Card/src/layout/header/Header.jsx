import React from 'react'
import styles from './header.module.css'
import { CiShoppingCart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  return (
    <div className="container">
        <header>
            <div className={styles.header_left}>
                <h1>sneakers</h1>
                <ul>
                    <li><a href="">Collections</a></li>
                    <li><a href="">Men</a></li>
                    <li><a href="">Women</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>

            <div className={styles.header_right}>
                <CiShoppingCart className={styles.header_icon}/>
                <RxAvatar className={styles.header_icon}/>
            </div>
        </header>
    </div>
  )
}

export default Header
