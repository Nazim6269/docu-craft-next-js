import { getDocuments } from '@/lib/doc';
import { getDocsByTag } from '@/utils/document-utils';
import ContentDisplay from '@/Components/ContentDisplay';

const TagPage = ({ params: { tag } }) => {
  const docs = getDocuments();
  const filteredDocs = getDocsByTag(docs, tag);

  return <ContentDisplay id={filteredDocs[0].id} />;
};

export default TagPage;
