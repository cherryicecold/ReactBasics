import react from 'react';
import ContactCard from "./ContactCard";
import {} from './style.css';


function Contacts(){
    return(
        <div className="contacts">
            <ContactCard name="John Snow"
                        img="http://placekiten.com/300/200"
                        phone="(212) 555"
                        email="abc.xyz"/>

                         <ContactCard name="John Snow 2"
                        img="http://placekiten.com/300/200"
                        phone="(212) 555"
                        email="abc.xyz"/>
                         <ContactCard name="John Snow 3"
                        img="http://placekiten.com/300/200"
                        phone="(212) 555"
                        email="abc.xyz"/>
           
                        <ContactCard name="John Snow 4"
                        img="http://placekiten.com/300/200"
                        phone="(212) 555"
                        email="abc.xyz"/>
           
           

           
            <div className='contact-card'>
            <img src ="http://placekiten.com/300/200"/>
            <h3>Mr Whiskerson</h3>
            <p>Phone: (212) 555-1234</p>
            <p>Email: mr.whiskerson@cat.com</p>
        </div>

          <div className='contact-card'>
          <img src ="http://placekiten.com/300/200"/>
          <h3>Mr Whiskerson</h3>
          <p>Phone: (212) 555-1234</p>
          <p>Email: mr.whiskerson@cat.com</p>
      </div>

        <div className='contact-card'>
        <img src ="http://placekiten.com/300/200"/>
        <h3>Mr Whiskerson</h3>
        <p>Phone: (212) 555-1234</p>
        <p>Email: mr.whiskerson@cat.com</p>
    </div>

      <div className='contact-card'>
      <img src ="http://placekiten.com/300/200"/>
      <h3>Mr Whiskerson</h3>
      <p>Phone: (212) 555-1234</p>
      <p>Email: mr.whiskerson@cat.com</p>
    </div>
  </div>

    )
}

export  default Contacts;