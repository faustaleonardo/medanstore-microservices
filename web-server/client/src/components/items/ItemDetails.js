/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { CartContext } from '../../context/carts/cartState';
import { AuthContext } from '../../context/auth/authState';
import formatCurrency from '../../utils/formatCurrency';

import axios from 'axios';

import ItemCarousel from './ItemCarousel';

const ItemDetails = () => {
  const { addCart } = useContext(CartContext);
  const { auth } = useContext(AuthContext);
  const history = useHistory();
  const [item, setItem] = useState(null);

  const { id } = useParams();

  const handleAddCart = (item) => {
    if (auth === false) return history.push('/login');
    addCart(item, 'add');
  };

  useEffect(() => {
    const fetchItem = async () => {
      let response = await axios.get(`/item-service/${id}/categoryandpictures`);
      const result = response.data.data.data;
      setItem(result);
    };
    fetchItem();
  }, []);

  if (!item) return null;

  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-sm-5 offset-sm-1">
          <ItemCarousel pictures={item.pictures} />
        </div>
        <div className="col-sm-5 text-center">
          <h2 className="mt-5 mb-4">{item.name}</h2>
          <h1 className="text-success mb-5">{formatCurrency(item.price)}</h1>
          <button
            className="btn btn-success"
            onClick={() => handleAddCart(item)}
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="card mt-5">
        <div className="card-header">Specifications</div>
        <div className="card-body">
          <table className="table table-hover">
            <tbody>
              <tr>
                <th>Category</th>
                <td>{item.category.value}</td>
              </tr>
              <tr>
                <th>Description</th>
                <td>{item.description}</td>
              </tr>
              <tr>
                <th>Stock</th>
                <td>{item.stock}</td>
              </tr>
              <tr>
                <th>Condition</th>
                <td>{item.condition}</td>
              </tr>
              <tr>
                <th>CPU</th>
                <td>{item.cpu}</td>
              </tr>
              <tr>
                <th>Display</th>
                <td>{item.display}</td>
              </tr>
              <tr>
                <th>RAM</th>
                <td>{item.ram}</td>
              </tr>
              <tr>
                <th>Storage</th>
                <td>{item.storage}</td>
              </tr>
              <tr>
                <th>Battery</th>
                <td>{item.battery}</td>
              </tr>
              <tr>
                <th>Rear Camera</th>
                <td>{item.rearCamera}</td>
              </tr>
              <tr>
                <th>Front Camera</th>
                <td>{item.frontCamera}</td>
              </tr>
              <tr>
                <th>Operating System</th>
                <td>{item.os}</td>
              </tr>
              <tr>
                <th>Network</th>
                <td>{item.network}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
