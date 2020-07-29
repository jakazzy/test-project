import React, { createContext, useState} from 'react'
import SecureLS from 'secure-ls'
import {sendData } from '../api/api'

export const FormContext = createContext()
// manually edit the number of steps here
const steps = 4

window.onbeforeunload=function(){
  const ls = new SecureLS({encodingType: 'aes', encryptionSecret: process.env.REACT_APP_KEY})
  ls.clear()
}
const FormContextProvider =(props) =>{
  const ls = new SecureLS({encodingType: 'aes', encryptionSecret: process.env.REACT_APP_KEY})
    const [data, setData ] =useState({
        "trainer_id": "",
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

  const genRand=() =>{
      return Math.floor(Math.random()*89999+10000);
   }

   const newDate =()=>{
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); 
      const yyyy = today.getFullYear();
      const date = mm + '/' + dd + '/' + yyyy;
      return date
   }

    const addTrainer = async()=>{
      
      const val = {...data, "createdon": newDate(), "trainer_id": genRand()}
      console.log(val, 'this is the data sent');
     return await sendData(val)
    }

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
   
    }

    const setItem =(key, value)=>{
      ls.set(key, {data: value})
    }
  
    const getItem =(key)=>{
      const string = ls.get(key)
      return string
    }

    const getAllKeys=()=>{
      const data = ls.getAllKeys()
      return data
    }

    const clearAll=()=>{
      ls.clear()
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    

    return (
        <FormContext.Provider value={{ setItem, getItem, getAllKeys, clearAll, data, setData, changeHandler, handleSubmit, stylesState, buttonsState, setStepState, compState, show, setShow, addTrainer}}>
            { props.children }
        </FormContext.Provider>
    )
}

export default FormContextProvider
