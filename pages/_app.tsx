import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../charts/BarChart.js';




function MyApp({ Component, pageProps }: AppProps) {
  const [userData, setUserData] = useState(
    {
      labels: ,
      datasets: []  
    }
  )


  return <Component {...pageProps} BarChart chartData={} />
}

export default MyApp
