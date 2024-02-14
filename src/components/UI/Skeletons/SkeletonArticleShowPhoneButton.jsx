import ContentLoader from 'react-content-loader';

const SkeletonArticleShowPhoneButton = (props) => {
    return (
        <ContentLoader
            viewBox="0 0 300 300"
            height={300}
            width={300}
            {...props}
        >
            <rect x="0" y="0" rx="20" ry="20" width="300" height="50" />
        </ContentLoader>
    );
};

export default SkeletonArticleShowPhoneButton;
