import styled from "styled-components";
import ResultNumberComponent from './ResultNumberComponent';

interface ResultProps {
    bill: string|number,
    setBill: (e:string) => void,
    tip: string|number, 
    setTip: (e:string) => void,
    customTip: string|number,
    setCustomTip: (e:string) => void,
    peopleNum: string|number,
    setPeopleNum: (e:string) => void,
}

const ResultComponent = ({bill, setBill, tip, setTip, customTip, setCustomTip, peopleNum, setPeopleNum}:ResultProps ) => {

  let tipAmount = customTip === ""
    ? ((Number(tip)/100) *Number(bill))/Number(peopleNum) 
    :( (Number(customTip)/100) *Number(bill))/Number(peopleNum);

  let total = customTip === "" 
    ? (((100 + Number(tip))/100)*Number(bill))/Number(peopleNum) 
    : (((100 + Number(customTip))/100)*Number(bill))/Number(peopleNum);



    const handleReset = () => {
        setBill("");
        setTip("");
        setCustomTip("");
        setPeopleNum("");
      }

    return ( 
        <MainResultContainer>
        <TipAmountResultContainer>
          <ResultNumberComponent title="Tip Amount" peopleNum={peopleNum} amount={tipAmount} />
        </TipAmountResultContainer>

        <TotalResultContainer>
        <ResultNumberComponent title="Tip Amount" peopleNum={peopleNum} amount={total} />

        </TotalResultContainer>

        <RestButoon setColor={bill === '' && tip === '' && customTip === '' && peopleNum === ''} onClick={handleReset}>RESET</RestButoon>
      </MainResultContainer>
     );
}
 
export default ResultComponent;

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