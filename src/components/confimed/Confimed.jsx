import confirm from "../../assets/images/icon-thank-you.svg";

// Style
import "./style.scss";

function Confirmed() {
   return (
      <>
         <div className="confirmed">
            <img src={confirm} alt="confirm icon" />
            <h2>Thank you!</h2>
            <p>
               Thanks for confirming your subscription! We hope you have
               fun using our platform. if you ever need support, please
               feel free to email us at support@loremgaming.com .
            </p>
         </div>
      </>
   );
}

export default Confirmed;
