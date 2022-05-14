import { Fragment } from 'react';
import styles from "./post.module.css";
import Link from "next/link";
import {renderNestedList} from './NestedList';
import { Text } from '../Text';

export const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];
  // console.log(JSON.stringify(block));
  switch (type) {
    case "paragraph":
      return (
        <p className='text-lg leading-loose'> 
          <Text titles={value.rich_text} />
          <br/>
        </p>
      );
    case "heading_1":
      return (
          <h1 id={`${id}`} className='text-4xl leading-loose'>
            <Text titles={value.rich_text} />
            <br/>
          </h1>
      );
    case "heading_2":
      return (

        <h2 id={`${id}`} className='text-3xl leading-loose'>
          <Text titles={value.rich_text} />
          <br/>
        </h2>
      );
    case "heading_3":
      return (
        <h3 id={`${id}`} className='text-2xl leading-loose'>
          <Text titles={value.rich_text} />
          <br/>
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li>
          <Text titles={value.rich_text} />
          {!!value.children && renderNestedList(block)}
          <br/>
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text titles={value.rich_text} />
            <br/>
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text titles={value.rich_text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            ))}
          <br/>
        </details>
      );
    case "child_page":
      return <p>{value.title}</p>;
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      return <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>;
    case "code":
      return (
        <>
          <pre className={styles.pre}>
            <code className={styles.code_block} key={id}>
              {value.rich_text[0].plain_text}
            </code>
          </pre>
          <br/>
        </>
      );
    case "file":
      const src_file =
        value.type === "external" ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split("/");
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <div className={styles.file}>
            📎{" "}
            <Link href={src_file} passHref>
              {lastElementInArray.split("?")[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
          <br/>
        </figure>
      );
    case "bookmark":
      const href = value.url
      return (
        <>
          <a href={ href } target="_brank" className={styles.bookmark}>
            { href }
          </a>
          <br/>
        </> );
    case "callout":
      return (
        <>
          <pre className={styles.pre}>
            <code className='flex p-10' key={id}>
              <tr>
                <td className='border-r-1'>{value.icon.emoji} </td>
                <td>{value.rich_text[0].plain_text}</td>
              </tr>
            </code>
          </pre>
          <br/>
        </>
      );
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};
