import Link from "next/link";
import Image from 'next/image'
import {useTheme} from 'next-themes';
import { Text } from "../Text";
import { Tags } from "../Tags";
import { IPosts } from '../../types';


export default (props:IPosts) : JSX.Element[] => {
  const {theme, setTheme} = useTheme()
  const { posts } = props;
  
  return posts.map((post:any) => {    
    const date = new Date(post.last_edited_time).toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    ); 
    
    return (
      <div 
        key={post.id}
        className={theme === 'dark' ?  'rounded-lg shadow-md max-w-sm md:max-w-none overflow-hidden' : 'bg-white rounded-lg border shadow-md max-w-sm md:max-w-none overflow-hidden'}
        //className="bg-white rounded-lg border shadow-md max-w-sm md:max-w-none overflow-hidden"
      >
        <Image width={60} height={20} src={post.properties.img.rich_text[0].text.content} objectFit="cover" layout="responsive" />
        <div className="p-3">
          <span className={theme === 'dark' ? 'text-sm text-white' : 'text-sm text-gray-800'}>{date}</span>
            <Tags multi_select={post.properties.Tags.multi_select} />
          <h3 
            className={theme === 'dark' ? 'font-semibold text-xl leading-6 text-white my-2' : 'font-semibold text-xl leading-6 text-gray-700 my-2'}
          >
            <Text titles={post.properties.Name.title} id={post.id}/>
          </h3>
          <p className={ theme === 'dark' ? 'paragraph-normal text-white' : 'paragraph-normal text-gray-600'}>
            <Text titles={post.properties.Brief.rich_text} id={post.id} />
          </p>
          <Link href={`test/${post.id}`}>
            <a className="mt-3 block">Read More {'>>'}</a>
          </Link>
        </div>
      </div>
    )
  }
  )
}