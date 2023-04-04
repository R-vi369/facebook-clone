import React from 'react'
import "./Login.css";
function Login() {
    return (
        <>

            <div className='login__page'>
                <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' />


                <div className='login__form'>
                    <form>
                        <h1>Create a new account</h1>
                        <p>It's quick and easy.</p>
                        <hr></hr>
                        <div className='first--surname'>
                            <input type="text" placeholder='First name' />
                            <input type="text" placeholder='Surname' />

                        </div>
                        <input type="text" placeholder='Mobile number or email address' />
                        <input type="text" placeholder='New password' />
                    </form>


                </div>



            </div>




        </>
    )
}

export default Login