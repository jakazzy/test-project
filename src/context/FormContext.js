import React, { createContext, useState} from 'react'

export const FormContext = createContext()
// manually edit the number of steps here
const steps = 4

const FormContextProvider =(props) =>{

    const [data, setData ] =useState({
        "trainer_name": "",
        "gender": "",
        "telephone": "",
        "email": "",
        "digital_address": "",
        "business_name": "",
        "business_location": "",
        "region": "",
        "district":"",
        "registered": "",
        "registration_no": "",
        "has_tin": "",
        "tin_no": "",
        "association_member": "",
        "nvti_cert": "",
        "rcvd_nbssi_support": "",
        "want_nbssi_support":"",
        "support_description": "",
        "years_practicing":"",
        "trained_apprentice": "",
        "want_train_apprentice": "",
        "no_apprentices": "",
        "additional_support":"",
        "createdon": ""
    })

    const getNavStyles = (indx, length) => {
        let styles = []
        for (let i = 0; i < length; i++) {
          if (i < indx) {
            styles.push('done')
          } else if (i === indx) {
            styles.push('doing')
          } else {
            styles.push('todo')
          }
        }
        return styles
      }
  
    
const getButtonsState = (indx, length) => {
    if (indx > 0 && indx < length - 1) {
      return {
        showPreviousBtn: true,
        showNextBtn: true
      }
    } else if (indx === 0) {
      return {
        showPreviousBtn: false,
        showNextBtn: true
      }
    } else {
      return {
        
        showPreviousBtn: true,
        showNextBtn: false
      }
    }
  }
  
    const [stylesState, setStyles] = useState(getNavStyles(0, steps));
    const [compState, setComp] = useState(0)
    const [buttonsState, setButtons] = useState(getButtonsState(0, steps))
    const [show, setShow] = useState(true);

    const setStepState = (indx) => {
        setStyles(getNavStyles(indx, steps))
        setComp(indx < steps ? indx : compState)
        setButtons(getButtonsState(indx, steps))
      }
    const changeHandler=(e)=>{
        // console.log(e.target.value, 'i see you');
        const value = { [e.target.name]: e.target.value}
        setData( {...data,...value }  )
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(data, 'are these there?');
        
    }
    

    return (
        <FormContext.Provider value={{ data, changeHandler, handleSubmit, stylesState, buttonsState, setStepState, compState, show, setShow}}>
            { props.children }
        </FormContext.Provider>
    )
}

export default FormContextProvider
