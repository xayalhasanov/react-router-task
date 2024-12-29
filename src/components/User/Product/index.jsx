import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Container, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext } from 'react';
import { basketContext } from '../../../context/BasketContext';
import { favoriteContext } from '../../../context/FavoritContext';

function Product({ products }) {


    let  {favorites,setFavorites}=useContext(favoriteContext)
    let {basket,setBasket}=useContext(basketContext)


    function handleAddFavorite(book){
        let findFavorite=favorites.find(favorite=>favorite.id==book.id)
        if(findFavorite){
            alert("data artiq favdir")
        }else{
            setFavorites([...favorites,book])
        }

    }



    function handleAddBasket(book){
        let findBasket=basket.find(item=>item.id==book.id)
        if(findBasket){
            findBasket.count++
            setBasket([...basket])
        }else{
            setBasket([...basket,{...book,count:1}])
           
        }
    }



    return (
        <Container>
            <Row>
                {products.map((book) => (
                    <Col key={book.id} md={4} sm={6} xs={12} className="mb-4">
                        <Card style={{ width: '100%' }}>
                            {/* shekil gec achdigi uchun static verilib */}
                            <Card.Img 
                                variant="top" 
                                src="https://imgs.search.brave.com/pW4GyuOnzXwnqnOz6gdg4rUXFhHauItOrFPopvvegS0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb3Zl/cnMub3BlbmxpYnJh/cnkub3JnL3cvaWQv/MTQ2NTI0NzAtTS5q/cGc" 
                            />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>
                                    {book.description}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Author: {book.author}</ListGroup.Item>
                                <ListGroup.Item>Page count: {book.pagesCount}</ListGroup.Item>
                                <ListGroup.Item>Year: {book.publishedYear}</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <IconButton onClick={()=>handleAddBasket(book)}>
                                    <LocalGroceryStoreIcon />
                                </IconButton>
                                <IconButton onClick={()=>handleAddFavorite(book)}>
                                    <FavoriteBorderIcon />
                                </IconButton>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Product;
