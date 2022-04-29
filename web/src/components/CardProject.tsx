import React from "react";

export function CardProject() {
    return(
        <div className=" rounded-xl  w-full">

            <div className="bg-white p-4 mb-6 rounded-md border-2">
                <h1 className="flex text-2xl font-extrabold"> 
                    <h1 className="flex text-3xl font-black text-indigo-400 mr-2">3</h1>
                Projetos</h1>
            </div>

            <article className="p-4 bg-white border-2 rounded-xl w-full">

                <ul className="mt-4 space-y-2">
                    <li>
                        <a
                            className="block h-full p-4 border border-gray-100 rounded-lg hover:text-indigo-300"
                        >
                            <h5 className="font-medium text-indigo-600">React JS</h5>
                            <p className="mt-1 text-xs font-medium text-black">
                                Estudar props e os conceitos básicos.
                            </p>
                        </a>
                    </li>

                    <li>
                        <a
                            className="block h-full p-4 border border-gray-100 rounded-lg hover:border-indigo-300"
                        >
                            <h5 className="font-medium text-indigo-600">ORM Prisma</h5>
                            <p className="mt-1 text-xs font-medium text-black">
                                Estudar schemas e CRUD do framework
                            </p>
                        </a>
                    </li>

                    <li>
                        <a
                            className="block h-full p-4 border border-gray-100 rounded-lg hover:border-indigo-300"
                        >
                            <h5 className="font-medium text-indigo-600">Type Script</h5>
                            <p className="mt-1 text-xs font-medium text-black">
                                Estudar arrow function.
                            </p>
                        </a>
                    </li>

                </ul>
            </article>
        </div>
    );
}