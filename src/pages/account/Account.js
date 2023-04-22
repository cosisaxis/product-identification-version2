import React from 'react';
import { UserAuth } from '../../context/AuthContext';
import Web3 from "web3";
import { productAbi }  from "../../constants";
import { useState, useEffect } from 'react';
import "./Account.css"

const Account = ({ onProductSent }) => {
  const [web3, setWeb3] = useState(null);
  const [productContract, setProductContract] = useState(null);
  const [brand, setBrand] = useState("");
  const [item, setItem] = useState("");
  const [year, setYear] = useState(0);
  const [barcode, setBarcode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { logOut, user } = UserAuth();

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        setWeb3(web3);

        try {
          await window.ethereum.enable();
        } catch (error) {
          console.error(error);
        }
      } else if (window.web3) {
        const web3 = new Web3(window.web3.currentProvider);
        setWeb3(web3);
      } else {
        console.error("No Web3 provider detected");
      }
    };

    initWeb3();
  }, []);

  useEffect(() => {
    if (web3) {
      const contractAddress = "0xF1F6e6e09F0585794F2b712Ed7F1d715E85F6Fb5";
      const contract = new web3.eth.Contract(productAbi, contractAddress);
      setProductContract(contract);
    }
  }, [web3]);

  const handleSubmitProduct = async () => {
    setIsSubmitting(true);
    const contractAddress = "0xf616859233bBA7d5B3aBED50Fb604b56D88Bf372";

    try {
      await productContract.methods
        .createOrUpdateRecord(brand, item, year, barcode)
        .send({ from: contractAddress });
      setIsSubmitting(false);
      onProductSent();
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='form-container'>
       <h1 className="form-header">Barcode-X</h1>
      <div className="form-group">
        <label>Brand:</label>
        <input
          type="text"
          value={brand}
          onChange={(event) => setBrand(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Item:</label>
        <input
          type="text"
          value={item}
          onChange={(event) => setItem(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Barcode:</label>
        <input
          type="text"
          value={barcode}
          onChange={(event) => setBarcode(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Year:</label>
        <input
          type="number"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
      </div>
      <button className="form-submit" onClick={handleSubmitProduct}>
        Send Product
      </button>
      {isSubmitting && <p>Sending product to the blockchain...</p>}
      <h1 className='text-center text-2xl font-bold pt-12'>Account</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
      <button onClick={handleSignOut} className='border py-2 px-5 mt-10'>
        Logout
      </button>
    </div>
  );
};

export default Account;
