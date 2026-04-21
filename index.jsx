import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Recycle, ArrowRight } from 'lucide-react';
import { Card, Button } from '../shared';
import styles from './Post.module.css';

export const PostCard = ({ post }) => {
    const [liked, setLiked] = useState(false);

    return (
        <Card hover className={styles.postCard}>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <p className={styles.postBody}>{post.body}</p>
            <div className={styles.postFooter}>
                <button
                    className={`${styles.likeButton} ${liked ? styles.liked : ''}`}
                    onClick={(e) => {
                        e.preventDefault();
                        setLiked(!liked);
                    }}
                >
                    <Recycle size={20} />
                    <span>{liked ? 'Sustained!' : 'Sustain'}</span>
                </button>
                <Link to={`/posts/${post.id}`}>
                    <Button variant="secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        Details <ArrowRight size={16} />
                    </Button>
                </Link>
            </div>
        </Card>
    );
};

export const PostList = ({ posts, loading, error }) => {
    if (loading) return <div className={styles.loading}>Gathering eco-tips...</div>;
    if (error) return <div className={styles.error}>Could not retrieve tips: {error}</div>;
    if (!posts || posts.length === 0) return <div className={styles.loading}>Start sharing your hacks!</div>;

    return (
        <div className={styles.postList}>
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};
