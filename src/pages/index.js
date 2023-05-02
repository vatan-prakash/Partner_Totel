import Head from 'next/head';
import Navbar from '../Components/Navbar/Navbar';
import  Main  from '../Components/Main/main';
import Footer from '../Components/Footer/Footer';
import {useState} from 'react'


function index() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  }
  
  const backStep = () => {
    if(step == 1) return;
    setStep(step - 1);
  }

return (

        <>
       <Head>
       <title>Totel Partner website</title>
       </Head>   
       <Navbar/>
       <Main step={step} />
      <Footer nextStep={nextStep} backStep={backStep} />

        </>
)

}
export default index
