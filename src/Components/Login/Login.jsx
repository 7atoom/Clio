import "./login.css";

const Login = () => {
    return <>
    
        <div className="login">
            <header>
                <p>logo</p>
                <h1>Welcome Back!</h1>
            </header>

            <form>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" />
            </form>
        </div>

    </>
}

export default Login;
