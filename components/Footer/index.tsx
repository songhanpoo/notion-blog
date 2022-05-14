import Link from "next/link"

const lstFooterMenu = [
  {
    "name" : "Home",
    "path" : "/Home"
  },
  {
    "name" : "About",
    "path" : "/About"
  },
  {
    "name" : "Blog",
    "path" : "/Blog"
  },
  {
    "name" : "Books",
    "path" : "/Books"
  },
  {
    "name" : "Github",
    "path" : "/Books"
  },
  {
    "name" : "Twitter",
    "path" : "/Books"
  },
  {
    "name" : "Twitter",
    "path" : "/Books"
  }
]

export default () : JSX.Element => {
  return (
    <>
    <footer className="lg:w-4/6 md:w-5/6 sm:w-full	mx-auto p-8">
      <ul className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
      {
        lstFooterMenu.map((item,key)=>
          {               
            return (
            <Link href={item.path}>
              <li key={key.toString()}>{item.name}</li>
            </Link>
            )
          }
        )
        }
      </ul>
    </footer>
    <section className="mt-4 mb-4 text-sm opacity-25 text-center">© Songhanpoo 2022</section>
    </>
  )
}
