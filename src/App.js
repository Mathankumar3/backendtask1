import logo from './logo.svg';
import {Badge, Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';


function App() {
  
  // console.log(show)

  const data = [
    {
      productImg:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-product-red-witb-2021_FMT_WHH?wid=560&hei=744&fmt=png-alpha&.v=1638579082000 ",
      productName:"iphone",
      price:"$40.00-$80.00",
      rating:"⭐⭐⭐⭐⭐",
    },
    {
      productImg:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-1.jpg ",
      productName:"sansong",
      price:"$18.00",
      rating:"⭐⭐⭐⭐⭐",
    },
    {
      productImg:" https://lh3.googleusercontent.com/rOk899xWpz7gucQADZrVmGeziszDavjTPzTPb87V1fjYT-xstKc9P-gUs1FEd7tvmYrSE4rtyq8LEavAElBCHSMhW8h5Teldv6Wg=rw-e365-w1182",
      productName:"googlepexl",
      price:"$25.00",
      rating:"⭐⭐⭐⭐",
    },
    {
      productImg:" https://static.digit.in/default/oneplus-11r-91d14f0a0e.jpeg?tr=w-1200",
      productName:"oneplus",
      price:"$40.00",
      rating:"⭐⭐⭐⭐⭐",
    },
    {
      productImg:" https://i.gadgets360cdn.com/products/large/Realme-Q5-648x800-1650518901.jpg",
      productName:"realme",
      price:"$25.00",
      rating:"⭐⭐",
    },
    {
      productImg:" https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-10-1.jpg",
      productName:"redmi",
      price:"500",
      rating:"⭐⭐⭐",
    },
    {
      productImg:" https://fdn2.gsmarena.com/vv/pics/vivo/vivo-y21-000.jpg",
      productName:"vivo",
      price:"$120.00-$280.00",
      rating:"⭐⭐",
    },
    {
      productImg:" https://www.91-img.com/gallery_images_uploads/f/9/f9fed534c503b7d0eabdad7eab69307b3bcea035.JPG?tr=h-550,w-0,c-at_max",
      productName:"poco",
      price:"$18.00",
      rating:"⭐⭐⭐",
    },
  ]
  // const show = false
   const [count,setCount] = useState(0);
  return (
    <div className="App">
      <div className="cart-value">
      <Badge bg="Success">
        CART {count}
      </Badge>

      </div>
      <div className="card-container">
      {data.map((prod,idx) =><Cards 
      key = {idx}
      idx = {idx}
      prod = {prod}
      setCount = {setCount}
      count = {count}>
        
      </Cards>)}

      </div>
              
    </div>
  );
}

export default App;

function Cards({prod,idx,setCount,count}){
  const [show,setShow]=useState(false);
  function addToCart(){
    setShow(!show)
    setCount(count + 1)
  }
  function removeFromCart(){
    setShow(!show)
    setCount(count - 1)

  }
  return(
    
    
      <Card key = {idx} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.productImg} />
      <Card.Body>
        <Card.Title>{prod.productName}</Card.Title>
        <Card.Text>
          {prod.price} $RS
        </Card.Text>
        <Card.Text>
          {prod.rating} 
        </Card.Text>
        {/* {!show ? <Button variant="primary" onClick={()=>setShow(!show)}>Add cart</Button>:""} */}
        {!show ? <Button variant="primary" onClick={addToCart}>Add cart</Button>:""}

        {/* <Button variant="danger" onClick={()=>setShow(!show)}>Remove Now</Button> */}


        {/* conditional rendering */}
        {/* {show ? <Button variant="danger"onClick={()=>setShow(!show)} >Remove cart</Button> :" "} */}
        {show ? <Button variant="danger"onClick={removeFromCart} >Remove cart</Button> :" "}
      </Card.Body>
    </Card>


  
    

   

  )
}