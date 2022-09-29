import React from 'react'
import '../App.css';
import johnDoe from './Images/john-doe.jpg'
const Aboutme = () => {
  return (
    <section id="about-me">
      <h1>
        Hello, my name is
        <span className="rotate text-important">John doe</span>,<br />
        and i make horrible websites.
      </h1>
      <img className="avatar" src={johnDoe} alt="jhon-doe" />
    </section>
  )
}

export default Aboutme