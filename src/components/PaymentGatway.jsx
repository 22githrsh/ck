import React, { useState } from "react";
import { Link } from "react-router-dom";

const Invest = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [expiryMonth, setexpiryMonth] = useState("");
  const [expiryYear, setexpiryYear] = useState("");
  const [password, setPassword] = useState("");
  const [cvv, setCvv] = useState("");

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const copyToClipboard = () => {
    const textToCopy =
      "Total value of inventory: $2M\nValue of each brick: $100\nTotal number of bricks: 20,000";
    navigator.clipboard.writeText(textToCopy);
    alert("Investment details copied to clipboard!");
  };

  const showInvestmentTip = () => {
    alert("Investing early maximizes your returns. Start today!");
  };

  const handlePayment = (e) => {
    e.preventDefault();

    if (!nameOnCard || !cardNumber || !expiryDate || !cvv) {
      alert("Please fill in all payment details.");
      return;
    }

    alert("Payment Process Initiated!"); // Replace this with your payment processing logic.
  };

  const points = [
    {
      id: 1,
      heading: "Emaar",
      description:
      "Address: Residence dubai hills estate {1 BHK} Purchase price: 1.95 M Holding period Exit price ROI",
      image:
        "https://images.unsplash.com/photo-1661817078856-4eb26ced9a97?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      heading: "Sobha",
      description:
        "Purchase Price: 2BHK, 1.95M Holding period Exit Price ROI",
      image:
        "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      heading: "3.	Danube Diamondz",
      description:"Purchase Price: Studio, AED 1.3M Holding period Exit Price ROI",
      image:
        "https://images.unsplash.com/photo-1528702748617-c64d49f918af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="w-full overflow-hidden relative">
      <div className="flex flex-wrap z-[9999999999999] min-h-screen w-full bg-[#EBECF0] items-center justify-center p-6">
        
        {points.map((point) => (
          <div
            key={point.id}
            className="border border-gray-300 p-5 m-4 rounded-lg w-full sm:w-1/2 bg-white shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            <img
              src={point.image}
              alt={point.heading}
              className="w-full h-80 object-cover rounded-md mb-4 transition-transform duration-300 transform hover:grayscale hover:scale-105"
            />
            <h2 className="text-xl font-semibold mb-2">{point.heading}</h2>
            <p className="text-gray-600">{point.description}</p>
          </div>
        ))}
      </div>
      <div className="min-h-screen w-full">
      <div className="relative z-10 flex items-center justify-center h-full p-5 flex-col bg-[#EBECF0]">
  <div className="flex flex-col md:flex-row bg-white  rounded-lg p-5 md:p-10 max-w-5xl w-full">
    {/* Left Section - Payment Form */}
    <div className="w-full md:w-2/3 p-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-semibold">Razorpay<span className="text-blue-600">Pay</span></h1>
        <div className="flex space-x-2 text-white">
          <div className="bg-black px-3 py-1 rounded">01</div>
          <div className="bg-black px-3 py-1 rounded">19</div>
        </div>
      </div>

      {/* Payment Gateway Form */}
      <form className="space-y-5" onSubmit={handlePayment}>
        {/* Card Number */}
        <div>
          <label className="text-sm font-semibold">Card Number</label>
          <input
            type="text"
            placeholder="2412 - 7512 - 3412 - 3456"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md mt-2 focus:outline-none focus:border-blue-500"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        {/* CVV Number */}
        <div className="flex space-x-5">
          <div className="w-1/2">
            <label className="text-sm font-semibold">CVV Number</label>
            <input
              type="text"
              placeholder="327"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md mt-2 focus:outline-none focus:border-blue-500"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>

          {/* Expiry Date */}
          <div className="w-1/2">
            <label className="text-sm font-semibold">Expiry Date</label>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="MM"
                className="w-1/2 px-4 py-3 bg-gray-50 border border-gray-200 rounded-md mt-2 focus:outline-none focus:border-blue-500"
                value={expiryMonth}
                onChange={(e) => setExpiryMonth(e.target.value)}
              />
              <input
                type="text"
                placeholder="YY"
                className="w-1/2 px-4 py-3 bg-gray-50 border border-gray-200 rounded-md mt-2 focus:outline-none focus:border-blue-500"
                value={expiryYear}
                onChange={(e) => setExpiryYear(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label className="text-sm font-semibold">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md mt-2 focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
          Pay Now
        </button>
      </form>
    </div>

    {/* Right Section - Card Preview */}
    <div className="w-full md:w-1/3 bg-[#EBECF0] p-5 rounded-lg shadow-inner flex flex-col justify-between">
      {/* Card Image */}
      <div className="p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Jonathan Michael</span>
          <img src="https://media.istockphoto.com/id/1391718981/photo/portrait-of-a-confident-young-businessman-standing-with-his-arms-crossed-in-an-office.jpg?s=2048x2048&w=is&k=20&c=baV7G62m8wGnhhc9tRacs5j7KHXOoWBg_R43w3Njmks=" alt="Mastercard" className="w-8 h-8"/>
        </div>
        <div className="mt-4">
          <span className="text-lg">•••• 3456</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-600">09/22</span>
          <span className="text-gray-600">Mastercard</span>
        </div>
      </div>

      {/* Payment Details */}
      <div className="flex flex-col space-y-2 mt-6">
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Company</span>
          <span className="text-sm font-semibold">Apple</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Order Number</span>
          <span className="text-sm font-semibold">1266201</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Product</span>
          <span className="text-sm font-semibold">MacBook Air</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">VAT (20%)</span>
          <span className="text-sm font-semibold">$100.00</span>
        </div>
      </div>

      {/* Total Payment */}
      <div className="mt-6 text-center">
        <span className="text-xl font-bold">549.99 USD</span>
      </div>
    </div>
  </div>
</div>

      </div>
      <div className="h-screen w-full bg-transparent"></div>
    </div>
  );
};

export default Invest;
