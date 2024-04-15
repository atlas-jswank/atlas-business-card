import LinkedIn from "./assets/linkedin.svg";

import MailTo from "./MailTo";

export default function Info() {
  return (
    <>
      <img
        src="https://placehold.co/600x600"
        alt="Thats Me"
      />
      <div className="info">
        <h2 className="name">Jeremiah Swank</h2>
        <p className="title">Full Stack Developer</p>
        <p className="title">Technical Instructor at Atlas School</p>
        
      </div>
      <div className="contact">
          <MailTo
            email="noreply@gmail.com"
            subject="Lets connect"
            body="Hello"
            className="mailto"
          >
            Email
          </MailTo>
          <a
            href="https://linkedin.com"
            target="_"
            className="button linkedin"
          >
            <img src={LinkedIn} />
            Linkedin
          </a>
        </div>
    </>
  );
}
