import React, { useState } from 'react';


const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [password, setPassword] = useState('');

  const handlePayment = () => {
    // Payment logic here
    alert("Payment Successful");
  };

  return (
    <div className="payment-container min-h-screen w-full bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row justify-center items-center">
      {/* Left section: Form */}
      <div className="payment-form w-full md:w-2/3 p-4 md:p-8">
        <h2 className="text-5xl font-semibold mb-4">Razor <span className='text-blue-600'>Pay</span> </h2>

        <div className="mb-4">
          <label className="block text-gray-600">Card Number</label>
          <input
            type="text"
            maxLength={16}
            className="border w-full p-2 rounded-md"
            placeholder="Enter the 16-digit card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">CVV Number</label>
          <input
            type="text"
            maxLength={4}
            className="border w-full p-2 rounded-md"
            placeholder="Enter CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>

        <div className="flex flex-col md:flex-row mb-4">
          <div className="w-full md:w-1/2 mr-2 mb-4 md:mb-0">
            <label className="block text-gray-600">Expiry Date</label>
            <div className="flex space-x-2">
              <input
                type="text"
                maxLength={2}
                className="border w-1/2 p-2 rounded-md"
                placeholder="MM"
                value={expiryMonth}
                onChange={(e) => setExpiryMonth(e.target.value)}
              />
              <input
                type="text"
                maxLength={2}
                className="border w-1/2 p-2 rounded-md"
                placeholder="YY"
                value={expiryYear}
                onChange={(e) => setExpiryYear(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 ml-2">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="border w-full p-2 rounded-md"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          className="bg-blue-500 text-white w-full p-2 rounded-md hover:bg-blue-600"
          onClick={handlePayment}
        >
          Pay Now
        </button>
      </div>

      {/* Right section: Card Summary */}
      <div className="payment-summary w-full md:w-1/3 bg-gray-50 p-6 rounded-lg ml-0 md:ml-8 mt-8 md:mt-0">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Payment Details</h3>
        </div>

        <div className="card-preview mb-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <p className="text-sm">Jonathan Michael</p>
            <p className="font-bold">**** **** **** 3456</p>
            <p className="text-sm">Expiry: 09/22</p>
          </div>
        </div>

        <div className="payment-info mb-4">
          <div className="flex justify-between">
            <p className="text-sm">Company</p>
            <p>Apple</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm">Order Number</p>
            <p>1266201</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm">Product</p>
            <p>MacBook Air</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm">VAT (20%)</p>
            <p>$100.00</p>
          </div>
        </div>

        <div className="total-amount">
          <p className="text-xl font-bold">Total: $549.99</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
