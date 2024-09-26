import { useState } from "react";


const Form = ({children,initialState,onSubmit}) => {

    const [values,setValues] =useState({initialState})

    const handlechange = e => {

        const{name,value,checked,type} =e.target;

        //utilizando callback
        setValues((prev)=> ({

            ...prev,

            [name]: type === "checkbox" ? checked:value,
        
        }));

    };

    const handleSubmit = e => {

        e.preventDefault();
        onSubmit(values)

    }

    //Children esta ejecutando ese parametro, lo esta empujando
    return children({values,handlechange,handleSubmit})
}

export default Form;