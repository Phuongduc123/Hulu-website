import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Nav from '../components/Nav'
import requests from '../utils/requests'
import Result from '../components/Result'

const Home = ({results}) => {
  return (
    <div >
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="gY-HgIJR4mA_mzHK6nzkhZV1KCxNvF81Igx5Nxtnwx4" />
      </Head>
      {/* Header */}
      <Header/>
      
      {/* Nav */}
      <Nav/>
      {/* Result */}
      <Result results={results}/>
    </div>
  )
}

export default Home;

export async function getServerSideProps(context){
  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then(res=> res.json())
  return {
    props:{
      results: request.results || null,
    }
  }
}
