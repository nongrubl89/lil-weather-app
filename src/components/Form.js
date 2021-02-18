import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
padding: 1em;
margin: .5em;
border: none;
border-radius: 12px;
`;

const ButtonInput = styled(Input)
`background-color: #0077b6;
color:white;`

const Label = styled.label`
color: #caf0f8`

const ZipcodeInput = styled.form`
display: grid;
align-content: end;
justify-items: center;
grid-template-columns: 70% 30%;
grid-column-start:2;
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
