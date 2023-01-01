import styled from "styled-components";
import Logo from "./svg/Logo"
import { useState } from "react";
import InputsMainComponent from './components/InputsMainComponent';
import Result from './components/Result';


function App() {

  const [bill, setBill] = useState<string|number>('')
  const [tip, setTip] = useState<string|number>('')
  const [customTip, setCustomTip] = useState<string|number>('')
  const [peopleNum, setPeopleNum] = useState<string|number>('')

  let tipAmount = customTip === ""
     ? ((Number(tip)/100) *Number(bill))/Number(peopleNum) 
     :( (Number(customTip)/100) *Number(bill))/Number(peopleNum);
  
  let total = customTip === "" 
    ? (((100 + Number(tip))/100)*Number(bill))/Number(peopleNum) 
    : (((100 + Number(customTip))/100)*Number(bill))/Number(peopleNum);
  

  return (
    <MainWrapper>
      <Logo />
      <CalculatorContainer>
        <InputsMainComponent 
          bill={bill} 
          setBill={setBill} 
          tip={tip} 
          setTip={setTip} 
          customTip={customTip} 
          setCustomTip={setCustomTip} 
          peopleNum={peopleNum} 
          setPeopleNum={setPeopleNum}
         />
        
        <Result 
          bill={bill} 
          setBill={setBill} 
          tip={tip} 
          setTip={setTip} 
          customTip={customTip} 
          setCustomTip={setCustomTip} 
          peopleNum={peopleNum} 
          setPeopleNum={setPeopleNum}
          tipAmount={tipAmount}
          total={total}
        />     
      </CalculatorContainer>
    </MainWrapper>
  );
}

export default App;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #C5E4E7;
  @media (min-width: 1024px){
      height: 1024px;
    }
`
const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 375px;
  width: 100%;
  margin-top: 41px;
  gap: 32px;
  border-radius: 25px 25px 0px 0px; 
  box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
  background: #FFFFFF;
  @media (min-width: 1024px){
    flex-direction: row;
    max-width: 920px;
    width: 100%;
    margin-top: 87px;
    border-radius: 25px;
    gap: 48px;
    }
`