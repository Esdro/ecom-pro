import React, {useContext, useState} from "react";
import {
    createUsersDoc, SignInUserByEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase/firbase.utils.jsx";


export default function SignInFormComponent() {
    const defaultFields = {
        userEmail: "",
        userPassword: ""

    }


    const [formFields, setFormFields] = useState(defaultFields);

    const { userEmail, userPassword } = formFields;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    }
    const  handleFormSubmission = async (event)  =>{
        event.preventDefault();

        try {
            const {user } = await SignInUserByEmailAndPassword(userEmail,userPassword);

            resetFormFields();

        }catch (error){
            console.log(error.message)
        }

    }

    function resetFormFields() {
        return setFormFields(defaultFields);
    }

    const handleGooglePopupLogin = async () => {

        try {
            const { user } = await signInWithGooglePopup();
         //   await createUsersDoc(user);
          //  setCurrentUser(user);
            resetFormFields();
        } catch (error) {
            console.log(error.message)
        }
    }




    return (
        <>
            <div className=" col-sm-9 col-5 col-lg-5  p-2  bg-body-tertiary rounded shadow-lg ">

                <form onSubmit={handleFormSubmission}  className={'mt-3 '} >
                    <h3 className={'text-bg-info text-center m-2 p-2 rounded-1 '}> Already have your account ? Sign-in  !   </h3>

                    <div className="mb-3 mt-3 ">
                        <label htmlFor="email" className="form-label">Your Email </label>
                        <input type="email" onChange={handleChange} className="form-control" id="email" placeholder="name@example.com" name="userEmail" value={userEmail} />
                    </div>

                    <div className="mb-3 mt-3">
                        <label htmlFor="userPassword" className="form-label">Your Password </label>
                        <input type="password" onChange={handleChange} className="form-control" id="userPassword" placeholder="pass" name="userPassword" value={userPassword} />
                    </div>

                    <div className=" d-grid gap-3 ">
                        <button type='submit' className='btn btn-outline-primary' onChange={handleFormSubmission}> Sign In !</button>
                        <button type='button' className='btn btn-outline-info' onClick={handleGooglePopupLogin}> Sign In with Google !</button>
                    </div>
                </form>

            </div>

        </>
    )
}