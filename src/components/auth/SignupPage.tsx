import {FormEvent} from "react";
import TwitterIcon from "../icons/TwitterIcon.tsx";
import createUser, {SIGNUP_REQUEST_FROM} from "../../requests/user-details/createUser.ts";
import signinRequest from "../../requests/auth/signinRequest.ts";
import {useNavigate} from "react-router-dom";
import {setJwtToken} from "../../logic/jwt-token-logic.ts";


export default function SignupPage() {
    const navigate = useNavigate()

    const submitSignupRequest = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formdata = new FormData(event.currentTarget);

        if (SIGNUP_REQUEST_FROM.some(item => formdata.get(item.id) == ""))
            return

        await createUser(formdata)
            .then(async () =>
                await signinRequest(formdata)
                    .then(r => setJwtToken(r.jwtToken))
                    .then(() => navigate("/"))
            )
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="bg-gray-900 border border-gray-900 rounded-2xl">
                <div className="sm:mx-24 md:mx-34 lg:mx-56 mx-auto flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col">
                    <TwitterIcon className="h-12 w-12 text-white"/>

                    <h1 className="text-white text-2xl">Sign up to Twitter</h1>
                    <form onSubmit={submitSignupRequest}>
                        { SIGNUP_REQUEST_FROM.map((item) => (
                            <input key={item.id} className="w-full p-2 input-primary-valid" placeholder={item.title} type={item.type} name={item.id} id={item.id} />
                        ))}

                        <button className="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border border-gray-700 "
                                type="submit" name="correo" id="">Submit</button>
                    </form>

                    <p>Already on Twitter? <a className="font-semibold text-sky-700 ml-1" href="/signin">Sign in</a> </p>
                </div>
            </div>
        </div>
    )
}