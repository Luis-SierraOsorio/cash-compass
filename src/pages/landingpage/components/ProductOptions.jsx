import styles from './ProductOptions.module.css';

export default function ProductOptions(){
    return(
        <div className={styles['productoptions-background']}>
            <div className={styles['image1']}/>
            <h1>Brilliant Features Made For You.</h1>
            <h2>Budgeting.</h2>
            <p1>Place limits on your spending habits to save<br/> yourself from uneccesarily losing money.</p1>
            <div className={styles['image2']}/>
            <h3>Statistics.</h3>
            <p2>Detailed graphs and data will be presented<br/> to you based off your spending habits.</p2>
            <div className={styles['image3']}/>
            <h4>Security.</h4>
            <p3>Implemented top of the line security protocols<br/> to keep your financial data safe and sound.</p3>
        </div>
    );
}