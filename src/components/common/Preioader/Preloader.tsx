import React from 'react';
import s from './Preloader.module.css'
import preloader from '../../../assets/images/preloader.gif';

const Preloader = () => {
  return  <img src={preloader} className={s.preloader}/>
}
export default Preloader