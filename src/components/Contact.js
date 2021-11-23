import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div id="content" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh'
        }}>
            <h3>
                Send your feeedback/queries on:
                <Link to="Contact">ananyasingh791@gmail.com</Link>
            </h3>
        </div>
    )
}

export default Contact;