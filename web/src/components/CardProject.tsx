import React from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export function CardProject(props: {tittle: string, description:string}) {

const navigate = useNavigate();

const {id} = useParams();
const test = '21ad14ad1da51'

return(
<div className=" rounded-xl  w-full">


    <div className="block h-full p-4 border border-white rounded-lg hover:shadow-md bg-yellow-100">
        <div className="flex flex-col justify-between sm:flex-row">
            <Link to={`/task/${test}`} target={"_parent"}>

            <h5 className="font-medium text-green-600">{props.tittle}</h5>
            <p className="mt-1 text-xs font-medium text-black">{props.description}</p>
            </Link>
            <div className="flex flex-row justify-between sm:flex-col gap-2">

                <Link to={`/edit/${test}`} className="text-green-700 font-medium text-sm hover:text-indigo-600">
                Editar
                </Link>

                <button className="text-green-700 font-medium text-sm hover:text-indigo-600">Apagar
                </button>
            </div>
        </div>
    </div>
</div>
);
}