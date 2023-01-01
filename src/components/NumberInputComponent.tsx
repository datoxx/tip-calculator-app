import styled from "styled-components";


interface NumberInputProps {
  icon: any,
  value: string|number,
  errorColor: boolean,
  setNumber: (e:string) => void,
  id: string,
}

const NumberInputComponent = ({icon, value, errorColor, setNumber, id}:NumberInputProps) => {

  const handleInputNubers = (e: React.ChangeEvent<HTMLInputElement>):void => {
    if(e.target.id === id) {
      setNumber(e.target.value) 
    } else {
      setNumber(e.target.value)
    }
  }

  return ( 
      <IconAndInput errorColor = {errorColor }>
        {icon}
        <NumberInput 
          value={value}
          onChange={handleInputNubers}
          id={id} 
          type="number" 
          placeholder="0"
        />
      </IconAndInput>
    );
}
 
export default NumberInputComponent;

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
  outline:  ${(props) => props.errorColor ? '#E17457 2px solid' : '' };
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