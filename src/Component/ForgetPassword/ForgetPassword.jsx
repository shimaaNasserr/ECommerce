import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'

export default function ForgetPassword() {
  let baseUrl = 'https://ecommerce.routemisr.com'
    let [codeFlag,setCodeFlag] = useState(true)
    let [errMsg , seterrMsg] = useState("")
    let navigate = useNavigate()
    let validate = Yup.object({
        email: Yup.string().required().email("enter valid email")
    })
    let Form1 = useFormik({
        initialValues: {
            email: ''
        },
        onSubmit: (vals) => {
           forgotPassword(vals)
        },
        validationSchema: validate

    })
    let Form2 = useFormik({
      initialValues: {
        resetCode: ''
    },
        onSubmit: (codevals) => {
            resetCode(codevals)
        },


    })
    async function forgotPassword(passvalue){
        let {data} = await axios.post(`${baseUrl}/api/v1/auth/forgotPasswords`,passvalue)
        console.log(data);

        
        if(data.statusMsg =='success'){
          setCodeFlag(false)

        }
    }
    async function resetCode(codevalue){
        let {data} = await axios.post(`${baseUrl}/api/v1/auth/verifyResetCode`,codevalue).catch((err)=>{
          seterrMsg(err.response.data.message)
        })
        console.log(data);
        if(data.status == 'Success'){
          navigate('/resetPassword')
        }

    }
   
  return (
    <>
{codeFlag? <form onSubmit={Form1.handleSubmit} className='mt-5'>
  <div>
    <label htmlFor="email">email</label>
    <input onChange={Form1.handleChange} type="email" name="email" id="email" className="form-control mt-1" />
    <p>{Form1.errors.email}</p>
  </div>
  <button className="btn btn-success">Send Message</button>
</form> : <form onSubmit={Form2.handleSubmit} className='mt-5'>
  <div>
    <label htmlFor="resetCode">reset Code</label>
    <input onChange={Form2.handleChange} type="text" name="resetCode" id="resetCode" className="form-control mt-1" />
    {errMsg !=""? <div className='alert alert-danger'>{errMsg}</div> : ""}
  </div>
  <button className="btn btn-success mt-2" type='submit'>reset Code</button>
</form>}




    </>
  )
}



