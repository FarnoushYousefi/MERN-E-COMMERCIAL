import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
// import axios from 'axios'
import Product from '../components/Product';
import { listProducts } from '../actions/productAction';
const HomeScreens = () => {

    
  const dispatch = useDispatch();
  const productList=useSelector(state=>state.productList)
  const {loading, error, products} = productList
  // const [products, setProducts]=useState([])
  useEffect(() => {
    dispatch(listProducts())

    //    const fetchProducts=async()=>{
    //        const {data} = await axios.get('api/products')
    //        setProducts (data)
    //    }
    //    fetchProducts()
  }, [dispatch]);
  
  return (
    <>
      <h1>Latest Products</h1>
      {loading ?<h2>Loading...</h2>:error ?<h3>{error}</h3> :  <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>}
     
    </>
  );
};

export default HomeScreens;
