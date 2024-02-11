import styles from './Facts.module.css';

export default function Facts(){
    return(
        <div className={styles['facts-container']}>
            <div>Will add some fake facts here such as "we're used by X company" and potentially some user reviews</div>
            <div>Will probably add another component with videos saying how to use it and potentially a FAQ portion.</div>
            <div>end with a footer</div>
        </div>
    );
}