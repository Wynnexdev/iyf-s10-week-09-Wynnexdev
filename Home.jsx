import React from 'react';
import { Link } from 'react-router-dom';
import { Shovel, Trash2, Droplets, Zap } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Card, Button } from '../components/shared';
import { PostList } from '../components/Post';
import useFetch from '../hooks/useFetch';
import styles from './Pages.module.css';

const ImpactTracker = () => (
    <Card className={styles.impactCard}>
        <h3>Collective Impact</h3>
        <div className={styles.impactStat}>14,208</div>
        <div className={styles.impactLabel}>Plastic bags saved this month</div>
        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.9 }}>
                <span>♻️ Recycled</span>
                <span>2.4 Tons</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.9 }}>
                <span>💧 Water Saved</span>
                <span>1.2k Ltrs</span>
            </div>
        </div>
    </Card>
);

const Home = () => {
    const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=4');

    const SidebarContent = (
        <>
            <ImpactTracker />
            <Card>
                <h3>Upcoming Eco-Events</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '1rem' }}>
                        <strong>🌍 Earth Hour</strong>
                        <p style={{ fontSize: '0.9rem', color: '#6b4f3b' }}>Join us for a global lights-off event.</p>
                    </li>
                    <li>
                        <strong>🚮 Beach Cleanup</strong>
                        <p style={{ fontSize: '0.9rem', color: '#6b4f3b' }}>Let's keep our coastlines pristine.</p>
                    </li>
                </ul>
            </Card>
        </>
    );

    return (
        <Layout sidebar={SidebarContent}>
            <section className={styles.hero}>
                <h1>Live Purposefully, Cycle Sustainably</h1>
                <p>Join the world's most active zero-waste collective. Share hacks, find refill stations, and track our collective impact on the planet.</p>
                <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Link to="/posts">
                        <Button size="lg">Browse Eco-Tips</Button>
                    </Link>
                    <Link to="/create-post">
                        <Button variant="secondary" size="lg">Share a Hack</Button>
                    </Link>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Latest Eco-Tips</h2>
                    <Link to="/posts" style={{ color: '#8da05e', fontWeight: 600 }}>Explore All Hacks</Link>
                </div>
                <PostList posts={posts} loading={loading} error={error} />
            </section>

            <section className={styles.section} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                <Card style={{ textAlign: 'center', borderBottom: '4px solid #8da05e' }}>
                    <Droplets size={40} color="#8da05e" style={{ marginBottom: '1rem' }} />
                    <h3>Save Water</h3>
                    <p style={{ fontSize: '0.9rem' }}>Smart irrigation and greywater hacks.</p>
                </Card>
                <Card style={{ textAlign: 'center', borderBottom: '4px solid #8da05e' }}>
                    <Zap size={40} color="#8da05e" style={{ marginBottom: '1rem' }} />
                    <h3>Energy Hub</h3>
                    <p style={{ fontSize: '0.9rem' }}>Solar tips and vampire power reduction.</p>
                </Card>
                <Card style={{ textAlign: 'center', borderBottom: '4px solid #8da05e' }}>
                    <Trash2 size={40} color="#8da05e" style={{ marginBottom: '1rem' }} />
                    <h3>Zero Plastic</h3>
                    <p style={{ fontSize: '0.9rem' }}>Practical alternatives to single-use plastics.</p>
                </Card>
            </section>
        </Layout>
    );
};

export default Home;
