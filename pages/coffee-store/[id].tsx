import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import coffeeStoreData from '../../data/coffee-store.json'
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import styles from '../../styles/coffee-store.module.css'

interface Props {
    coffeeStore: {
        id: number;
        imgUrl: string;
        name: string;
        address: string;
        neighbourhood: string;
        websiteUrl: string;
    }
}

interface StaticProps extends ParsedUrlQuery {
    id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params as StaticProps
    return {
        props: {
            coffeeStore: coffeeStoreData.find(coffeeStore => {
                return coffeeStore.id.toString() === id;
            })
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = coffeeStoreData.map(data => {
        return {
            params: {
                id: data.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: true
    }
}


const CoffeeStore: NextPage<Props> = (props) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    const { name, address, neighbourhood, imgUrl } = props.coffeeStore

    const handleUpvoteButton = () => {
        console.log('Up vote button!')
    }

    return (
        <div className={styles.layout}>
            <Head>
                <title>{name}</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.col1}>
                    <div className={styles.backToHomeLink}>
                        <Link href="/">
                            <a>Back to home page</a>
                        </Link>
                    </div>
                    <div className={styles.namWrapper}>
                        <h1 className={styles.name}>{name}</h1>
                    </div>
                    <Image src={imgUrl} width={600} height={360} alt={name} className={styles.storeImg} />
                </div>
                <div className={`${styles.col2} glass`}>
                    <div className={styles.iconWrapper}>
                        <Image src="/static/icons/places.svg" width={24} height={24} alt={name} />
                        <p className={styles.text}>{address}</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <Image src="/static/icons/nearMe.svg" width={24} height={24} alt={name} />
                        <p className={styles.text}>{neighbourhood}</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <Image src="/static/icons/star.svg" width={24} height={24} alt={name} />
                        <p className={styles.text}>1</p>
                    </div>
                    <button 
                        className={styles.upvoteButton} 
                        onClick={handleUpvoteButton}>Up vote!</button>
                </div>
            </div>


        </div>
    )
}

export default CoffeeStore;