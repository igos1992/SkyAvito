import ContentLoader from 'react-content-loader';

const SkeletonArticleArticleBlock = (props) => {
    return (
        <ContentLoader
            viewBox="0 0 600 200"
            height={200}
            width={600}
            {...props}
        >
            <rect x="0" y="60" rx="5" ry="5" width="250" height="40" />
        </ContentLoader>
    );
};

export default SkeletonArticleArticleBlock;
