import styled from "styled-components";

interface ResultProps {
    bill: string|number,
    setBill: (e:string) => void,
    tip: string|number, 
    setTip: (e:string) => void,
    customTip: string|number,
    setCustomTip: (e:string) => void,
    peopleNum: string|number,
    setPeopleNum: (e:string) => void,
    tipAmount: number,
    total: number,
}


const Result = ({bill, setBill, tip, setTip, customTip, setCustomTip, peopleNum, setPeopleNum, tipAmount, total}:ResultProps ) => {


    const handleReset = () => {
        setBill("");
        setTip("");
        setCustomTip("");
        setPeopleNum("");
      }

    return ( 
        <MainResultContainer>
        <TipAmountResultContainer>
          <TitleWraper>
            <ResultTitle>Tip Amount</ResultTitle>
            <ResultSubTitle>/ person</ResultSubTitle>
          </TitleWraper>
          <ResultNumber>${peopleNum > 0 ? tipAmount.toFixed(2) : 0.00.toFixed(2)}</ResultNumber>
        </TipAmountResultContainer>

        <TotalResultContainer>
          <TitleWraper>
            <ResultTitle>Total</ResultTitle>
            <ResultSubTitle>/ person</ResultSubTitle>
          </TitleWraper>
          <ResultNumber>${peopleNum > 0 ? total.toFixed(2) : 0.00.toFixed(2)}</ResultNumber>
        </TotalResultContainer>

        <RestButoon setColor={bill === '' && tip === '' && customTip === '' && peopleNum === ''} onClick={handleReset}>RESET</RestButoon>
      </MainResultContainer>
     );
}
 
export default Result;

const MainResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 327px;
  margin: 0 24px 0 24px;
  padding: 39px 22px 24px 24px;
  background: #00474B;
  border-radius: 15px;
  @media (min-width: 1024px){
      max-width: 413px;
      width: 100%;
      margin: 32px 32px 32px 0px;
      padding: 40px;
  }
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
  @media (min-width: 1024px){
    font-size: 48px;
    line-height: 71px;
    letter-spacing: -1px;
  }
`

interface RestButoonProps  {
  setColor: boolean,
}

const RestButoon = styled.button<RestButoonProps>`
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
  background:${(props) => props.setColor ? '#0D686D':'#26C2AE'} ;
  border-radius: 5px;
  margin-top: 35px;
  &:hover {
    cursor: pointer;
    background: #9FE8DF;
    color: #00474B;
    
  }
  @media (min-width: 1024px){
    margin-top: 122px;
  }
`