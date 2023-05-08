import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/arthur.png`} alt="" />
      </Link>
      <header>
        <h2>Artur Olivier</h2>
        <p><a href="https://github.com/arthur-olivier">github.com/arthur-olivier</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Arthur. I&apos;m passionate about software, intelligence artifical
        and people.
        I am a Graduate CS Student at <a href="https://oregonstate.edu/">Oregon State University</a> and Master CS Student at <a href="https://www.cpe.fr">CPE Lyon</a>. I&apos;m actively searching for a 2023 full-time job , reach out if we seem like a good fit.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Arthur Olivier <Link to="/">arthur_olivier.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
