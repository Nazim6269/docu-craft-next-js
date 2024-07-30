import { getDocumentsContent } from '@/lib/doc';
import Link from 'next/link';
import Tag from './Tag';

const ContentDisplay = async ({ id }) => {
  const data = await getDocumentsContent(id);

  return (
    <article className="prose dark:prose-invert">
      <h1>{data.title}</h1>
      <div>
        <span>Published On: {data.date}</span> by{' '}
        <Link href={`/authors/${data.author}`}>{data.author}</Link> under the{' '}
        <Link href={`/categories/${data.category}`}>{data.category}</Link>{' '}
        category.
      </div>
      <div>
        {data.tags && data.tags.map((tag) => <Tag key={tag} tag={tag} />)}
      </div>
      <div
        className="lead"
        dangerouslySetInnerHTML={{ __html: data.contentHTML }}
      />
    </article>
  );
};

export default ContentDisplay;
