import ContentLoader from 'react-content-loader';

const ProductDetails = (props) => {
    return (
        <ContentLoader
            viewBox="-100 0 900 900"
            height={1250}
            width={1250}
            {...props}
        >
            <rect x="20" y="15" rx="20" ry="20" width="400" height="400" />
            <rect x="20" y="430" rx="5" ry="5" width="70" height="70" />
            <rect x="100" y="430" rx="5" ry="5" width="70" height="70" />
            <rect x="180" y="430" rx="5" ry="5" width="70" height="70" />
            <rect x="260" y="430" rx="5" ry="5" width="70" height="70" />
            <rect x="340" y="430" rx="5" ry="5" width="70" height="70" />


            <rect x="470" y="20" rx="10" ry="10" width="300" height="40" />
            <rect x="470" y="80" rx="10" ry="10" width="300" height="40" />
            <rect x="470" y="140" rx="10" ry="10" width="300" height="40" />
            <rect x="470" y="200" rx="10" ry="10" width="300" height="40" />
            <rect x="470" y="260" rx="10" ry="10" width="300" height="40" />
            <rect x="470" y="320" rx="10" ry="10" width="300" height="40" />
        </ContentLoader>
    );
};



export default ProductDetails;
