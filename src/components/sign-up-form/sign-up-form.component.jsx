import React, {useContext, useState} from "react";
import {
    CreateUserByEmailAndPassword
} from "../../utils/firebase/firbase.utils";

export default function SignUpFormComponent() {
    const defaultFields = {
        userEmail: "",
        displayName: "",
        userPassword: "",
        userPasswordConfirm: "",


    }

    const [formFields, setFormFields] = useState(defaultFields);

    const { userEmail, displayName, userPasswordConfirm, userPassword } = formFields;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    }

   // const { setCurrentUser} = useContext(UserContext);


    function resetFormFields() {
        return setFormFields(defaultFields);
    }
    const  handleFormSubmission  = async (event) => {
        event.preventDefault();

        if (userPassword !== userPasswordConfirm) {
            alert('passwords do not match');
            return;
        }

        try {
            const { user } = await CreateUserByEmailAndPassword( userEmail, userPassword );

           // await createUsersDoc(user, { displayName });

          //  setCurrentUser(user);

            resetFormFields();

        } catch (error) {
            console.log(error.message)
        }
    };


    return (
        <>
            <div className=" shadow-lg p-2 col-sm-9 col-5 col-lg-5 bg-body-tertiary rounded ">

                <form onSubmit={handleFormSubmission}  className={'mt-3 '}>
                             <h3 className={'text-bg-info text-center  m-2 p-2 rounded-1 '} > Create your free account !   </h3>
                    <div className="mb-3 mt-3">
                        <label htmlFor="userName" className="form-label">Your Name and Firstname  </label>
                        <input type="text" onChange={handleChange} className="form-control" id="userName" placeholder="Mathys DURAND" name="displayName" value={displayName} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">Your Email </label>
                        <input type="email" onChange={handleChange} className="form-control" id="signUpEmail" placeholder="name@example.com" name="userEmail" value={userEmail} />
                    </div>

                    <div className="mb-3 mt-3">
                        <label htmlFor="userPassword" className="form-label">Your Password </label>
                        <input type="password" onChange={handleChange} className="form-control" id="signUpUserPassword" placeholder="pass" name="userPassword" value={userPassword} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="userPasswordConfirm" className="form-label">Confirm your Password </label>
                        <input type="password" onChange={handleChange} className="form-control" id="userPasswordConfirm" placeholder="pass" name="userPasswordConfirm" value={userPasswordConfirm} />
                    </div>
                    <div className=" d-grid gap-2  ">
                        <button type='submit' className='btn btn-primary btn-lg' > Sign up !</button>
                    </div>
                </form>

            </div>

        </>
    )
}