
import styled from "styled-components";


interface InputsProps {
    percentage: string,
    tip: string|number, 
    setTip: (e:string) => void,
    setCustomTip: (e:string) => void,

}


const PercentageInputComponent = ({percentage, tip,  setTip, setCustomTip}:InputsProps) => {

    const handleTip = (e: any):void => {
        setCustomTip("")
        const number = e.target.value.slice(0,-1);
        setTip(number);
    
      }

    return ( 
        <PercentageInput setColor={tip === percentage.slice(0,-1)} type="button" value={percentage} onClick={handleTip} /> 
     );
}
 
export default PercentageInputComponent;



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