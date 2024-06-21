import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`./product/${product._id}`}>
                <Card.Img src={product.image} variant="top" />
                {/* Card.img is a sub-component of the Card component from the react-bootstrap library. It is specifically designed to handle the display of images within a card. */}

                {/*  "top": Setting variant to "top" places the image at the top of the card. This is useful for cards where you want the image to be the first thing a user sees. */}
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div" className='product-title'>
                        <strong>{product.name}</strong>
                    </Card.Title>

                    {/* as="div": The as prop allows you to render the Card.Title component as a different HTML element. Here, it is being rendered as a <div> instead of the default <h5> element */}
                </Link>
                <Card.Text as='div'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </Card.Text>

                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default Product;
