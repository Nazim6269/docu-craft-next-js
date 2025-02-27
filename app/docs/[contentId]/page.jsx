import ContentDisplay from '@/Components/ContentDisplay';

const ContentPage = ({ params: { contentId } }) => {
  return (
    <div>
      <ContentDisplay id={contentId} />
    </div>
  );
};

export default ContentPage;
