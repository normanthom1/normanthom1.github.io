import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Tom Norman</h2>
        <p>
          <a href="mailto:tom.r.norman@gmail.com">tom.r.norman@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Tom. I graduated from {' '}
        <a href="https://www.wgtn.ac.nz/">Te Herenga Waka—Victoria, University of Wellington</a> graduate, YC
        Alumni, and I currently work at the Ministry of Social Development{' '}
        <a href="https://smileidentity.com">Smile Identity</a>. Previously, I
        was the co-founder and CTO of <a href="https://arthena.com">Arthena</a>,
        co-founder of <a href="https://matroid.com">Matroid</a>, and worked at{' '}
        <a href="https://planet.com">Planet</a> and{' '}
        <a href="https://facebook.com">Facebook</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Tom Norman <Link to="/">tom.r.norman@gmail.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
