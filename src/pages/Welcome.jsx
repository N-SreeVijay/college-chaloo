import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "../utils/tracker";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Counter from "../components/Counter";
import Cursor from "../components/Cursor";

function Welcome() {
  const navigate = useNavigate();
  const [isContactOpen, setIsContactOpen] = useState(false);

  /* ---------- PAGE VIEW TRACK ---------- */
  useEffect(() => {
    trackEvent({
      type: "page_view",
      page: "/",
    });
  }, []);

  const handleLoginClick = (mode) => {
    trackEvent({
      type: "click",
      text: mode === "login" ? "Login" : "Register",
      page: "/",
    });
    navigate(mode === "login" ? "/login" : "/register");
  };

  return (
    <div className="welcome-page">
      <Cursor />
      <Header
        onLoginClick={handleLoginClick}
        onContactClick={() => setIsContactOpen(true)}
      />
      <ContactForm
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <span className="subtitle">Online E-Learning Courses</span>
          <h1>Creating a Better Future through <span>Education</span></h1>
          <p className="hero-desc">It is long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

          <div className="cta-group">
            <a href="#" className="btn-primary">All Courses</a>
            <a href="#" className="btn-outline" onClick={(e) => { e.preventDefault(); setIsContactOpen(true); }}>Contact Us</a>
          </div>

          <div className="students-avatars">
            <div className="avatars">
              <img src="https://i.pravatar.cc/100?img=1" alt="Student" />
              <img src="https://i.pravatar.cc/100?img=2" alt="Student" />
              <img src="https://i.pravatar.cc/100?img=3" alt="Student" />
            </div>
            <div className="student-text">24k+ Happy Students</div>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Students" className="hero-img" />

          <div className="float-card float-1">
            <div className="card-icon-bubble">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '18px' }}><Counter end={28} suffix="k" /></div>
              <div style={{ fontSize: '12px', color: '#666' }}>Total Students</div>
            </div>
          </div>

          <div className="float-card float-2">
            <div className="card-icon-bubble" style={{ background: '#22d3ee' }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '18px' }}><Counter end={529} suffix="+" /></div>
              <div style={{ fontSize: '12px', color: '#666' }}>Total Courses</div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTAL SECTION */}
      <section className="portal-section" style={{ padding: '80px' }}>
        <div className="card-slider">
          <a href="/course?type=btech" className="category-card">
            <div className="cat-icon">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3>B.Tech</h3>
            <p>Bachelor of Technology in Engineering streams.</p>
          </a>

          <a href="/course?type=mtech" className="category-card">
            <div className="cat-icon">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3>M.Tech</h3>
            <p>Master of Technology research programs.</p>
          </a>

          <a href="/course?type=mba" className="category-card">
            <div className="cat-icon">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <h3>MBA</h3>
            <p>Master of Business Administration.</p>
          </a>

          <a href="/course?type=mbbs" className="category-card">
            <div className="cat-icon">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h3>MBBS</h3>
            <p>Medical and Surgery degrees.</p>
          </a>

          <a href="/course?type=pharma" className="category-card">
            <div className="cat-icon">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              </svg>
            </div>
            <h3>Pharmacy</h3>
            <p>Pharmaceutical Sciences and Research.</p>
          </a>

          <a href="/course?type=diploma" className="category-card">
            <div className="cat-icon">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3>Diploma</h3>
            <p>Polytechnic and technical diplomas.</p>
          </a>
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section className="welcome-section">
        <div className="welcome-text">
          <h2>Welcome to EduMon Theme</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br /><br />
            Consectetur id Aenean sit amet massa eu velit commodo cursus fringilla a tellus. Morbi eros urna, mollis porta feugiat non, ornare eu augue. Sed rhoncus est sit amet diam tempus.
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon-box">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <div className="feature-content">
                <h4>Good Planning</h4>
                <p>Renenan sit amet massa</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <div className="feature-content">
                <h4>Our Courses</h4>
                <p>Renenan sit amet massa</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <div className="feature-content">
                <h4>Happy Students</h4>
                <p>Renenan sit amet massa</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="feature-content">
                <h4>Our Teachers</h4>
                <p>Renenan sit amet massa</p>
              </div>
            </div>
          </div>
        </div>

        <div className="welcome-image">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Students in Library" />
        </div>
      </section>

      {/* TOP CATEGORIES SECTION */}
      <section id="categories" className="categories-section">
        <div className="categories-header">
          <h2>Top Categories</h2>
          <p>Explore our most popular learning domains and find the perfect course to upgrade your skills.</p>
        </div>

        <div className="topics-grid">
          <div className="topic-card">
            <div className="topic-icon bg-blue">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M16 18l6-6-6-6" />
                <path d="M8 6l-6 6 6 6" />
              </svg>
            </div>
            <div className="topic-title">Computer Science</div>
            <div className="topic-count">120+ Courses</div>
          </div>

          <div className="topic-card">
            <div className="topic-icon bg-green">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="12" y1="20" x2="12" y2="10" />
                <line x1="18" y1="20" x2="18" y2="4" />
                <line x1="6" y1="20" x2="6" y2="16" />
              </svg>
            </div>
            <div className="topic-title">Business Mgmt</div>
            <div className="topic-count">85+ Courses</div>
          </div>

          <div className="topic-card">
            <div className="topic-icon bg-purple">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <circle cx="11" cy="11" r="2" />
              </svg>
            </div>
            <div className="topic-title">Creative Arts</div>
            <div className="topic-count">60+ Courses</div>
          </div>

          <div className="topic-card">
            <div className="topic-icon bg-red">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div className="topic-title">Medical & Health</div>
            <div className="topic-count">45+ Courses</div>
          </div>

          <div className="topic-card">
            <div className="topic-icon bg-orange">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
            </div>
            <div className="topic-title">Data Science</div>
            <div className="topic-count">90+ Courses</div>
          </div>

          <div className="topic-card">
            <div className="topic-icon bg-teal">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <div className="topic-title">Marketing</div>
            <div className="topic-count">75+ Courses</div>
          </div>

          <div className="topic-card">
            <div className="topic-icon bg-pink">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
            <div className="topic-title">Photography</div>
            <div className="topic-count">30+ Courses</div>
          </div>

          <div className="topic-card">
            <div className="topic-icon bg-yellow">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 21h18" />
                <path d="M5 21V7l8-4 8 4v14" />
                <path d="M17 21v-8.5a1.5 1.5 0 0 0-1.5-1.5h-7a1.5 1.5 0 0 0-1.5 1.5V21" />
              </svg>
            </div>
            <div className="topic-title">Architecture</div>
            <div className="topic-count">50+ Courses</div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section">
        <div className="stats-header">
          <h2>Education Theme</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div className="stats-grid">
          <div className="stats-col">
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3><Counter end={1235} /></h3>
              <p>Project Completed</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2h-4c0-1.1-.9-2-2-2h-3C8 0 8 .9 8 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                </svg>
              </div>
              <h3><Counter end={78} /></h3>
              <p>Awards Won</p>
            </div>
          </div>

          <div className="stats-col center-img-col">
            <img src="https://img.freepik.com/free-photo/group-diverse-grads-throwing-caps-up-sky_53876-56031.jpg"
              alt="Students Group" className="stats-center-img" />
          </div>

          <div className="stats-col">
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3><Counter end={186} /></h3>
              <p>Hours of Work / Month</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <h3><Counter end={89} /></h3>
              <p>Satisfied Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROMO SECTION */}
      <section className="promo-section">
        <div className="promo-overlay"></div>
        <div className="promo-content">
          <h2>GET 100 COURSES FOR <span className="highlight-red">FREE</span></h2>
          <p className="promo-desc">Tech you how to build a complete learning management system upcoming education for student</p>
          <div className="promo-subtitle">WE'RE GOOD AT SOME MEMBER</div>

          <div className="promo-stats-grid">
            <div className="promo-stat-item">
              <div className="promo-icon">
                <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M20 7h-9" />
                  <path d="M14 17H5" />
                  <circle cx="17" cy="17" r="3" />
                  <circle cx="7" cy="7" r="3" />
                </svg>
              </div>
              <div className="promo-label">CERTIFIED TEACHERS</div>
              <div className="promo-value"><Counter end={117} /></div>
            </div>

            <div className="promo-stat-item">
              <div className="promo-icon">
                <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="promo-label">COURSES COMPLETE</div>
              <div className="promo-value"><Counter end={12456} /></div>
            </div>

            <div className="promo-stat-item">
              <div className="promo-icon">
                <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M10 2v7.31" />
                  <path d="M14 9.3V1.99" />
                  <path d="M8.5 2h7" />
                  <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
                  <path d="M5.52 16h12.96" />
                </svg>
              </div>
              <div className="promo-label">STUDENTS ENROLLED</div>
              <div className="promo-value"><Counter end={220234} /></div>
            </div>

            <div className="promo-stat-item">
              <div className="promo-icon">
                <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  <polyline points="10 8 13 11 16 8" />
                </svg>
              </div>
              <div className="promo-label">STUDENTS ENROLLED</div>
              <div className="promo-value"><Counter end={100} suffix="%" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-col about-col">
            <h3 className="footer-heading">About Us</h3>
            <div className="footer-line"></div>
            <div className="footer-brand">EduMon<span>.</span></div>
            <p className="footer-desc">We offer the most complete online learning platform in the country, from engineering to medical and arts.</p>
            <div className="footer-socials">
              <a href="#"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
              <a href="#"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
              <a href="#"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M2 12a10 10 0 1 0 10-10A10 10 0 0 0 2 12zm10 8a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /></svg></a>
              <a href="#"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            </div>
          </div>

          <div className="footer-col links-col">
            <h3 className="footer-heading">Quick Links</h3>
            <div className="footer-line"></div>
            <div className="footer-links-grid">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Company History</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
              <ul>
                <li><a href="#">Company</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Certifications</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsContactOpen(true); }}>Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-col contact-col">
            <h3 className="footer-heading">Keep in Touch</h3>
            <div className="footer-line"></div>
            <div className="contact-item">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>VFSTR, N block, Guntur, Andhra Pradesh, India</span>
            </div>
            <div className="contact-item">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 8142438759</span>
            </div>
            <div className="contact-item">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>info@neuraltrixai.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Welcome;
