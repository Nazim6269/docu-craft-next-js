import ContentDisplay from '@/Components/ContentDisplay';
import { getDocuments } from '@/lib/doc';
import { getDocsByAuthor } from '@/utils/document-utils';

const AuthorPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const filteredDocs = getDocsByAuthor(docs, name);

  return <ContentDisplay id={filteredDocs[0].id} />;
};

export default AuthorPage;
