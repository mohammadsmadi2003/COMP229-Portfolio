import React, { useState } from "react";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";

// Shared page layout and navigation used across the portfolio.
const navItems = [
  ["Home", "/"],
  ["About Me", "/about"],
  ["Projects", "/projects"],
  ["Education", "/education"],
  ["Services", "/services"],
  ["Contact", "/contact"]
];

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <div className="nav-wrap">
          <Link className="logo" to="/" aria-label="Mohammad Smadi home"><span>MS</span></Link>
          <nav aria-label="Main navigation">
            {navItems.map(([label, path]) => (
              <NavLink key={path} to={path} end={path === "/"}>{label}</NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} Mohammad Smadi · Personal Portfolio</footer>
    </>
  );
}

function Home() {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <p className="eyebrow">SOFTWARE ENGINEERING STUDENT</p>
        <h1>Hi, I'm <span>Mohammad Smadi.</span><br />I build useful digital experiences.</h1>
        <p className="lead">Welcome to my portfolio. I’m developing my skills in programming, web development, and problem-solving, one project at a time.</p>
        <div className="actions">
          <Link className="button primary" to="/about">Get to know me <span>↗</span></Link>
          <Link className="button secondary" to="/projects">Explore projects</Link>
        </div>
      </div>
      <div className="hero-art" aria-label="Decorative abstract graphic">
        <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
        <div className="monogram">MS</div><div className="spark">✦</div>
      </div>
      <div className="hero-bottom"><span>CURIOUS BY NATURE</span><span>CREATIVE IN PRACTICE</span><span>ALWAYS LEARNING</span></div>
    </section>
  );
}

function About() {
  return (
    <section className="container page">
      <p className="eyebrow">A LITTLE ABOUT ME</p>
      <h1>About <span>Me</span></h1>
      <div className="about-grid">
        <div className="portrait-placeholder"><div className="portrait-initials">MS</div><small>Personal monogram graphic</small></div>
        <div>
          <h2>Mohammad Smadi</h2>
          <p className="lead">I’m a Software Engineering Technician student at Centennial College with an interest in creating practical, user-friendly technology.</p>
          <p>I enjoy learning how applications work, turning ideas into organized solutions, and improving my skills through hands-on projects. I’m currently building experience with web technologies, programming fundamentals, and software design.</p>
          <a className="button primary" href="/Mohammad_Smadi_Resume.pdf" target="_blank" rel="noreferrer">View resume PDF ↗</a>
          <p className="note">Resume prepared for this portfolio. Add your preferred contact details before final submission.</p>
        </div>
      </div>
    </section>
  );
}

const projects = [
  { number: "01", title: "Personal Portfolio Website", type: "Web development", description: "Built a responsive multi-page React portfolio using reusable components and clear navigation. My role covered the page structure, interface implementation, and testing; the outcome is a working portfolio that presents my skills and projects.", tags: ["React", "CSS", "JavaScript"], symbol: "✳" },
  { number: "02", title: "Student Task Planner", type: "Application concept", description: "A student-focused application concept for organizing assignments, deadlines, and priorities. My role focused on planning the interface and application logic; the outcome was a structured design for a practical student productivity tool.", tags: ["UI design", "Logic", "Planning"], symbol: "▦" },
  { number: "03", title: "Inventory Dashboard", type: "Software concept", description: "A software dashboard concept for viewing items and tracking stock information. My role focused on organizing the data and interface; the outcome was a clear dashboard design that makes inventory information easier to understand.", tags: ["Data", "Dashboard", "Problem solving"], symbol: "⌘" }
];

function Projects() {
  return (
    <section className="container page">
      <p className="eyebrow">SELECTED WORK</p><h1>My <span>Projects</span></h1>
      <p className="lead intro">A few examples of the kinds of problems and digital experiences I’m interested in.</p>
      <div className="project-grid">
        {projects.map(project => <article className="project-card" key={project.number}>
          <div className={`project-visual visual-${project.number}`}><span>{project.symbol}</span><small>PROJECT {project.number}</small></div>
          <div className="project-info"><p className="eyebrow">{project.type}</p><h2>{project.title}</h2><p>{project.description}</p>
            <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </div>
        </article>)}
      </div>
      <p className="note">These are illustrative portfolio examples. Replace them with completed work and accurate outcomes before submission.</p>
    </section>
  );
}

function Education() {
  return (
    <section className="container page">
      <p className="eyebrow">MY LEARNING JOURNEY</p><h1>Education & <span>Training</span></h1>
      <div className="timeline">
        <article className="timeline-item"><span className="timeline-dot"></span><p className="eyebrow">CURRENT STUDIES</p><h2>Centennial College</h2><h3>Software Engineering Technician</h3><p>Developing skills in programming, software development, databases, web applications, and system design.</p><span className="date">Year 2 · Dates to confirm</span></article>
        <article className="timeline-item"><span className="timeline-dot"></span><p className="eyebrow">PREVIOUS EDUCATION</p><h2>Additional qualifications</h2><p>Add your high school education, certificates, and any other relevant qualifications here.</p><span className="date">Institution and dates to add</span></article>
      </div>
      <p className="note">Update the dates and add all qualifications you have actually earned.</p>
    </section>
  );
}

const services = [
  ["⌘", "Web development", "Building clean, responsive websites using modern front-end tools."],
  ["◇", "Programming", "Writing organized code and working through software problems."],
  ["▤", "UI implementation", "Turning a layout or idea into a clear and accessible interface."],
  ["↗", "Technical support", "Helping troubleshoot common application and website issues."]
];

function Services() {
  return (
    <section className="container page">
      <p className="eyebrow">WHAT I’M INTERESTED IN</p><h1>Skills & <span>Services</span></h1>
      <p className="lead intro">Areas where I’m building practical experience and can contribute to projects.</p>
      <div className="service-grid">{services.map(([icon, title, description]) => <article className="service-card" key={title}>
        <div className="service-icon">{icon}</div><h2>{title}</h2><p>{description}</p>
      </article>)}</div>
      <p className="note">These describe student-level skills and interests, not a claim of professional service experience.</p>
    </section>
  );
}

function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", message: "" });
  function update(event) { setForm({ ...form, [event.target.name]: event.target.value }); }
  function submit(event) {
    event.preventDefault();
    // The assignment asks for captured form data and a redirect; this is front-end only.
    sessionStorage.setItem("portfolioContact", JSON.stringify(form));
    navigate("/");
  }
  return (
    <section className="container page">
      <p className="eyebrow">LET’S CONNECT</p><h1>Contact <span>Me</span></h1>
      <div className="contact-grid">
        <div className="contact-copy"><h2>Have a project or question?</h2><p>Use the form to send a message. This demo captures the entered details in the browser and returns to the home page; it does not send an email.</p>
          <div className="contact-detail"><span>Email</span><strong>Add your email address</strong></div>
          <div className="contact-detail"><span>Location</span><strong>Toronto, Canada</strong></div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="form-row">
            <label>First name<input name="firstName" value={form.firstName} onChange={update} required placeholder="First name" /></label>
            <label>Last name<input name="lastName" value={form.lastName} onChange={update} required placeholder="Last name" /></label>
          </div>
          <label>Contact number<input name="phone" type="tel" value={form.phone} onChange={update} placeholder="(000) 000-0000" /></label>
          <label>Email address<input name="email" type="email" value={form.email} onChange={update} required placeholder="you@example.com" /></label>
          <label>Message<textarea name="message" value={form.message} onChange={update} required rows="5" placeholder="Write your message..." /></label>
          <button className="button primary" type="submit">Submit message ↗</button>
        </form>
      </div>
    </section>
  );
}

export default function App() {
  return <Layout><Routes>
    <Route path="/" element={<Home />} /><Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} /><Route path="/education" element={<Education />} />
    <Route path="/services" element={<Services />} /><Route path="/contact" element={<Contact />} />
    <Route path="*" element={<Home />} />
  </Routes></Layout>;
}