import styled from "styled-components";

interface ResultProps {
    title: string,
    peopleNum: string|number,
    amount: number,
}

const ResultNumberComponent = ({title, peopleNum, amount}: ResultProps) => {
    return ( 
      <>
        <TitleWraper>
            <ResultTitle>{title}</ResultTitle>
            <ResultSubTitle>/ person</ResultSubTitle>
        </TitleWraper>
        <ResultNumber>${peopleNum > 0 ? amount.toFixed(2) : 0.00.toFixed(2)}</ResultNumber>
      </>
     );
}
 
export default ResultNumberComponent;

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