import { Fragment } from "react"
import Image from 'next/image'
import Link from "next/link"
import Toggle from '../Buttons/Toggle';

const lstMenu = [
  {
    "id" : 1,
    "name" : "Home",
    "path" : "/Home"
  },
  {
    "id" : 2,
    "name" : "About",
    "path" : "/About"
  },
  {
    "id" : 3,
    "name" : "Blog",
    "path" : "/Blog"
  },
  {
    "id" : 4,
    "name" : "Books",
    "path" : "/Books"
  }
]


export default (): JSX.Element => {
  return (
    <header className="max-w-2xl mx-auto px-6 py-2">
      <div className="flex justify-between py-2">
        <div className="w-20 relative">
          <Link href="/home">
            <img className="absolute fixed top-7 left-3 rounded-full w-14" src="/assets/img/duckduck_100x100.png" alt=""></img>
          </Link>
        </div>
        <ul className="flex items-center justify-items-center">
        {
          lstMenu.map((item,key)=>
            {               
              return (
              <Link key={item.id} href={item.path}>
                <li key={key.toString()} className="cursor-pointer p-5 font-bold">{item.name}</li>
              </Link>
              )
            }
          )
        }
        </ul>
        <Toggle />
    </div>
  </header>
  )
}
