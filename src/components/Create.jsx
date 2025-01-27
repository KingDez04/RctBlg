import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const blog = { title, body, author};

        setIsPending(true);

        fetch('https://my-json-server.typicode.com/KingDez04/db/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("Added");
            setIsPending(false);
            navigate('/');
        });

    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} required/>

                <label>Blog body:</label>
                <textarea value={body} onChange={e => setBody(e.target.value)} required></textarea>

                <label>Blog author:</label>
                <input type="text" value={author} onChange={e => setAuthor(e.target.value)} required/>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding Blog...</button> }
            </form>
        </div>
    );

}

export default Create;