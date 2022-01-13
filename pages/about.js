import React from 'react'
import styles from '../styles/About.module.css';

const About = () => {
    return (
        <div>
            <h2>About Page</h2>
            <button className='btn btn-primary'> Hello World </button>
            <p className={styles.highlight}> Hola Worlda </p>
        </div>
    )
}

export default About
