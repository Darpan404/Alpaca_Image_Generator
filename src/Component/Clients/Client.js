import React from "react"
import './Clients.css'
import {Swiper , SwiperSlide} from 'swiper/react';
import profilepic1 from '../../img/profile1.jpg'
import profilepic2 from '../../img/profile2.jpg'
import profilepic3 from '../../img/profile3.jpg'
import profilepic4 from '../../img/profile4.jpg'
import profilepic5 from '../../img/profile5.jpg'
import profilepic6 from '../../img/profile6.jpg'

import 'swiper/css/pagination';
import 'swiper/css';
const Client  = () => {
   const clients =[
        {
            img:profilepic1,
            review:" A great functionality in performin the task without exceeding the tineline. Very fast, Very professional, awesome Work. I highly recommended and would like to collaborate with crowned concept furhur."
        },
        {
            img:profilepic2,
            review:" Wanted to tarnsform What i had in mind as a logo. Company really hit the spot on what i thought of an deven made more logos for selection. Highly recommended Crowned Concept."
        },
        {
            img: profilepic3,
            review:" Crownend Concept did really great job! they have a creative mind and an excellent vision of design .The company creates attractive designs with latest trends . Hingly Recommended ."
        },
        {
            img: profilepic4,
            review:" “I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage. I never have any problem at all."
        },
        {
            img: profilepic5,
            review:"You will get the best of what you put in. The Team is working their bset to provide us the variety of designs. Had a great experience working with them"
        },
        {
            img: profilepic6,
            review:" Crownend Concept did really great job! they have a creative mind and an excellent vision of design .The company creates attractive designs with latest trends . Hingly Recommended ."
        }   
    ] 
    return(
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients Always get</span>
            <span> Exceptional Work</span>
        
        </div>
        
    
        <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
          >

            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                        <img src={client.img} alt=""></img>
                        <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            }
            )}
        </Swiper>

    </div>
    
    )
}
export default Client;