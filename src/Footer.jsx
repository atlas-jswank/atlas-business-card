import Github from "./assets/github.svg";
import Twitter from "./assets/twitter.svg";
import Instagram from "./assets/instagram.svg";

export default function Footer() {
  return (
      <footer>
        <ul className="social">
          <li>
            <a
              href="https://github.com/"
              target="_"
            >
             <img src={Github} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_"
            >
              <img src={Twitter} />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/"
              target="_"
            >
              <img src={Instagram} />
            </a>
          </li>
        </ul>
      </footer>
  );
}
