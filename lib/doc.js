import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'docs');

export const getDocuments = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  const allDocuments = fileNames.map((fileName) => {
    const id = fileName.replace('.md', '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return { id, ...matterResult.data };
  });

  return allDocuments.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }

    if (a.order > b.order) {
      return 1;
    }

    return 0;
  });
};

export const getDocumentsContent = async (id) => {
  // console.log(id, 'id');
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const mappedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);
  const contentHTML = mappedContent.toString();

  return {
    id,
    contentHTML,
    ...matterResult.data,
  };
};
