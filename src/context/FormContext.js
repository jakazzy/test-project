import React, { createContext, useState} from 'react'

export const FormContext = createContext()

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
  
    const changeHandler=(e)=>{
        console.log(e.target.value, 'i see you');
        const value = { [e.target.name]: e.target.value}
        setData( {...data,...value }  )
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(data, 'are these there?');
        
    }

    return (
        <FormContext.Provider value={{ data, changeHandler, handleSubmit}}>
            { props.children }
        </FormContext.Provider>
    )
}

export default FormContextProvider
