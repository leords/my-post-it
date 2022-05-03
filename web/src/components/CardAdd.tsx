import React, { useState } from "react";


export function CardAdd(props: { tittle: string, count: number}) {

    const [openWindow, setOpenWindow] = useState('')

    return (
        <div className="flex flex-col items-center justify-between w-full pl-5 pr-5 h-20 mb-20 bg-indigo-400 rounded-md sm:flex-row ">
            <h1 className="flex flex-row font-black text-2xl text-white sm:text-3xl">{props.count} - {props.tittle}
                <h1 className="font-black text-2xl ml-1 text-black sm:text-3xl">.</h1>
            </h1>

            <a 
                href="/new"
                target={"_parent"}
                className="mb-3 font-black text-4xl text-white sm:text-6xl"
            
            >+</a>
        </div>
    )
}