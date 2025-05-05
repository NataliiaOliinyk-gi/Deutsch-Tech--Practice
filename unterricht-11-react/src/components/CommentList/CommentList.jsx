import { useState, useEffect } from "react";
import axios from "axios";

import Comment from "../Comment/Comment";

import styles from "./CommentList.module.css";

axios.get = async (url) => {
    if (url === '/api/comments') {
        return {
            data: [
                { id: 1, userId: 'user1', text: 'Dies ist ein Kommentar von user1' },
                { id: 2, userId: 'user2', text: 'Ein anderer Kommentar von user2' },
                { id: 3, userId: 'user1', text: 'Noch ein Kommentar von user1' },
            ],
        };
    }
    throw new Error('Unknown endpoint');
};

const CommentList = () => {
    const [allComments, setAllComments] = useState([]);
    const [filteredComments, setFilteredComments] = useState([]);
    const [userFilter, setUserFilter] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchComments = async () => {

        try {
            setLoading(true);
            const { data } = await axios.get("/api/comments");
            setAllComments(data);
            setFilteredComments(data)
        } catch (error) {
            setError(error.message)
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchComments()
    }, [])

    const filterByUser = (id) => {
        setUserFilter(id);
        if (id !== "") {
            const items = allComments.filter(item => item.userId === id);
            setFilteredComments(items);
        } else {
            setFilteredComments(allComments)
        };
    }

   

    return (
        <div className={styles.container}>
            <h2>Kommentare</h2>
            <label htmlFor="userFilter">Filter nach Benutzer-ID: </label>
            <input
                type="text"
                id="userFilter"
                value={userFilter}
                onChange={(e) => filterByUser(e.target.value)}
                placeholder="z.B. 123"
                className={styles.input}
            />
            {loading && <p>Kommentare werden geladen...</p>}
            {error && <p className={styles.error}>{error}</p>}
            <ul className={styles.commentList}>
                {filteredComments.map(comment => (
                    <Comment
                        key={comment.id}
                        text={comment.text}
                        author={comment.userId}
                    
                    />
                ))}
            </ul>
        </div>
    )
};

export default CommentList;