import styles from './About.module.css';

export default function About(){
    return (
        <div className={styles['about-container']}>
            <h1>BUDGETING, <br/>IT SAVES LIVES</h1>
            <button className={styles['about-button']}>Start Budgeting</button>
            <h2>The best way to start saving, is with Cash Compass.</h2>
            <p>Nowadays, the world seems to be revolving around money and with the current economy, sometimes 
                you need a bit of a budget. In order<br/>&nbsp;&nbsp;&nbsp; to be smart with your money, you need to set the discipline 
                of your spending habits. We will help cover that to make your life easier.
            </p>
        </div>
    );
}