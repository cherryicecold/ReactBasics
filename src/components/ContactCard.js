import react from "react";


function ContactCard(props){
    return(
        <div className="contact-card">
        <img src ={props.img}/>
        <h3>{props.name}</h3>
        <p>Phone: {props.phone}</p>
        <p>Email: {props.email}</p>
    </div>
    )
}
export default ContactCard;