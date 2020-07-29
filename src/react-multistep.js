import React, {  useContext } from 'react'
import { FormContext } from './context/FormContext'
import Navigator from './components/navigator'



export default function MultiStep(props) {
 
  const { setStepState, compState }= useContext(FormContext)
  
  const next = () => { 
    return setStepState(compState + 1) 
  }

  const handleKeyDown = evt => evt.which === 13 ? next(props.steps.length) : {}

  return (
    <div onKeyDown={handleKeyDown}>
      <Navigator steps={props.steps }/>
      <div>{props.steps[compState].component}</div>
    </div>
  )
}