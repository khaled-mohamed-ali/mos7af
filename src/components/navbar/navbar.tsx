import React, { useState } from 'react';
import { NavLink } from 'react-router';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="quran-header" dir="rtl">
            <nav className="quran-navbar">
                
                <div className="nav-brand">
                    <NavLink to="/" className="brand-logo">
                        <span className="brand-icon">📖</span>
                        <span className="brand-text">المصحف</span>
                    </NavLink>
                </div>

                {/* زر القائمة للشاشات الصغيرة (Mobile Menu Toggle) */}
                <button className="menu-toggle" onClick={toggleMenu} aria-label="فتح القائمة">
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                </button>

                {/* روابط التنقل */}
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsOpen(false)}>
                            الرئيسية
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/surahs" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsOpen(false)}>
                            السور والفهارس
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/audio" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsOpen(false)}>
                            الاستماع للتلاوات
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/bookmarks" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsOpen(false)}>
                            المفضلة والمحفوظات
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsOpen(false)}>
                            عن الموقع
                        </NavLink>
                    </li>
                </ul>

                {/* زر بحث أو إعدادات سريعة (اختياري) */}
                <div className="nav-actions">
                    <button className="search-btn" title="بحث عن سورة أو آية">
                        🔍 بحث
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;