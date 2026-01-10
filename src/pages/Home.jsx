import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Counter from '../components/Counter';

const Home = () => {
    const [authModal, setAuthModal] = useState({ show: false, mode: 'login' });
    const [contactModal, setContactModal] = useState(false);
    const [hovering, setHovering] = useState(false);

    // Custom Cursor Logic
    useEffect(() => {
        const dot = document.createElement('div');
        dot.className = 'cursor-dot';
        const outline = document.createElement('div');
        outline.className = 'cursor-outline';
        document.body.appendChild(dot);
        document.body.appendChild(outline);

        const onMouseMove = (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            dot.style.left = `${posX}px`;
            dot.style.top = `${posY}px`;
            outline.style.left = `${posX}px`;
            outline.style.top = `${posY}px`;
        };

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            if (document.body.contains(dot)) document.body.removeChild(dot);
            if (document.body.contains(outline)) document.body.removeChild(outline);
        };
    }, []);

    useEffect(() => {
        if (hovering) {
            document.body.classList.add('hovering');
        } else {
            document.body.classList.remove('hovering');
        }
    }, [hovering]);

    const openAuth = (mode) => setAuthModal({ show: true, mode });
    const closeAuth = () => setAuthModal({ ...authModal, show: false });
    const switchAuth = (mode) => setAuthModal({ show: true, mode });

    const handleAuth = (e) => {
        e.preventDefault();
        alert(`${authModal.mode === 'login' ? 'Logging in' : 'Signing up'}... (Backend integration required)`);
        closeAuth();
    };

    const handleInteractEnter = () => setHovering(true);
    const handleInteractLeave = () => setHovering(false);

    return (
        <div className="home-container">
            <div className="header-bg-shape"></div>

            <header>
                <div className="brand-area">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} onMouseEnter={handleInteractEnter} onMouseLeave={handleInteractLeave}>
                        <div className="brand">
                            <svg fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2 .715V17a1 1 0 001 1z"></path>
                            </svg>
                            <span>EduMon</span>
                        </div>
                    </Link>
                </div>

                <nav>
                    <ul>
                        <li className="header-search" onMouseEnter={handleInteractEnter} onMouseLeave={handleInteractLeave}>
                            <svg fill="none" width="18" height="18" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input type="text" placeholder="Search colleges, exams..." />
                        </li>

                        <li className="dropdown" onMouseEnter={handleInteractEnter} onMouseLeave={handleInteractLeave}>
                            <a href="#">Colleges ▾</a>
                            <div className="dropdown-content">
                                <Link to="/course?type=btech">Engineering (B.Tech)</Link>
                                <Link to="/course?type=mba">Management (MBA)</Link>
                                <Link to="/course?type=mbbs">Medical (MBBS)</Link>
                                <Link to="/course?type=pharma">Pharmacy</Link>
                                <Link to="/course?type=arts">Arts & Design</Link>
                            </div>
                        </li>
                        <li onMouseEnter={handleInteractEnter} onMouseLeave={handleInteractLeave}><a href="#">Exams</a></li>
                        <li onMouseEnter={handleInteractEnter} onMouseLeave={handleInteractLeave}><a href="#categories">Reviews</a></li>
                        <li onMouseEnter={handleInteractEnter} onMouseLeave={handleInteractLeave}><a href="#" onClick={(e) => { e.preventDefault(); setContactModal(true); }}>Contact Us</a></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <button className="icon-btn" onMouseEnter={handleInteractEnter} onMouseLeave={handleInteractLeave}>
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                        </svg>
                    </button>
                    <button className="login-btn-header" onClick={() => openAuth('login')} onMouseEnter={handleInteractEnter} onMouseLeave={handleInteractLeave}>Login / Register</button>
                </div>
            </header>

            {/* HERO SECTION */}
            <section className="hero">
                <div className="hero-left">
                    <span className="subtitle">Online E-Learning Courses</span>
                    <h1>Creating a Better Future through <span>Education</span></h1>
                    <p className="hero-desc">It is long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                    <div className="cta-group">
                        <a href="#" className="btn-primary" onMouseEnter={handleInteractEnter} onMouseLeave={handleInteractLeave}>All Courses</a>
                        <a href="#" className="btn-outline" onClick={(e) => { e.preventDefault(); setContactModal(true); }} onMouseEnter={handleInteractEnter} onMouseLeave={handleInteractLeave}>Contact Us</a>
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
                    <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students" className="hero-img" />

                    <div className="float-card float-1">
                        <div className="card-icon-bubble">
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: '18px' }}><Counter end={28} />k</div>
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
                            <div style={{ fontWeight: 700, fontSize: '18px' }}><Counter end={529} />+</div>
                            <div style={{ fontSize: '12px', color: '#666' }}>Total Courses</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PORTAL SECTION */}
            <section className="portal-section" style={{ padding: '80px' }}>
                <div className="card-slider">
                    <Link to="/course?type=btech" className="category-card" onMouseEnter={handleInteractEnter} onMouseLeave={handleInteractLeave}>
                        <div className="cat-icon">
                            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <h3>B.Tech</h3>
                        <p>Bachelor of Technology in Engineering streams.</p>
                    </Link>
                    <Link to="/course?type=mtech" className="category-card" onMouseEnter={handleInteractEnter} onMouseLeave={handleInteractLeave}>
                        <div className="cat-icon">
                            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <h3>M.Tech</h3>
                        <p>Master of Technology research programs.</p>
                    </Link>
                    <Link to="/course?type=mba" className="category-card" onMouseEnter={handleInteractEnter} onMouseLeave={handleInteractLeave}>
                        <div className="cat-icon">
                            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                            </svg>
                        </div>
                        <h3>MBA</h3>
                        <p>Master of Business Administration.</p>
                    </Link>
                    <Link to="/course?type=mbbs" className="category-card" onMouseEnter={handleInteractEnter} onMouseLeave={handleInteractLeave}>
                        <div className="cat-icon">
                            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </svg>
                        </div>
                        <h3>MBBS</h3>
                        <p>Medical and Surgery degrees.</p>
                    </Link>
                    <Link to="/course?type=pharma" className="category-card" onMouseEnter={handleInteractEnter} onMouseLeave={handleInteractLeave}>
                        <div className="cat-icon">
                            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                            </svg>
                        </div>
                        <h3>Pharmacy</h3>
                        <p>Pharmaceutical Sciences and Research.</p>
                    </Link>
                    <Link to="/course?type=diploma" className="category-card" onMouseEnter={handleInteractEnter} onMouseLeave={handleInteractLeave}>
                        <div className="cat-icon">
                            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                        </div>
                        <h3>Diploma</h3>
                        <p>Polytechnic and technical diplomas.</p>
                    </Link>
                </div>
            </section>

            {/* WELCOME SECTION */}
            <section className="welcome-section">
                <div className="welcome-text">
                    <h2>Welcome to EduMon Theme</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /><br />Consectetur id Aenean sit amet massa eu velit commodo cursus fringilla a tellus. Morbi eros urna, mollis porta feugiat non, ornare eu augue. Sed rhoncus est sit amet diam tempus.</p>

                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon-box"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg></div>
                            <div className="feature-content"><h4>Good Planning</h4><p>Renenan sit amet massa</p></div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon-box"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg></div>
                            <div className="feature-content"><h4>Our Courses</h4><p>Renenan sit amet massa</p></div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon-box"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg></div>
                            <div className="feature-content"><h4>Happy Students</h4><p>Renenan sit amet massa</p></div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon-box"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
                            <div className="feature-content"><h4>Our Teachers</h4><p>Renenan sit amet massa</p></div>
                        </div>
                    </div>
                </div>
                <div className="welcome-image">
                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students in Library" />
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
                        <div className="topic-icon bg-blue"><svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 18l6-6-6-6" /><path d="M8 6l-6 6 6 6" /></svg></div>
                        <div className="topic-title">School of Computing</div><div className="topic-count">120+ Courses</div>
                    </div>
                    <div className="topic-card">
                        <div className="topic-icon bg-green"><svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg></div>
                        <div className="topic-title">Business Mgmt</div><div className="topic-count">85+ Courses</div>
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
                            <div className="stat-icon-wrapper"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></div>
                            <h3><Counter end={1235} /></h3><p>Project Completed</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon-wrapper"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2h-4c0-1.1-.9-2-2-2h-3C8 0 8 .9 8 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg></div>
                            <h3><Counter end={78} /></h3><p>Awards Won</p>
                        </div>
                    </div>
                    <div className="stats-col center-img-col">
                        <img src="https://img.freepik.com/free-photo/group-diverse-grads-throwing-caps-up-sky_53876-56031.jpg" alt="Students Group" className="stats-center-img" />
                    </div>
                    <div className="stats-col">
                        <div className="stat-item">
                            <div className="stat-icon-wrapper"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
                            <h3><Counter end={186} /></h3><p>Hours of Work / Month</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon-wrapper"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg></div>
                            <h3><Counter end={89} /></h3><p>Satisfied Clients</p>
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
                            <div className="promo-icon"><svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" /></svg></div>
                            <div className="promo-label">CERTIFIED TEACHERS</div><div className="promo-value"><Counter end={117} /></div>
                        </div>
                        <div className="promo-stat-item">
                            <div className="promo-icon"><svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
                            <div className="promo-label">COURSES COMPLETE</div><div className="promo-value"><Counter end={12456} /></div>
                        </div>
                        <div className="promo-stat-item">
                            <div className="promo-icon"><svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M10 2v7.31" /><path d="M14 9.3V1.99" /><path d="M8.5 2h7" /><path d="M14 9.3a6.5 6.5 0 1 1-4 0" /><path d="M5.52 16h12.96" /></svg></div>
                            <div className="promo-label">STUDENTS ENROLLED</div><div className="promo-value"><Counter end={220234} /></div>
                        </div>
                        <div className="promo-stat-item">
                            <div className="promo-icon"><svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /><polyline points="10 8 13 11 16 8" /></svg></div>
                            <div className="promo-label">STUDENTS ENROLLED</div><div className="promo-value"><Counter end={100} />%</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER SECTION */}
            <footer className="main-footer">
                <div className="footer-content">
                    <div className="footer-col about-col">
                        <h3 className="footer-heading">About Us</h3><div className="footer-line"></div>
                        <div className="footer-brand">EduMon<span>.</span></div>
                        <p className="footer-desc">We offer the most complete online learning platform in the country, from engineering to medical and arts.</p>
                        <div className="footer-socials">
                            <a href="#" onMouseEnter={handleInteractEnter} onMouseLeave={handleInteractLeave}><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                            <a href="#" onMouseEnter={handleInteractEnter} onMouseLeave={handleInteractLeave}><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* AUTH MODAL */}
            <div className={`modal-overlay ${authModal.show ? 'show' : ''}`} onClick={closeAuth}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="close-modal-btn" onClick={closeAuth}>✕</button>
                    <div className="modal-tabs">
                        <button className={authModal.mode === 'login' ? 'active' : ''} onClick={() => switchAuth('login')}>Login</button>
                        <button className={authModal.mode === 'signup' ? 'active' : ''} onClick={() => switchAuth('signup')}>Sign Up</button>
                    </div>
                    <div className="modal-body">
                        <h2>{authModal.mode === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
                        <p>{authModal.mode === 'login' ? 'Please enter your details to sign in.' : 'Please enter your details to sign up.'}</p>
                        <form onSubmit={handleAuth}>
                            {authModal.mode === 'signup' && (
                                <div className="input-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="John Doe" />
                                </div>
                            )}
                            <div className="input-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="john@example.com" required />
                            </div>
                            <div className="input-group">
                                <label>Password</label>
                                <input type="password" placeholder="••••••••" required />
                            </div>
                            <button type="submit" className="submit-btn">{authModal.mode === 'login' ? 'Login' : 'Sign Up'}</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* CONTACT MODAL */}
            <div className={`modal-overlay ${contactModal ? 'show' : ''}`} onClick={() => setContactModal(false)} id="contactModal">
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="close-modal-btn" onClick={() => setContactModal(false)}>✕</button>
                    <div className="contact-info-side">
                        <h2>Neuraltrix AI</h2>
                        <div className="info-item">
                            <div className="info-icon">📍</div>
                            <div className="info-text"><h4>Location</h4><p>VFSTR, N block, Guntur,<br />Andhra Pradesh, India</p></div>
                        </div>
                    </div>
                    <div className="contact-form-side">
                        <h3>Reach Us</h3>
                        <p>Tell us how we can help you grow.</p>
                        <form onSubmit={(e) => { e.preventDefault(); alert('Sent!'); setContactModal(false); }}>
                            <div className="input-group"><label>Name</label><input type="text" placeholder="Your Name" required /></div>
                            <div className="input-group"><label>Email</label><input type="email" placeholder="you@example.com" required /></div>
                            <div className="input-group"><label>What's on your mind?</label><textarea placeholder="Write your message here..." rows="4" required></textarea></div>
                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
