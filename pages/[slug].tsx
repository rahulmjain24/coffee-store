import { useRouter } from "next/router"
import Head from "next/head"

const Slug = () => {
    const data = useRouter()
    
    return (
        <div>
            <Head>
                <title>{data.query.slug}</title>
            </Head>
            <p>
                {data.query.slug}
            </p>
        </div>
    )
}

export default Slug