
import "./Contact.css";
import dm from '../../img/dm.png';
const Contact  = () => {
    

    return(
        <div className="contact-form">
            <div className="contact-left">
                <div className="awesome">
                    <span>Get in Touch</span>
                    <span>Contact Me</span>
                    <img src={dm} alt=""></img>
                    <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
                </div>
            </div>
           <div className="c-right">
        <form >
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
        </div>
    )
}

export default Contact;
