import React from 'react'

function Form(props) {
    return (
        <div>   
            <form onSubmit={props.onSubmit}>
              <label>Zip Code:
                <input onChange={props.onChange} type="text" name="zip" value={props.zip} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form
