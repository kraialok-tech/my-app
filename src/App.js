import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="logo">DreamInteriors</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Design Your Dream Home</h1>
        <p>Modern interiors that combine comfort, style, and functionality.</p>
        <button className="cta-btn">Get Started</button>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          We create beautiful, functional living spaces that reflect your style.
          With 15+ years of experience, our team ensures every detail is perfect.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <img src="https://via.placeholder.com/300x200" alt="Living Room" />
            <h3>Living Room Design</h3>
            <p>Modern layouts with perfect lighting and furniture balance.</p>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300x200" alt="Kitchen" />
            <h3>Modular Kitchens</h3>
            <p>Stylish and functional kitchens designed to fit your space.</p>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300x200" alt="Bedroom" />
