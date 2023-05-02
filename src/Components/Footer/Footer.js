import React from 'react'
import styles from '../../styles/Footer.module.css';

const Footer=({nextStep ,backStep} )=> {

    
  return (
    <>
    <div > 
    <footer className={styles.ft}>
    
   <div className={styles.ft1}>
   
   <div>
   <button class={styles.button2} onClick={backStep}>
    Back
    </button>
   </div>
   
   <div>
   <button class={styles.button1} onClick={nextStep}>
     Next
    </button>
   </div>
   
    
   </div>
    </footer>
    </div>
    </>
   
  )
}

export default Footer