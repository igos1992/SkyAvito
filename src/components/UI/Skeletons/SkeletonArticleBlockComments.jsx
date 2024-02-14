import ContentLoader from 'react-content-loader';

const SkeletonArticleBlockComments = (props) => {
    return (
        <ContentLoader
            viewBox="0 -50 400 100"
            height={100}
            width={400}
            {...props}
        >
            <rect x="-100" y="-100" rx="10" ry="10" width="450" height="150" />
        </ContentLoader>
    );
};

export default SkeletonArticleBlockComments;
