import { Link } from 'react-router-dom';
import './Signin.css';

const Signin = () => {
    return (
        <section className="signin">
            <div className="left_content">
                <h1>Board.</h1>
            </div>
            <div className="right_content">
                <div className="right_content_data">
                    <h1>Sign In</h1>
                    <h5>Sign in to your account</h5>
                    <div className="icons">
                        <div className="google"><img src="./google.png" alt="" width={20} height={20} /><span style={{marginTop:4}}>Sign in with Google</span></div>
                        <div className="apple"><img src="./apple.jpg" alt="" width={30} height={17} /><span style={{marginTop:4}}>Sign in with Apple</span></div>
                    </div>
                    <div className="content">
                        <form>
                            <label htmlFor="">Email address</label><br />
                            <input type="text" /><br />
                            <label htmlFor="">Password</label><br />
                            <input type="password" /><br />
                            <a href="">Forget password?</a><br />
                            <Link to="/Layout"><button className='button'>Sign In</button></Link>
                        </form>
                    </div>
                    <label htmlFor="">Don't have an account? <a href="">Register here</a></label>
                </div>
            </div>
        </section>

    );
}

export default Signin;