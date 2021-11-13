import { useState, useEffect } from "react";
import {Link, Switch, Route, useHistory} from "react-router-dom"
import * as yup from "yup"
import axios from "axios";
import Completion from "./components/Completion";
import Home from "./components/Home"
import Pizza from "./components/Pizza";


import "./App.css"
const formSchema = yup.object().shape({
  name: yup.string().required("Name is required").min(2, "Minimum of 2 characters for your name"),
    size: yup.string().oneOf(['10 inch','14 inch','16 inch','18 inch'],"Size is Required"),
    topping1: yup.boolean(),
    topping2: yup.boolean(),
    special: yup.string(),
})

const initialOrderForm={
    name: "",
    size: "",
    topping1: false,
    topping2: false,
    special: "",
}
const initialOrderFormErrors={
  name: "",
  size: "",
  topping1: "",
  topping2: "",
  special: "",
}

const App = () => {

let history = useHistory()

  const [size, setSize] = useState({})
  const [formValues, setFormValues] = useState(initialOrderForm)
  const [formErrors, setFormErrors] = useState(initialOrderFormErrors)
  const [disabled, setDisabled] = useState(true)

  const boughtNow = (event) => {
    event.preventDefault()
    axios.post("https://reqres.in/api/orders", formValues)
    .then(res => {
      console.log(res.data)
      setSize(res.data)
    })
    .finally(()=>{
      history.push("/completion")
    })
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(()=>{
      setFormErrors({...formErrors, [name]:''})
    })
    .catch((error)=>{
      setFormErrors({...formErrors, [name]: error.errors[0]})
    })
  }

  const inputChange = (name, value) => {
    validate(name,value)
    console.log(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  useEffect(()=>{
    formSchema.isValid(formValues)
      .then((valid)=> setDisabled(!valid))
  }, [formValues])

  return (
    <>
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link className="navbar" to="/">Home</Link>
          <Link to="/completion" ></Link>
        </nav>
      </header>
      
      <main>
      <Switch>
        <Route path='/completion'>
          <Completion size={size} />
        </Route>
        <Route path='/pizza'>
          <Pizza 
          boughtNow = {boughtNow}
          inputChange = {inputChange}
          formValues = {formValues}
          formErrors = {formErrors}
          disabled = {disabled}
           />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      </main>
    </>
  );
};
export default App;
