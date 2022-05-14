import {Text} from "../Text";

export const renderTOC = (block): JSX.Element | null => {
    const { type, id } = block;
    const value = block[type];
    switch (type) {
        case "heading_1":
            return (
                <a href={`#${id}`}>
                    <li className='transition duration-75 hover:bg-gray-300 hover:text-black pl-2'>
                        <Text titles={value.rich_text} />
                        <br/>
                    </li>
                </a>
            );
        case "heading_2":
            return (
                <a href={`#${id}`}>
                    <li className='transition duration-75 hover:bg-gray-300 hover:text-black pl-4'>
                        <Text titles={value.rich_text} />
                        <br/>
                    </li>
                </a>
            );
        case "heading_3":
            return (
                <a href={`#${id}`}>
                    <li className='transition duration-75 hover:bg-gray-300 hover:text-black pl-6'>
                        <Text titles={value.rich_text} />
                        <br/>
                    </li>
                </a>
            );
    }
}