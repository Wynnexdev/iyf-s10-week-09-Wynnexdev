import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Card, Button } from '../components/shared';
import useFetch from '../hooks/useFetch';
import styles from './Pages.module.css';

const PostDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data: post, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const { data: comments, loading: commentsLoading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

    if (loading) return <Layout><div className={styles.loading}>Loading hack details...</div></Layout>;
    if (error) return (
        <Layout>
            <Card className={styles.error}>
                <h2>Eco-Tip Not Found</h2>
                <p>This tip might have been archived or moved. Let's get you back to the collective vault.</p>
                <Button onClick={() => navigate('/posts')}>Go Back to Vault</Button>
            </Card>
        </Layout>
    );

    return (
        <Layout>
            <div style={{ marginBottom: '3rem' }}>
                <Button variant="secondary" onClick={() => navigate(-1)} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ArrowLeft size={18} /> Back to Vault
                </Button>
            </div>

            <article className={styles.detailCard}>
                <div className={styles.detailHeader}>
                    <h1>{post.title}</h1>
                    <div className={styles.detailMeta}>
                        <span>Verified Hack #{post.id}</span>
                        <span>•</span>
                        <span>Contributor: Community Member</span>
                    </div>
                </div>

                <div className={styles.detailBody}>
                    <p>{post.body}</p>
                </div>

                <section className={styles.commentsSection}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                        <MessageSquare color="#8da05e" />
                        <h2 style={{ margin: 0 }}>Community Knowledge</h2>
                    </div>
                    {commentsLoading ? (
                        <p>Gathering contributor insights...</p>
                    ) : (
                        comments?.map(comment => (
                            <Card key={comment.id} className={styles.commentCard}>
                                <p style={{ fontWeight: 700, color: '#2d4a22', marginBottom: '0.5rem' }}>@{comment.email.split('@')[0]}</p>
                                <p style={{ fontSize: '1rem', color: '#6b4f3b' }}>{comment.body}</p>
                            </Card>
                        ))
                    )}
                </section>
            </article>
        </Layout>
    );
};

export default PostDetail;
