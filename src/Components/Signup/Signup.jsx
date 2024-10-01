import "./signup.css";

const Signup = () => {
    return <>

        <div className="signup">
            <header>
                <p>Logo</p>
                <h1>Hello Dear</h1>
            </header>

            <form>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" />
            </form>
        </div>

    </>
}

export default Signup;
