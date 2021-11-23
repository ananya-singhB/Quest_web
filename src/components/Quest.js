import React from 'react';
import { NavBtnLink } from './NavbarElements';
import Auth from './Auth';
import { useContext } from 'react';
import QnA from './home/qna';
import { Login } from './login/login';

const Quest = () => {
    const { authorized, setAuthorized } = useContext(Auth);

    const handleClick = () => {
        authorized ? window.location.href="./qna" : window.location.href="./login";
    }

    return (
        <div id="content">
            <div className="quest"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '60vh'
                }}>
                <center>
                    <div className="hd">
                        <h1>QUEST</h1>
                    </div>
                    <h3 className="que">It's a platform where you can ask/answer queries.</h3>
                    <p className="para">Choose the categories for your questions & get your queries resolved.</p>
                    <br /><br />
                    
                        <button onClick={handleClick} id='btn-primary'>Ask Now</button>
                </center>
            </div>
        </div>
    )
}

export default Quest;