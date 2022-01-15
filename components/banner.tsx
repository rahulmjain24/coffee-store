import { NextPage } from 'next'
import styles from './Banner.module.css'

interface Props {
    buttonText: string;
    buttonHandler(): void
}

const Banner: NextPage<Props> = (props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <span className={styles.title1}>Coffee</span> <span className={styles.title2}>Connoisseur</span>
            </h1>
            <p className={styles.subTitle}>Discover you local coffee shops</p>
            <div className={styles.buttonWrapper}>
                <button className={styles.button} onClick={props.buttonHandler}>{props.buttonText}</button>
            </div> 
        </div>
    )
}

export default Banner