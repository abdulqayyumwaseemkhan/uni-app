import React, {useState} from "react";

const HookRedux = ()=>
{
    const [myNum, SetNum] = useState(0);
    let val = 'Abdul Qayyum';
    const noSub = ()=>{
        SetNum(myNum-1);
    }
    const noAdd =()=>{
        SetNum(myNum+1);
    }
    const refresh = ()=>{
        SetNum(0);
    }
    return(
        
        <div class="container text-center">
        <div class="row" style={{backgroundColor: '#D3D9D4'}}>
          <div class="col">
          <div className="container-sm" style={{ background: '#ADBBDA', marginTop: '0.5rem', textAlign: 'center', padding: '2rem', height: '30rem' }}>
            <h3 style={{color: 'white', marginBottom: '3rem', marginTop: '2rem'}}>Concept 5</h3>
            <h1 style={{color: 'white', marginBottom: '3rem', marginTop: '2rem'}}>{myNum}</h1>
            <button style={{marginRight: '10px', marginBottom: '10px'}} className="btn btn-danger"  onClick={noSub}>Decrement</button>
            <button style={{marginRight: '10px', marginBottom: '10px'}} className="btn btn-success" onClick={noAdd} >Increment</button>
            <button style={{marginRight: '10px', marginBottom: '10px'}} className="btn btn-primary" onClick={refresh}>Reset</button>
        </div>
          </div>
          <div class="col">Concept 6
          </div>
          
        </div>
      </div>
    )
};

export default HookRedux;