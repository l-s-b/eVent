import React from "react";
import ListEvent from "./ListEvent";
import Grafica from  './GraphPromoter'
import styles from './PromotorePorfile.module.css';
import {Link} from 'react-router-dom'
const PromotorePorfile = ({userData}) =>{
    console.log(userData)
    return(
        <div className={styles.contPrin}>
            <div className={styles.contProfile}>
                <div className={styles.imgProfile}>
                    <img src={userData.picture} alt="" />
                </div>
            </div>
            <div className={styles.contInfo} >
                <h3>{userData.business_type} {userData.business_name}</h3>
            </div>
            <hr/>
            
            <div className={styles.contEvents}>
                <div className={styles.barEvent}>  
                    <h4>Mis Eventos</h4>
                    <Link to='/FormEvent' className={styles.link}>              
                        <button className={styles.btnAddEvent}>
                            Nuevo Evento 
                        </button>     
                    </Link>           
                </div>
            
                <ListEvent />
            </div>
            <Grafica/>

        </div>
    );
}
export default PromotorePorfile