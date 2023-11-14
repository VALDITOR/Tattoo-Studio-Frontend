import React from 'react';
import './information.css'
import InfoCard from '../../common/InfoCard/InfoCard';
import Logo from '../../img/logo.jpg'
import { logUser } from '../../services/apiCalls';
import { MdOutlineMenuBook } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { MdHealthAndSafety } from "react-icons/md";


export const Information = () => {
     return (
         <div className="informationDesign">
            <div className='informationDivider'>
            <InfoCard logo={<MdOutlineMenuBook  className='color'/>} title="WHO WE ARE?" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus eligendi inventore amet at eaque qui quaerat debitis magnam sequi sit voluptates repellendus deleniti quia alias expedita quisquam, numquam perferendis?" url="https://www.google.com/maps/place/Steel+N+Ink+Collingwood/@44.5015491,-80.2295047,17z/data=!3m1!4b1!4m6!3m5!1s0x882a7bd3febfac15:0x9a9e1ca1bfac6ffe!8m2!3d44.5015491!4d-80.2269298!16s%2Fg%2F1ygbbbgw4?entry=ttu" />
            </div>
            <div className='informationDivider'>
            <InfoCard logo={<IoIosPeople  className='color'/>} title="TESTIMONIALS" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus eligendi inventore amet at eaque qui quaerat debitis magnam sequi sit voluptates repellendus deleniti quia alias expedita quisquam, numquam perferendis?" url="https://heytattoo.ca/0213499/Steel_N_Ink_Collingwood" />
            </div>
            <div className='informationDivider'>
            <InfoCard logo={<MdHealthAndSafety  className='color'/>} title="PREP. & AFTERCARE" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus eligendi inventore amet at eaque qui quaerat debitis magnam sequi sit voluptates repellendus deleniti quia alias expedita quisquam, numquam perferendis?" url="https://www.healthline.com/health/tattoo-aftercare#day-by-day" />
            </div>
         </div>
     )
}