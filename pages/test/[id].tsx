import { Fragment } from "react";
import Head from "next/head";
import { getDatabase, getPage, getBlocks } from "../../lib/notion";
import Link from "next/link";
import { notionConfig } from "../../config";
import { Text } from '../../components/Text';
import { renderBlock } from '../../components/Block/Block';
import Footer from "../../components/Footer";
import Header  from "../../components/Header";
import {renderTOC}  from '../../components/TOC';
export default function Post({ page, blocks }) {
  // console.log(JSON.stringify(page));
  // console.log(JSON.stringify(blocks));
  if (!page || !blocks) {
    return <div />;
  }
  return (
    <>
      <Head>
        <title>{page.properties.Name.title[0].plain_text}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="2xl:w-full xl:w-full lg:w-5/6 md:w-5/6 sm:w-full mx-auto p-8">
        <main className="grid grid-cols-1-2-1 relative"> 
          <div className="col-span-1 col-start-2 p-10">
            <Link href="/">
                <a >← Go home</a>
              </Link>
            <h1 className="text-4xl leading-loose">
              <Text titles={page.properties.Name.title} />
            </h1>
            <article>
              {blocks.map((block) => (
                <Fragment key={block.id}>{renderBlock(block)}</Fragment>
              ))}
            </article>
          </div>
          <aside className="col-span-1 2xl:w-5/6">
            <nav className="sticky top-0 p-10 text-gray-500" >
              <h1>Table of content</h1>
              <ul>
                {blocks.map((block) => (
                    <Fragment key={block.id}>{renderTOC(block)}</Fragment>
                ))}
                {/*<li className=" transition duration-75 hover:bg-gray-300 hover:text-black pl-2">Level1</li>*/}
                {/*<li className=" transition duration-75 hover:bg-gray-300 hover:text-black pl-4">Level2</li>*/}
                {/*<li className=" transition duration-75 hover:bg-gray-300 hover:text-black pl-6">Level3</li>*/}
              </ul>
            </nav>
          </aside>
        </main>
      </section>
      <Footer />
    </>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(notionConfig.databaseId);
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};
