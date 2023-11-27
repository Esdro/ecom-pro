
import React from "react";
import SignUpFormComponent from './../../components/sign-up-form/sign-up-form.component';
import SignInFormComponent from "../../components/sign-in/sign-in-form.component";
export default function AuthenticationComponent() {



    return (
        <>
            <div className={'container-fluid '}>
                <div className="row g-2 g-sm-3 p-5 justify-content-center  justify-content-lg-between ">
                   <SignInFormComponent></SignInFormComponent>
                    <SignUpFormComponent></SignUpFormComponent>
                </div>

            </div>

        </>
    )
}