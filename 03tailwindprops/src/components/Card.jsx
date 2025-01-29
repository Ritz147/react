import React from 'react'

function Card({username,btntext="visit me"}) {//humne default value de di btntext ki
    console.log(username)
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src="https://i.pinimg.com/736x/2b/05/48/2b054882609bbaf6728aca0368212c14.jpg" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{username}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Cats can really be sleepy sometimes , they are extremely lazy and i really hate it</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {btntext}
        </a>
    </div>
</div>
  )
}

export default Card