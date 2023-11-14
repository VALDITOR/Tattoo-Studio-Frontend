import React from 'react';
import './information.css'
import InfoCard from '../../common/InfoCard/InfoCard';
import Logo from '../../img/logo.jpg'
import { logUser } from '../../services/apiCalls';
import { MdHealthAndSafety } from "react-icons/md";


export const Information = () => {
     return (
         <div className="informationDesign">
            <div className='informationDivider'>
            <InfoCard logo={<MdHealthAndSafety  className='color'/>} title="loem" text="texto" url="angel" />
            </div>
            <div className='informationDivider'>
            <InfoCard logo={Logo} title="gaston" text="texto" url="angel" />
            </div>
            <div className='informationDivider'>
            <InfoCard logo={Logo} title="gaston" text="texto" url="angel" />
            </div>
         </div>
     )
}