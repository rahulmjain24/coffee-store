import { NextPage } from "next"
import Image from "next/image";
import Link from "next/link";
import styles from './card.module.css'

interface Props {
    name: string;
    imgURL: string;
    href: string;
}

const Card: NextPage<Props> = (props) => {
    return <Link href={props.href}>
        <a className={styles.cardLink}>
            <div className={`${styles.container} glass`}>
                <div className={styles.cardHeaderWrapper}>
                    <h2 className={styles.cardHeader}>{props.name}</h2>
                </div>
                <div className={styles.cardImageWrapper}>
                    <Image 
                        className={styles.cardImage} 
                        src={props.imgURL} width={260} 
                        height={160} alt="cofee shop img" />
                </div>

            </div>

        </a>
    </Link>
}

export default Card