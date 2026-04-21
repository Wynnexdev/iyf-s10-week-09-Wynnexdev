import React, { useState, useMemo } from 'react';
import { Layout } from '../components/Layout';
import { Input } from '../components/shared';
import { PostList } from '../components/Post';
import { Search } from 'lucide-react';
import useFetch from '../hooks/useFetch';
import styles from './Pages.module.css';

const Posts = ({ localPosts = [] }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const { data: apiPosts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

    const allPosts = useMemo(() => {
        const combined = [...localPosts, ...(apiPosts || [])];
        if (!searchQuery) return combined;

        return combined.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.body.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [apiPosts, localPosts, searchQuery]);

    return (
        <Layout>
            <div className={styles.sectionHeader}>
                <h1 className={styles.sectionTitle}>The Eco-Tip Vault</h1>
                <span style={{ color: '#8da05e', fontWeight: 600 }}>{allPosts.length} hacks available</span>
            </div>

            <div className={styles.searchBar} style={{ position: 'relative' }}>
                <Input
                    type="text"
                    placeholder="Search by keyword, material, or tip..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ paddingLeft: '3rem' }}
                />
                <Search size={20} color="#8da05e" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            </div>

            <PostList posts={allPosts} loading={loading} error={error} />
        </Layout>
    );
};

export default Posts;
