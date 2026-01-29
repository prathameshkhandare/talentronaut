'use client';

import { useEffect, useRef } from 'react';
import styles from './WhyUs.module.css';

export default function WhyUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animateItem}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${styles.animateItem}`}>
          <span className={styles.tag}>Why Talentronaut?</span>
          <h2 className={styles.title}>
            We Help You <span className={styles.highlight}>Navigate</span> Your Career Journey
          </h2>
        </div>

        {/* Bento Grid */}
        <div className={styles.bentoGrid}>
          {/* Card 1 - Large Text Card */}
          <div className={`${styles.card} ${styles.cardLarge} ${styles.animateItem}`}>
            <div className={styles.cardIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Data-Driven Career Insights</h3>
            <p className={styles.cardDescription}>
              Leverage AI-powered analytics to identify the perfect opportunities 
              aligned with your skills, experience, and career aspirations.
            </p>
          </div>

          {/* Card 2 - Stats Card */}
          <div className={`${styles.card} ${styles.cardStats} ${styles.animateItem}`}>
            <span className={styles.statsNumber}>40</span>
            <span className={styles.statsLabel}>Qualified Experts</span>
            <div className={styles.avatarStack}>
              <div className={styles.avatar} style={{ background: 'linear-gradient(135deg, #E07B55, #FFAB91)' }}></div>
              <div className={styles.avatar} style={{ background: 'linear-gradient(135deg, #4CAF50, #81C784)' }}></div>
              <div className={styles.avatar} style={{ background: 'linear-gradient(135deg, #2196F3, #64B5F6)' }}></div>
              <div className={styles.avatar} style={{ background: 'linear-gradient(135deg, #9C27B0, #BA68C8)' }}></div>
              <div className={`${styles.avatar} ${styles.avatarMore}`}>+36</div>
            </div>
          </div>

          {/* Card 3 - Image Card */}
          <div className={`${styles.card} ${styles.cardImage} ${styles.animateItem}`}>
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <path d="M21 15l-5-5L5 21"/>
                </svg>
              </div>
            </div>
            <span className={styles.imageCaption}>Professional Guidance</span>
          </div>

          {/* Card 4 - Success Rate */}
          <div className={`${styles.card} ${styles.cardSuccess} ${styles.animateItem}`}>
            <div className={styles.successBadge}>
              <span className={styles.successNumber}>89%</span>
              <span className={styles.successLabel}>Success Rate</span>
            </div>
            <div className={styles.successGraph}>
              <svg viewBox="0 0 200 60" className={styles.waveGraph}>
                <path 
                  d="M0 30 Q25 10, 50 30 T100 30 T150 30 T200 30" 
                  stroke="rgba(255,255,255,0.5)" 
                  strokeWidth="2" 
                  fill="none"
                />
                <path 
                  d="M0 40 Q25 20, 50 40 T100 40 T150 40 T200 40" 
                  stroke="rgba(255,255,255,0.3)" 
                  strokeWidth="2" 
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Card 5 - Feature Card */}
          <div className={`${styles.card} ${styles.cardFeature} ${styles.animateItem}`}>
            <div className={styles.featureIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h4 className={styles.featureTitle}>Personalized Matching</h4>
            <p className={styles.featureText}>
              Our algorithm matches you with opportunities that fit your unique profile.
            </p>
          </div>

          {/* Card 6 - Feature Card 2 */}
          <div className={`${styles.card} ${styles.cardFeature2} ${styles.animateItem}`}>
            <div className={styles.featureIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <h4 className={styles.featureTitle}>Global Network</h4>
            <p className={styles.featureText}>
              Access opportunities from top companies worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
