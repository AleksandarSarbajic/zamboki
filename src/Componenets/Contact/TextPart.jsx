import classes from "../contact/TextPart.module.scss";
import { AiFillWechat } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";

export default function TextPart() {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <AiFillWechat className={classes.boxIcon} />
        <div className={classes.boxText}>
          <p className={classes.boxHeading}>Chat to us</p>
          {/* <p className={classes.boxSub}>Our friendly team is here to help.</p> */}
          <a
            href="mailto:zamboki@barak-online.net"
            className={classes.boxEmail}
          >
            zamboki@barak-online.net
          </a>
          <a href="mailto:igael@netvision.net.il" className={classes.boxEmail}>
            igael@netvision.net.il
          </a>
          <a
            href="mailto:urik51@gmail.com
"
            className={classes.boxEmail}
          >
            urik51@gmail.com
          </a>
        </div>
      </div>
      <div className={classes.box}>
        <GrMapLocation className={classes.boxIcon} />
        <div className={classes.boxText}>
          <p className={classes.boxHeading}>Visit us</p>
          <p className={classes.boxSub}>Come say hello to our office.</p>
          <p className={classes.boxEmail}>
            Ha&apos;ari 39/6 Netanya 4252634 Israel
          </p>
        </div>
      </div>
      <div className={classes.box}>
        <LuPhoneCall className={classes.boxIcon} />
        <div className={classes.boxText}>
          <p className={classes.boxHeading}>Call us</p>
          <p className={classes.boxSub}>Mon-Fri from 8am to 5pm.</p>
          <a href="tel:97298658380" className={classes.boxEmail}>
            Tell: +972-9-8658380
          </a>
          <a href="tel:97298658381" className={classes.boxEmail}>
            Fax: +972-9-8658381
          </a>
          <a href="tel:972505355684" className={classes.boxEmail}>
            Cell: +972-50-5355684
          </a>
        </div>
      </div>
    </div>
  );
}
