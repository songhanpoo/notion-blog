import { useState } from "react";
import Footer from "../../components/Footer";
import Header  from "../../components/Header";
import Posts from "../../components/Posts";
import { notionConfig } from "../../config";
import { getDatabase } from "../../lib/notion";

export default ({posts}:any) : JSX.Element => {
  return (
    <>
      <Header />
      <section className="max-w-2xl py-5 mx-auto px-4">
      <h1 className="text-4xl font-bold">
        Hi, my name is Songhanpoo.
      </h1>
      <p className="py-5">
        I’m a frontend developer & designer currently working at Bitrefill. This is my personal website - where you’ll find all the stuff I’m currently thinking about.
      </p>
        <div className="relative inline-block">
        <input type="search" name="q" className="w-60 py-2 text-md text-white bg-gray-200 rounded-md pl-8 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="⌘ + k Quick Search Posts" >
        </input>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="absolute left-2 top-2.5 stroke-gray-400"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      </div>
      </section>
      <section className="lg:w-5/6 md:w-5/6 sm:w-full	mx-auto p-8">
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 md:gap-7 gap-5 my-10">
          <Posts posts={posts}/>
        </div>
      </section>
      <Footer />
    </>
  )
}


export const getStaticProps = async () => {
  const database = await getDatabase(notionConfig.databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};