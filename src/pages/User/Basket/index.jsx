import { IconButton } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import { basketContext } from '../../../context/BasketContext';
import AddIcon from '@mui/icons-material/Add';


function Basket() {

  let { basket, setBasket } = useContext(basketContext)
  let [totalPrice, setTotalPrice] = useState(0)
  function handleDecrease(item) {
    if (item.count > 1) {
      item.count--
      setBasket([...basket])
    } else {
      let filtered = basket.filter(elem => elem.id != item.id)
      setBasket(filtered)
    }
  }

  function handleIncrease(item) {
    item.count++
    setBasket([...basket])
  }

  function handleDelete(item) {
    confirm("silmek istediyinize eminsiz?")
    let filtered = basket.filter(elem => elem.id != item.id)
    setBasket(filtered)

  }


  function calcTotalPrice() {
    let total = basket.reduce((sum, item) => sum + (item.price * item.count), 0)
    setTotalPrice(total)
  }
  useEffect(() => {
    calcTotalPrice()
  }, [basket])


  {

    return (<Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Price</th>
          <th>Total Price</th>
          <th>Increase</th>
          <th>Count</th>
          <th>Decrease</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {basket.map((elem) => (
          <tr key={elem.id}>
            <td><img src={elem.image} alt="Product" style={{ width: '50px' }} /></td>
            <td>${elem.price.toFixed(2)}</td>
            <td>${(elem.price * elem.count).toFixed(2)}</td>
            <td>
              <IconButton onClick={() => handleIncrease(elem)}>
                <AddIcon />
              </IconButton>
            </td>
            <td>{elem.count}</td>
            <td>
              <IconButton onClick={() => handleDecrease(elem)}>
                <RemoveIcon />
              </IconButton>
            </td>
            <td>
              <IconButton onClick={() => handleDelete(elem)}>
                <DeleteIcon />
              </IconButton>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    )

  }
}

export default Basket