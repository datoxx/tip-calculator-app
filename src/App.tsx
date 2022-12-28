import styled from "styled-components";
import Logo from "./svg/Logo"
import Dollar from "./svg/Dollar"

function App() {
  return (
    <MainWrapper>
      <Logo />
      <CalculatorContainer>
        <InputsContainer>
          <NumberInputWraper>
            <InputLabel htmlFor="Bill">
             Bill
            </InputLabel>
            <IconAndInput>
              <Dollar />
              <NumberInput id="Bill" type="number" placeholder="0" />
            </IconAndInput>
          </NumberInputWraper>

          <MainPercentageInputsWraper>
            <InputLabel>Select Tip %</InputLabel>
            <PercentageInputsContainer>
              <PercentageInput type="button" value="5" />
              <PercentageInput type="button" value="10" />
              <PercentageInput type="button" value="15" />
              <PercentageInput type="button" value="20" />
              <PercentageInput type="button" value="40" />
              <CustomPercentageInput type="number" placeholder="Custom" />
            </PercentageInputsContainer>
          </MainPercentageInputsWraper>

          <NumberInputWraper>
            <InputLabel htmlFor="People">
               Number of People
              </InputLabel>
              <IconAndInput>
                <Dollar />
                <NumberInput id="People" type="number" placeholder="0" />
              </IconAndInput>
          </NumberInputWraper>
        </InputsContainer>

        <MainResultContainer>
          <TipAmountResultContainer>
            <TitleWraper>
              <ResultTitle>Tip Amount</ResultTitle>
              <ResultSubTitle>/ person</ResultSubTitle>
            </TitleWraper>
            <ResultNumber>$4.27</ResultNumber>
          </TipAmountResultContainer>

          <TotalResultContainer>
            <TitleWraper>
              <ResultTitle>Total</ResultTitle>
              <ResultSubTitle>/ person</ResultSubTitle>
            </TitleWraper>
            <ResultNumber>$32.79</ResultNumber>
          </TotalResultContainer>

          <RestButoon>RESET</RestButoon>
        </MainResultContainer>
      </CalculatorContainer>
    </MainWrapper>
  );
}

export default App;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #C5E4E7;
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
`
const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  margin: 32px 32px 0px 32px;
`
const NumberInputWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;

`
const InputLabel = styled.label`
  font-size: 16px;
  line-height: 24px;
  color: #5E7A7D;  
`
const IconAndInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  background: #F3F9FA;
  padding: 6px 17.5px 6px 19.3px;
  border-radius: 5px;
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
`
const PercentageInput = styled.input`
  all: unset;
  box-sizing: border-box;
  background: #00474B;
  color: #FFFFFF;
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
`

const MainResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 24px 0 24px;
  padding: 39px 22px 24px 24px;
  background: #00474B;
  border-radius: 15px;
`

const TipAmountResultContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const TotalResultContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
`
const TitleWraper = styled.div`
    display: flex;
    flex-direction: column;

`
const ResultTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
`
const ResultSubTitle = styled.div`
  font-size: 13px;
  line-height: 19px;
  color: #7F9D9F;
`
const ResultNumber = styled.div`
  font-size: 32px;
  line-height: 47px;
  text-align: right;
  letter-spacing: -0.666667px;
  color: #26C2AE;
`

const RestButoon = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #00474B;
  background: #26C2AE;
  border-radius: 5px;
  margin-top: 35px;
  &:hover {
    color: #00474B;
  }
`