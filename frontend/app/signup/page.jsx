'use client';

import { useState } from "react"
import {useSignup} from '../../hooks/useSignup'
import Link from "next/link";

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signUp, isLoading, error } = useSignup() 

    const handleSignup = async (e) =>{
        e.preventDefault()
        
        await signUp(email, password)
    }

    return(
        <div className="flex mt-28 md:mt-0 md:items-center justify-center h-screen">
            <div className="py-6 px-10 md:w-1/3 h-96 bg-slate-100 rounded-xl shadow-lg border">
                <form>
                    <h1 className="text-center text-xl font-dmsans font-black mb-10"> Sign Up </h1>

                    <label className="font-dmsans font-medium"> Email </label>
                    <br></br>

                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="w-full rounded-xl h-10 mb-6 p-2"
                    />
    
                    <label className="font-dmsans font-medium"> Password </label>
                    <br></br>

                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="w-full rounded-xl h-10 mb-10 p-2"
                    />

                    <button disabled={isLoading} onClick={handleSignup} className="w-full font-bold rounded-xl h-10 bg-amber-400 hover:bg-amber-300"> <Link href="/">
                        <div>
                            Login   
                        </div></Link>
                    </button> 
                    
                    {error && <div className="text-red-600"> { error } </div>}
                </form>
            </div>    
        </div>
    )
}

export default Signup