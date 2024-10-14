import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [principle,setprinciple]=useState(0);
  const [rate,setrate]=useState(0);
  const [year,setYear]=useState(0);
  const [intrest,setinterest]=useState(0)

  //state to store whether input filed values are valid

  const [isprincipleValid,setIsPrincipleValid]=useState(true)
  const [isRateValid,setIsRateValid]=useState(true)
  const [isYearValid,setIsYearValid]=useState(true)

const vaildate=(e)=>{
  const {name,value}=e.target;
  if (!! value.match(/^[1-9][0-9]*\.?[0-9]*$/)){
    if(name === 'principle'){
      setprinciple(value)
      setIsPrincipleValid(true)
    }
    else if(name==='intrestRate'){
      setrate(value);
      setIsRateValid(true)
    }
    else{
      setYear(value);
      setIsYearValid(true)
    }
  }
  else{
    if(name === 'principle'){
      setprinciple(value)
      setIsPrincipleValid(false)
    }
    else if(name==='intrestRate'){
      setrate(value);
      setIsRateValid(false)
    }
    else{
      setYear(value);
      setIsYearValid(false)
    }
  }

}


  const handleCalculate=(e)=>{
    e.preventDefault()
    console.log("principle amount entered",principle)
console.log("intrest rate entered",rate)
console.log("Total amount entered",year)
const result=((principle*rate*year)/100)
setinterest(result)

  }
  const resetValues=()=>{
    setinterest(0)
    setYear(0);
    setprinciple(0)
    setrate(0)
  }
  return (
    <>
      <div
        style={{ backgroundColor: "black", height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div style={{ backgroundColor: "white", width: "500px", height:'600px' }} className='p-5 rounded'>
          <h2 className='text-primary'style={{fontFamily:"cursive"}} >simple Interst Application</h2>
          <p className='text-success'>Calculate your simple interst easliy</p>
          <div style={{ height: "150px", backgroundColor: "orange" }}
            className='p-3 mt-3 rounded shadow d-flex justify-content-center align-items-center flex-column '
          >
            <h2 className="fw-bold">&#8377;{intrest}</h2>
            <p>Total simple interst</p>
          </div>
          <form onSubmit={handleCalculate}>
            <div className="mt-3 ">
              <TextField
                id="outlined-basic"
                label="principle Amount"
                variant="outlined"
                className="w-100"
                name="principle"
                value={principle || ""}
                onChange={(e)=>vaildate(e)}
              />
              {
                !isprincipleValid &&
                <p className='text-danger'>Invalid Input</p>
              }
            </div>
            <div className="mt-3 d-flex justify-content-center align-items-center flex-column">
              <TextField
                id="outlined-basic"
                label="Rate of intrest in%"
                variant="outlined"
                className="w-100"
                name="intrestRate"
                value={rate || ""}
                onChange={(e)=>vaildate(e)}
              />
               {
                !isRateValid &&
                <p className='text-danger'>Invalid Input</p>
              }

            </div>
            <div className="mt-3 d-flex justify-content-center align-items-center flex-column">
              <TextField
                id="outlined-basic"
                label="Total Years"
                variant="outlined"
                className="w-100"
                name="totalYears"
                value={year || ""}
                onChange={(e)=>vaildate(e)}
              />
                  {
                !isYearValid &&
                <p className='text-danger'>Invalid Input</p>
              }
            </div>
            <div className="mt-3  justify-content-between  d-flex-column">
              <Button
                variant="contained"
                color="success"
                style={{ width: "190px", padding: "10px" }}
                type="submit"
                disabled={isprincipleValid && isRateValid && isYearValid? false:true}
              >
                calculate
              </Button>
              <Button className='ms-3'
                variant="outlined"
                color="primary"
                style={{ width: "190px", padding: "10px" }}
                type="submit"
                onClick={()=>resetValues()}
              >
                Reset
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
