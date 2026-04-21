import React from 'react';
import { Layout } from '../components/Layout';
import { Card } from '../components/shared';
import { Leaf, Globe, Users } from 'lucide-react';
import styles from './Pages.module.css';

const About = () => {
    return (
        <Layout>
            <Card className={styles.aboutContent}>
                <h1>Our Commitment to the Future</h1>
                <p>
                    Cycle & Sustain is more than just a website; it's a living, breathing collective of individuals committed to
                    reducing their environmental footprint through practical, everyday actions.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', margin: '3rem 0' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <Leaf color="#8da05e" />
                            <h3 style={{ margin: 0 }}>Eco-Education</h3>
                        </div>
                        <p style={{ fontSize: '0.95rem' }}>We believe that knowledge is the first step toward change. Our hub is designed to make zero-waste living accessible to everyone.</p>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <Users color="#8da05e" />
                            <h3 style={{ margin: 0 }}>Collective Action</h3>
                        </div>
                        <p style={{ fontSize: '0.95rem' }}>Small individual changes lead to massive collective impact. Together, we track our progress and celebrate every win for the planet.</p>
                    </div>
                </div>

                <h2>How We Operate</h2>
                <p>
                    Every tip shared here is verified by our community members. We focus on low-cost, high-impact strategies
                    for waste reduction, circular economy practices, and supporting local ethical businesses.
                </p>

                <div style={{ backgroundColor: '#f4f1ea', padding: '2rem', borderRadius: '1rem', marginTop: '3rem' }}>
                    <h3>Join the Collective</h3>
                    <p>
                        The best time to start was yesterday. The second best time is today. Create an account, start sharing your eco-hacks,
                        and help us build a world where the word "waste" becomes a thing of the past.
                    </p>
                </div>
            </Card>
        </Layout>
    );
};

export default About;
