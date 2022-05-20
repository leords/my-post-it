import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../Auth/AuthContext"

export function Header() {

    const {signOut} = useContext(AuthContext)
    const navigate = useNavigate()

    async function handleLogout() {
        signOut
        navigate('/')
    }

    return(
        <div className=" flex flex-row bg-white w-full p-10 shadow-md">
            <h1 className=" flex text-6xl font-black text-black">post-it </h1>
            <div className="flex flex-col items-center justify-center w-20 h-16 absolute right-20">
                <p className="text-gray-600 text-xs py-1">Leonardo</p>
                <button
                    className=" h-8 w-20 p-1 border border-indigo-400 text-white text-sm rounded-md bg-indigo-300 hover:bg-indigo-400"
                    onClick={signOut}
                    >Logout
                </button>
            </div>

        </div>
    )
}
