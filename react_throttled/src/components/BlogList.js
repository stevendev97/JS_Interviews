import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './BlogList.css';

const BlogList = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    // Fetch posts
    const fetchPosts = async () => {
        if (loading) return;
        setLoading(true);

        try {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
            );

            if (response.data.length > 0) {
                setPosts((prevPosts) => [...prevPosts, ...response.data]);
            } else {
                setHasMore(false); // No more data to fetch
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        }

        setLoading(false);
    };

    // Handle scroll event with throttling
    const handleScroll = useCallback(() => {
        if (!hasMore || loading) return;

        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollHeight - scrollTop <= clientHeight + 100) {
            setPage((prevPage) => prevPage + 1);
        }
    }, [hasMore, loading]);

    useEffect(() => {
        fetchPosts();
    }, [page]);

    useEffect(() => {
        const throttledScroll = throttle(handleScroll, 200);
        window.addEventListener('scroll', throttledScroll);

        return () => {
            window.removeEventListener('scroll', throttledScroll);
        };
    }, [handleScroll]);

    return (
        <div className="blog-list">
            <h1>Infinite Scrolling Blog</h1>
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
            {loading && <p>Loading more posts...</p>}
            {!hasMore && <p>No more posts to display.</p>}
        </div>
    );
};

// Throttle function
const throttle = (func, delay) => {
    let lastCall = 0;

    return (...args) => {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func(...args);
        }
    };
};

export default BlogList;
