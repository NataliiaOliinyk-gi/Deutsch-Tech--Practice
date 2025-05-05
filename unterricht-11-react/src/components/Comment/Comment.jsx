

const Comment = ({ text, author }) => {
    return (
        <li >
            <p><strong>{author}:</strong></p>
            <p>{text}</p>

        </li>
    )
};

export default Comment;