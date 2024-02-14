import ContentLoader from 'react-content-loader';

const SkeletonMainAds = (props) => (
    <ContentLoader
        viewBox="50 50 900 900"
        height={1250}
        width={1250}
        {...props}
    >
        <rect x="30" y="60" rx="0" ry="0" width="200" height="200" />
        <rect x="30" y="280" rx="0" ry="0" width="200" height="15" />
        <rect x="30" y="305" rx="0" ry="0" width="200" height="15" />
        <rect x="30" y="330" rx="0" ry="0" width="200" height="15" />
        <rect x="30" y="355" rx="0" ry="0" width="200" height="15" />

        <rect x="243" y="60" rx="0" ry="0" width="200" height="200" />
        <rect x="243" y="280" rx="0" ry="0" width="200" height="15" />
        <rect x="243" y="305" rx="0" ry="0" width="200" height="15" />
        <rect x="243" y="330" rx="0" ry="0" width="200" height="15" />
        <rect x="243" y="355" rx="0" ry="0" width="200" height="15" />

        <rect x="455" y="60" rx="0" ry="0" width="200" height="200" />
        <rect x="455" y="280" rx="0" ry="0" width="200" height="15" />
        <rect x="455" y="305" rx="0" ry="0" width="200" height="15" />
        <rect x="455" y="330" rx="0" ry="0" width="200" height="15" />
        <rect x="455" y="355" rx="0" ry="0" width="200" height="15" />

        <rect x="667" y="60" rx="0" ry="0" width="200" height="200" />
        <rect x="667" y="280" rx="0" ry="0" width="200" height="15" />
        <rect x="667" y="305" rx="0" ry="0" width="200" height="15" />
        <rect x="667" y="330" rx="0" ry="0" width="200" height="15" />
        <rect x="667" y="355" rx="0" ry="0" width="200" height="15" />

        <rect x="30" y="410" rx="0" ry="0" width="200" height="200" />
        <rect x="30" y="620" rx="0" ry="0" width="200" height="15" />
        <rect x="30" y="644" rx="0" ry="0" width="200" height="15" />
        <rect x="30" y="668" rx="0" ry="0" width="200" height="15" />
        <rect x="30" y="692" rx="0" ry="0" width="200" height="15" />

        <rect x="243" y="410" rx="0" ry="0" width="200" height="200" />
        <rect x="243" y="620" rx="0" ry="0" width="200" height="15" />
        <rect x="243" y="644" rx="0" ry="0" width="200" height="15" />
        <rect x="243" y="668" rx="0" ry="0" width="200" height="15" />
        <rect x="243" y="692" rx="0" ry="0" width="200" height="15" />

        <rect x="455" y="410" rx="0" ry="0" width="200" height="200" />
        <rect x="455" y="620" rx="0" ry="0" width="200" height="15" />
        <rect x="455" y="644" rx="0" ry="0" width="200" height="15" />
        <rect x="455" y="668" rx="0" ry="0" width="200" height="15" />
        <rect x="455" y="692" rx="0" ry="0" width="200" height="15" />

        <rect x="667" y="410" rx="0" ry="0" width="200" height="200" />
        <rect x="667" y="620" rx="0" ry="0" width="200" height="15" />
        <rect x="667" y="644" rx="0" ry="0" width="200" height="15" />
        <rect x="667" y="668" rx="0" ry="0" width="200" height="15" />
        <rect x="667" y="692" rx="0" ry="0" width="200" height="15" />
    </ContentLoader>
);

export default SkeletonMainAds;
