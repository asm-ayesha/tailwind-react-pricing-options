
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOption from './components/PricingOptions/PricingOption'

const pricingPromise = fetch("/pricingData.json").then(res=>res.json())

function App() {


  return (
    <>
    <NavBar></NavBar>
    <PricingOption pricingPromise={pricingPromise}></PricingOption>
    </>
  )
}

export default App
