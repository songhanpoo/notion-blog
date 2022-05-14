import { ITitles } from "../../types";
import {useTheme} from 'next-themes';

export const Text = ( props: ITitles ,id: string ): JSX.Element[] | null  => {
  const { titles } = props;

  if (!titles ) {
    return null
  }
  return titles.map((item:ITitle) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = item;
    return (
      <span
        key={id}
        className={[
          bold          ? "font-bold"   : "",
          code          ? "code"        : "",
          italic        ? "italic"      : "",
          strikethrough ? "line-through": "",
          underline     ? "underline"   : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
}


