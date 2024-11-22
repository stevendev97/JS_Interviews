import React, { useCallback, useEffect, useState } from 'react'
import './BlogList.css'

function BlogList() {
    //https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)

    const fetchPosts = () => {
        if (page > 10) return; 

        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
            .then(res => res.json())
            .then(res => {
                setPosts(prev => [...prev, ...res])
            })
    }

    const throttle = (func) => {
        let timeoutId = null; // Track the timeout ID

        return () => {
            // If a timeout is active, clear it
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                func(); // Execute the throttled function
                timeoutId = null; // Clear the timeout after execution
            }, 100); // Throttle delay in milliseconds
        };
    };

    const handleScroll = useCallback(() => {
        console.log('han scroll is called')
        if (isNearBottom()) {
            console.log('calling fetch')
            setPage(prev => prev + 1)
        }
    }, [])

    const isNearBottom = () => {
        const scrollBarBottom = window.scrollY + window.innerHeight; // Bottom of the scroll bar
        const documentHeight = document.documentElement.scrollHeight; // Total document height

        return (documentHeight - scrollBarBottom < 550); // Adjust threshold as needed
    };

    // const handleScroll = throttle(fetchPosts)

    useEffect(() => {
        fetchPosts()
    }, [page])

    useEffect(() => {
        window.addEventListener('scroll', throttle(handleScroll));

        return () => {
            // Cleanup event listener
            console.log('under removing')
            window.removeEventListener('scroll', throttle(handleScroll));
        };
    }, [handleScroll])


    return (
        <div className='cardContainer'>
            {
                posts.map((post) => {
                    return (
                        <div key={post.id} className='postCard'>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BlogList
