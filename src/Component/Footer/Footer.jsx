import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <footer className='bg-light my-5 py-5 mb-auto '>
       
        <div className="container">
        <h4>Get the FreshCart App</h4>
        <p>We will send you a link, open it on your phone to download the app.</p>
        <form>
            <div className="row">
                <div className="col-md-10">
                    <input type="text"  placeholder='Email..' className='form-control ms-2'/>
                </div>
                <div className="col-md-2">
                    <button className='btn btnn text-white'>Share App Link</button>
                </div>
            </div>
        </form>
        </div>
    </footer>
  )
}

