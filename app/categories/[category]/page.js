import ContentDisplay from '@/Components/ContentDisplay';
import { getDocuments } from '@/lib/doc';
import { getDocsByCategory } from '@/utils/document-utils';

const CategoryPage = ({ params: { category } }) => {
  const docs = getDocuments();
  const filteredDocs = getDocsByCategory(docs, category);
  return <ContentDisplay id={filteredDocs[0].id} />;
};

export default CategoryPage;
