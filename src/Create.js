import { useState } from "react";


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Sam');
    const [isPending, setIsPending] =useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('newblogadded')
            setIsPending(false)
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label >Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label >Blog author:</label>
                <select
                    value = {author}
                    onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="Sam">Sam</option>
                    <option value="Taz">Taz</option>
                    <option value="Dan">Dan</option>
                    <option value="Mel">Mel</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Submitting...</button>}
                <p>{title}</p>
                <p>{body}</p>
            </form>
        </div>
    );
}

export default Create;