import { SignOut } from "phosphor-react"
import { useContext } from "react"
import { AuthContext } from "../Auth/AuthContext"

interface User {
    user : {
        email : string,
        id : string,
        name: string
    }
    token : {
        token: string
    }
}

export function Header() {

    const {signOut, user} = useContext(AuthContext)
    const nameUser: User = Object.create(user)

    return (
        <div className=" flex flex-row bg-white w-full p-10 shadow-md">
            <h1 className=" flex text-6xl font-black text-black">post-it </h1>
            <div className="flex flex-col items-center justify-center w-20 h-16 absolute right-20">
                <button
                    className=" h-8 w-8 p-1 flex items-center justify-center text-white text-sm rounded-md bg-indigo-300 hover:bg-indigo-400"
                    onClick={signOut}
                    ><SignOut size={20} />
                </button>
            </div>

        </div>
    )
}
