import { useState } from "react";

const Home = () => {

    {/**
     * With the below example comment, the {name} would not be updated in the browser because it is not reactive.
     * In order for it to work we need to make the value reactive. We do this by using a 'hook'. This hook is called useState.
     * useState is imported from react as above and then we make the value reactive below.
     * useState is the value, with the value of Sam
     * Typically you use 'set' and what you are changing to name the call
     */}

    // let name = "Sam";
    const [name, setName] = useState('Sam');
    const [age, setAge] = useState(25);

    {/**
    * Where you reference a function, it automatically gains the e (event) obeject as its first param
    * You don't have to use this, the e's can be left blank
    */}

    const handleClick = () => {
        console.log("Hello from the console.");
    }

    const handleClickAgain = (name, e) => {
        console.log("Hello " + name + ".", e.target);
    }

    const changeName = () => {
        setName('Dan');
    }

    const changeAge = () => {
        setAge(35)
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>Welcome {name}</p>
            <p>{name} is {age} years old.</p>
            {/* If you instead write {handleClick()} the function would be called without the user doing anything */}
            <button onClick={handleClick}>Click Me</button>
            {/**
             * This would not work
             * <button onClick={handleClickAgain('Sam')}>Click Me Again</button>
             * Instead we do
             */}
            <button onClick={(e) => { handleClickAgain('Dan', e) }}>Click Me Again</button>

            <button onClick={changeName}>Change Name to Dan</button>

            <button onClick={changeAge}>Change Age to 35</button>
        </div>
    );
}

export default Home;