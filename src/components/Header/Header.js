import React from 'react';
import {  Link } from "react-router-dom";
import styles from './Header.module.css'

const Navbar= () =>{
  return (
  <div className={styles['header-navbar']}>

      <Link style={{textDecoration:'none'}} to="/">EtherScan</Link>

  </div>
  );
}
export default Navbar;