import React from "react";


const Pizza = (props) => {
    console.log(props)

    const {inputChange, formValues, formErrors, boughtNow} = props

    return(
        <div>
            <form onSubmit={boughtNow}>
                <label>
                    name: {formErrors.name}
                    <input onChange={(e) => inputChange(e.target.name, e.target.value)} 
                    type="text" name="name" value={formValues.name} />
                </label>
                <label>
                    size: {formErrors.size}
                    <select onChange={(e) => inputChange(e.target.name, e.target.value)} 
                    name="size" value={formValues.size}>
                        <option value="Select">Select</option>
                        <option value="10 inch">Small 10"</option>
                        <option value="14 inch">Medium 14"</option>
                        <option value="16 inch">Large 16"</option>
                        <option value="18 inch">Extra Large 18"</option>
                    </select>
                </label>
                <label>
                    topping1: {formErrors.topping1}
                    <input onChange={(e) => inputChange(e.target.name, e.target.value)} 
                    type="checkbox" name="topping1" value={formValues.topping1}/>
                </label>
                <label>
                    topping2: {formErrors.topping2}
                    <input onChange={(e) => inputChange(e.target.name, e.target.value)} 
                    type="checkbox" name="topping2" value={formValues.topping2}/>
                </label>
                <label>
                    special: {formErrors.special}
                    <input onChange={(e) => inputChange(e.target.name, e.target.value)} 
                    type="text" name="special" value={formValues.special}/>
                </label>
                <button type="submit" testid="testSubmit" disabled={props.disabled}>Order Pizza Now!!</button>
            </form>
        </div>
    )
}
export default Pizza