import React, { createContext, useState} from 'react'

export const FormContext = createContext()

const FormContextProvider =(props) =>{
    const [data, setData ] =useState([{
        "trainer_name": "",
        "gender": "",
        "telephone": "",
        "email": "",
        "digital_address": "",
        "business_name": "",
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
        "years_practing":"",
        "trained_apprentice": "",
        "want_train_apprentice": "",
        "no_apprentices": "",
        "additional_support":"",
        "createdon": ""


    }])
    const addData = ( value)=>{
        setData([...data], )
    }

    const changeHandler=(e)=>{
        console.log(e.target.value, 'i see you');
        setData({[e.target.name]: e.target.value})
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        // setData([...data, ] )
        console.log(data, "submiting e");
    }
    return (
        <FormContext.Provider value={{ data, addData, changeHandler, submitHandler}}>
            { props.children }
        </FormContext.Provider>
    )
}

export default FormContextProvider
