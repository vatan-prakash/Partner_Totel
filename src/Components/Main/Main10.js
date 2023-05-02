export default function Main10() {
    return ( <>
  
        <div className='content1'>
           
            <div className="heading">Set your price limit</div>
            <div className="role w-full"><p>Short titles work best. Have fun with it – you can always change it later..</p></div>
            <div>
            <div style={{margin:'1rem auto', }}>
              
              <div className='main_btn'>
                 <div>Set price</div>
                  <div className='right'>
                    <div className='btn' onClick={() => decrease('Mon')}>-</div>
                    <div style={{width: '25px',textAlign:'center'}}>{Mon}</div>
                    <div className='btn' onClick={() => setmon(Mon +1)}>+</div>
                  </div>
              </div>
              </div>
        
            </div>
          </div>
        </>
    )}