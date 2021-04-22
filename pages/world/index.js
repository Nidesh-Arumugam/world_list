import Head from "next/head"
import styles from '../../styles/world.module.css'
import Link from 'next/link'

export const getStaticProps=async()=>{

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props:{
            world: data
        }
    }
}

const World = ({world}) => {
    return ( 
    <>
        <Head>
            <title>Project ~ World Listing</title>
            <meta name="keywords" content="world"/>
        </Head>
        
        <div>
            <h1>
                Welcome to our world
            </h1>
            {world.map(world=>(
                <Link href={'/world/'+ world.id}key= {world.id}>
                    <a className={styles.single}>
                        <h3>{world.name}</h3>
                    </a>
                    </Link>
            ))}
        </div> 
    </>
 );
}
 
export default World;