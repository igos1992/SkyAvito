import ContentLoader from 'react-content-loader';

const SkeletonSellerAvatar = (props) => {
    return (
        <ContentLoader
            viewBox="0 0 250 250"
            height={250}
            width={250}
            {...props}
        >
            <rect x="0" y="0" rx="100" ry="100" width="150" height="150" />
        </ContentLoader>
    );
};

export default SkeletonSellerAvatar;
