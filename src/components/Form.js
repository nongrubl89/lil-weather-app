import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
padding: 1em;
margin: .5em;
border: none;
border-radius: 12px;
font-family: 'Inconsolata';
font-weight: 600;
`;

const ButtonInput = styled(Input)
`background-color: #0077b6;
color:white;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
`

const Label = styled.label`
color: #caf0f8`

const ZipcodeInput = styled.form`
display: grid;
align-content: end;
justify-items: center;
grid-template-columns: 70% 30%;
grid-column-start:2;
grid-row-start: 2;
align-items: center;
align-self: center;
`

function Form(props) {

    return (
            
            <ZipcodeInput onSubmit={props.onSubmit}>
              <Label>
                <Input onChange={props.onChange} type="text" placeholder='Zip Code' value={props.zip} />
            </Label>
            <ButtonInput type="submit" value="Submit" />
            </ZipcodeInput>
      
    )
}

export default Form
