/* eslint-disable array-callback-return */
import styled from "styled-components";
import Dollar from "../svg/Dollar"
import Person from "../svg/Person"
import NumberInputComponent from "./NumberInputComponent";
import PercentageInputComponent from './PercentageInputComponent';

interface InputsProps {
    bill: string|number,
    setBill: (e:string) => void,
    tip: string|number, 
    setTip: (e:string) => void,
    customTip: string|number,
    setCustomTip: (e:string) => void,
    peopleNum: string|number,
    setPeopleNum: (e:string) => void,
}


const InputsMainComponent = ({bill, setBill, tip, setTip, customTip, setCustomTip, peopleNum, setPeopleNum}:InputsProps ) => {

  const percentageArray: string[] = ['5%', '10%', '15%', '25%', '50%'];

  const handleCustomTip = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setTip("")
    setCustomTip(e.target.value)
  }

    
  return ( 
    <InputsContainer>
      <NumberInputWraper>
        <InputLabel htmlFor="Bill">Bill</InputLabel>
        <NumberInputComponent 
            icon={Dollar} 
            value={bill} 
            errorColor={false} 
            setNumber={setBill} 
            id="Bill" 
        />
      </NumberInputWraper>

      <MainPercentageInputsWraper>
        <InputLabel>Select Tip %</InputLabel>
        <PercentageInputsContainer>
          {percentageArray.map((percentage):any => <PercentageInputComponent 
                key={percentage} 
                percentage={percentage} 
                tip={tip} 
                setTip={setTip} 
                setCustomTip={setCustomTip} 
            /> 
            )}
          <CustomPercentageInput type="number" placeholder="Custom" value={customTip} onChange={handleCustomTip}  />
        </PercentageInputsContainer>
      </MainPercentageInputsWraper>

      <NumberInputWraper>
        <LabelAndErrorContainer>
          <InputLabel htmlFor="People"> Number of People</InputLabel>
            {bill !== '' && peopleNum <= 0 && <ErrorText>Can’t be zero</ErrorText>}
        </LabelAndErrorContainer>
        <NumberInputComponent 
            icon={Person} 
            value={peopleNum} 
            errorColor={bill !== '' && peopleNum <= 0} 
            setNumber={setPeopleNum} 
            id="People"  
        />
      </NumberInputWraper>
    </InputsContainer>
  );
}
 
export default InputsMainComponent;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  margin: 32px 32px 0px 32px;
  @media (min-width: 1024px){
    margin: 45px 0px 48px 48px;
    gap: 40px;
    }
`
const NumberInputWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;

`
const LabelAndErrorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const InputLabel = styled.label`
  font-size: 16px;
  line-height: 24px;
  color: #5E7A7D;  
`
const ErrorText = styled.span`
  font-size: 16px;
  line-height: 24px;
  text-align: right;   
  color: #E17457;
`
const MainPercentageInputsWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
`

const PercentageInputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap:  wrap;
  gap: 16px;
  @media (min-width: 1024px){
    gap: 16px 14px;
    }
`

const CustomPercentageInput = styled.input`
  all: unset;
  box-sizing: border-box;
  background: #F3F9FA;
  color: #00474B;
  max-width: 146px;
  width: 100%;
  height: 48px;
  border-radius: 5px;
  font-size: 24px;
  line-height: 36px;
  text-align: right;
  padding: 6px 13px 6px 0;
  &::placeholder {
    color: #547878;
  }
  &:hover {
    cursor: pointer;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    border: 2px solid #26C2AE;
  }
  @media (min-width: 1024px){
      max-width: 118px;
      width: 100%;

  }

`