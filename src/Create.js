import { useState } from "react";


const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Sam')

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
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
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
            </form>
        </div>
    );
}

export default Create;