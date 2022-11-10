const Home = () => {

    {/**
    * Where you reference a function, it automatically gains the e (event) obeject as its first param
    * You don't have to use this, the e's can be left blank
    */}
    const handleClick = (e) => {
        console.log("Hello from the console.", e);
    }

    const handleClickAgain = (name) => {
        console.log("Hello " + name + ".", e.target);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            {/* If you instead write {handleClick()} the function would be called without the user doing anything */}
            <button onClick={handleClick}>Click Me</button>
            {/**
             * This would not work
             * <button onClick={handleClickAgain('Sam')}>Click Me Again</button>
             * Instead we do
             */}
            <button onClick={(e) => { handleClickAgain('Sam', e) }}>Click Me Again</button>
        </div>
    );
}

export default Home;