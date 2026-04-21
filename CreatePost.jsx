import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Recycle } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Card, Button, Input } from '../components/shared';
import styles from './Pages.module.css';

const CreatePost = ({ onAddPost }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !body) return;

        setIsSubmitting(true);

        setTimeout(() => {
            const newPost = {
                id: Date.now(),
                title,
                body,
                userId: 1,
            };

            onAddPost(newPost);
            setIsSubmitting(false);
            navigate('/posts');
        }, 1000);
    };

    return (
        <Layout>
            <Card className={styles.detailCard}>
                <div className={styles.detailHeader}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <Recycle size={32} color="#8da05e" />
                        <h1 style={{ margin: 0 }}>Share Your Eco-Hack</h1>
                    </div>
                    <p>Whether it's a composting trick or a plastic-free alternative, your knowledge helps the planet.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Hack Title</label>
                        <Input
                            placeholder="e.g., How to Make Homemade Beeswax Wraps"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>The Knowledge Share</label>
                        <textarea
                            className={styles.textarea}
                            placeholder="Explain your hack step-by-step..."
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            required
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
                        <Button type="submit" disabled={isSubmitting} style={{ flex: 1 }}>
                            {isSubmitting ? 'Sharing Knowledge...' : 'Publish to Collective'}
                        </Button>
                        <Button type="button" variant="secondary" onClick={() => navigate(-1)}>
                            Discard
                        </Button>
                    </div>
                </form>
            </Card>
        </Layout>
    );
};

export default CreatePost;
