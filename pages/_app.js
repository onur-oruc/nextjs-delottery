import Head from "next/head"
import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import Header from "../components/Header"

const APP_ID = process.env.NEXT_PUBLIC_MORALIS_APP_ID
const SERVER_URL = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>NFT Marketplace</title>
                <meta name="description" content="NFT Marketplace" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
                <NotificationProvider>
                    <Header />
                    <Component {...pageProps} />
                </NotificationProvider>
            </MoralisProvider>
        </div>
    )
}

export default MyApp
