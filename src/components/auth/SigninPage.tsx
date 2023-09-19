import TwitterIcon from "../icons/TwitterIcon.tsx";
import signinRequest, {SIGNIN_REQUEST_FROM} from "../../requests/auth/signinRequest.ts";
import {FormEvent} from "react";
import {setJwtToken} from "../../logic/jwt-token-logic.ts";
import {useNavigate} from "react-router-dom";

export default function SigninPage() {
    const navigate = useNavigate()

    const submitSigninRequest = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formdata = new FormData(event.currentTarget);

        if (SIGNIN_REQUEST_FROM.some(item => formdata.get(item.id) == ""))
            return

        await signinRequest(formdata)
            .then(r => setJwtToken(r.jwtToken))
            .then(() => navigate("/"))
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="bg-gray-900 border border-gray-900 rounded-2xl">
                <div className="mx-4 sm:mx-24 md:mx-34 lg:mx-56 flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col">
                    <TwitterIcon className="h-12 w-12 text-white"/>

                    <h1 className="text-white text-2xl">Sign in to Twitter</h1>
                    <form onSubmit={submitSigninRequest}>
                        { SIGNIN_REQUEST_FROM.map((item) => (
                            <input key={item.id} className="w-full p-2 input-primary-valid" placeholder={item.title} type={item.type} name={item.id} id={item.id} />
                        ))}

                        <button className="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border border-gray-700 "
                                type="submit" name="correo" id="">Submit</button>
                    </form>

                    <p>Not on Twitter yet?
                        <a className="font-semibold text-sky-700 ml-1" href="/signup">Sign up</a> </p>
                </div>


            </div>

        </div>
)
}