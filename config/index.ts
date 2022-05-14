
interface INotionConfig {
  auth: string;
  databaseId: string;
}

export let notionConfig: INotionConfig = {
  auth      : process.env.NOTION_TOKEN,
  databaseId: process.env.NOTION_DATABASE_ID,
}