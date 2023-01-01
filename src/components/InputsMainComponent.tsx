import styled from "styled-components";
import Dollar from "../svg/Dollar"
import Person from "../svg/Person"

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

    const handleInputNubers = (e: React.ChangeEvent<HTMLInputElement>):void => {
        if(e.target.id === "Bill") {
         setBill(e.target.value) 
        } else {
          setPeopleNum(e.target.value)
        }
      }
    
      const handleTip = (e: any):void => {
        setCustomTip("")
        const number = e.target.value.slice(0,-1);
        setTip(number);
    
      }
    
      const handleCustomTip = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setTip("")
        setCustomTip(e.target.value)
      }

      
    return ( 
        <InputsContainer>
          <NumberInputWraper>
            <InputLabel htmlFor="Bill">
             Bill
            </InputLabel>
            <IconAndInput errorColor = {false }>
              <Dollar />
              <NumberInput 
                value={bill}
                onChange={handleInputNubers}
                id="Bill" 
                type="number" 
                placeholder="0"
              />
            </IconAndInput>
          </NumberInputWraper>

          <MainPercentageInputsWraper>
            <InputLabel>Select Tip %</InputLabel>
            <PercentageInputsContainer>
              <PercentageInput setColor={tip === '5'} type="button" value="5%" onClick={handleTip} /> 
              <PercentageInput  setColor={tip === '10'} type="button" value="10%" onClick={handleTip} /> 
              <PercentageInput  setColor={tip === '15'} type="button" value="15%" onClick={handleTip} /> 
              <PercentageInput setColor={tip === '25'}  type="button" value="25%" onClick={handleTip} /> 
              <PercentageInput  setColor={tip === '50'} type="button" value="50%" onClick={handleTip} /> 
              <CustomPercentageInput type="number" placeholder="Custom" value={customTip} onChange={handleCustomTip}  />
            </PercentageInputsContainer>
          </MainPercentageInputsWraper>

          <NumberInputWraper>
            <LabelAndErrorContainer>
              <InputLabel htmlFor="People">
                Number of People
                </InputLabel>
                {bill !== '' && peopleNum <= 0 && <ErrorText>Can’t be zero</ErrorText>}
            </LabelAndErrorContainer>
              <IconAndInput  errorColor = {bill !== '' && peopleNum <= 0 }>
                <Person />
                <NumberInput 
                  value={peopleNum}
                  onChange={handleInputNubers}
                  id="People" 
                  type="number" 
                  placeholder="0" 
                />
              </IconAndInput>
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

interface ErorrProps  {
  errorColor: boolean,
}

const IconAndInput = styled.div<ErorrProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  background: #F3F9FA;
  padding: 6px 17.5px 6px 19.3px;
  border-radius: 5px;
  border:  ${(props) => props.errorColor ? '#E17457 2px solid' : '' };
  &:hover {
    cursor: pointer;
  }
  &:focus-within {
    outline: 2px solid #26C2AE;
  }
`

const NumberInput = styled.input`
  all: unset;
  box-sizing: border-box;
  height: 100%;
  width: 250px;
  text-align:right;
  color: #00474B;
  font-size: 24px;
  line-height: 36px;
  &::placeholder {
    opacity: 0.35;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media (min-width: 1024px){
    width: 350px;
    }
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

interface InputColorProps  {
  setColor: boolean,
}


const PercentageInput = styled.input<InputColorProps>`
  all: unset;
  box-sizing: border-box;
  background: ${(props) => props.setColor ?  '#26C2AE' : '#00474B'} ;
  color: ${(props) => props.setColor ? '#00474B' : '#FFFFFF' } ;
  max-width: 146px;
  width: 100%;
  height: 48px;
  border-radius: 5px;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  padding: 6px 0 6px 0;
  &:hover {
    cursor: pointer;
    background: #9FE8DF;
    color: #00474B;
  }
  @media (min-width: 1024px){
      max-width: 117px;
      width: 100%;
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