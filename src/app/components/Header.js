'use client';
import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import styles from '../page.module.css';
import Image from 'next/image';

const navLinks = [
  { href: '#hero', label: 'INÍCIO' },
  { href: '#symptoms', label: 'SINTOMAS' },
  { href: '#results', label: 'RESULTADOS' },
  { href: '#about', label: 'SOBRE' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  const [hash, setHash] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setHash(window.location.hash);
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setHash(href);
      window.history.replaceState(null, '', href);
      setIsMenuOpen(false); // Fecha o menu ao clicar em um link
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        {/* <div className={styles.logoSection}>
          <span className={styles.logo}>RIGATTI</span>
          <span className={styles.tagline}>DESPERTE SUA FORÇA REAL</span>
        </div> */}
        <Image src="/logo.png" alt="Logo" width={200} height={100} />
        
        {/* Menu hambúrguer para mobile */}
        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* Navegação desktop */}
        <nav className={styles.nav}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={hash === link.href ? styles.active : ''}
              onClick={e => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Menu mobile */}
        <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={hash === link.href ? styles.active : ''}
              onClick={e => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
} 