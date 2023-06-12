import { Provider } from "react-redux";
import {store} from "../redux/store"
import Main from "@/containers/Main";
import Head from "next/head";



export default function Home() {

  
  return (
    <main className="">
      <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1" />
      <link rel="shortcut icon" href="/logoShort.svg" />
      <link href="https://fonts.cdnfonts.com/css/product-sans" rel="stylesheet" />
      <title>TradeJot</title>
                
      </Head>
      <Provider store={store}>
        
        <Main/>

      </Provider>
    </main>
  )
}
