import React, { useState } from "react";
import { Link } from "react-router-dom";

const Invest = () => {
  const [showDetails, setShowDetails] = useState(false);

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

  const [investment, setInvestment] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);

  const calculateROI = (e) => {
    e.preventDefault();
    const principal = parseFloat(investment);
    const interestRate = parseFloat(rate) / 100;
    const time = parseInt(years);

    if (isNaN(principal) || isNaN(interestRate) || isNaN(time)) {
      alert("Please enter valid numbers for all fields.");
      return;
    }

    const finalAmount = principal * Math.pow(1 + interestRate, time);
    const roi = finalAmount - principal;
    setResult({
      finalAmount: finalAmount.toFixed(2),
      roi: roi.toFixed(2),
    });
  };

  const points = [
    {
      id: 1,
      heading: "Security of Your Investment",
      description:
        "Solid Asset Foundation: Our Company directly owns substantial real estate holdings, providing a robust backing for your investment.",
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
    },
    {
      id: 2,
      heading: "Enhanced Ownership",
      description:
        "When you invest $1,000, you gain ownership in the company that reflects an asset value of $2,000. This effectively means your investment is doubled in terms of asset value.",
      image:
        "https://plus.unsplash.com/premium_photo-1677675633959-f561809a0345?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
    },
    {
      id: 3,
      heading: "3-Year Lock-In",
      description:
        "Your investment enjoys a 3-year lock-in period, providing both security and an opportunity to benefit from asset growth.",
      image:
        "https://images.unsplash.com/photo-1533395427226-788cee25cc7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGludmVzdG1lbnQlMjBkdWJhaSUyMGN1cnJlbmN5fGVufDB8fDB8fHww", // Replace with your image URL
    },
    {
      id: 4,
      heading: "Track Record",
      description:
        "Clematis Properties, the promoting company, has been active in the global real estate space since 2019 and has received the following accolades.",
      image:
        "https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
    },
  ];

  return (
    <div className="w-full overflow-hidden relative">
      <div className="flex flex-wrap z-[9999999999999] min-h-screen w-full bg-[#EBECF0] items-center justify-center p-6">
        {points.map((point) => (
          <div
            key={point.id}
            className="border border-gray-300 p-5 m-4 rounded-lg w-full sm:w-[48%] md:w-[30%] bg-white shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            <img
              src={point.image}
              alt={point.heading}
              className="w-full h-52 object-cover rounded-md mb-4 transition-transform duration-300 transform hover:grayscale hover:scale-105"
            />
            <h2 className="text-lg md:text-xl font-semibold mb-2 text-emerald-600">{point.heading}</h2>
            <p className="text-gray-600">{point.description}</p>
          </div>
        ))}
      </div>
      <div className="min-h-screen w-full bg-[#EBECF0] p-4 sm:p-8 flex flex-col items-center justify-center">
        <div className="relative z-10 flex items-center justify-center h-full p-5 flex-col">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-8">
            Return on <span className="text-emerald-600 ">Investment</span>
          </h1>
          <div className="rounded-lg p-5 md:p-10 max-w-xl w-full bg-white shadow-md">
            {/* ROI Calculator Form */}
            <form className="space-y-5" onSubmit={calculateROI}>
              {/* Investment Field */}
              <div>
                <input
                  type="number"
                  placeholder="Initial Investment ($)"
                  className="w-full px-4 py-3 bg-transparent border-b border-emerald-600 focus:outline-none"
                  value={investment}
                  onChange={(e) => setInvestment(e.target.value)}
                />
              </div>

              {/* Rate of Return Field */}
              <div>
                <input
                  type="number"
                  placeholder="Rate of Return (%)"
                  className="w-full px-4 py-3 bg-transparent border-b border-emerald-600 focus:outline-none"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </div>

              {/* Years Field */}
              <div>
                <input
                  type="number"
                  placeholder="Duration (Years)"
                  className="w-full px-4 py-3 bg-transparent border-b border-emerald-600 focus:outline-none"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                />
              </div>

              {/* Submit Button */}
              <button className="w-full py-3 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 transition duration-300">
                Calculate ROI
              </button>
            </form>

            {/* Display Result */}
            {result && (
              <div className="mt-5 p-4 bg-emerald-100 rounded-md text-center">
                <h2 className="text-lg font-semibold mb-2">ROI Results</h2>
                <p>Final Amount: ${result.finalAmount}</p>
                <p>Return on Investment (ROI): ${result.roi}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-screen w-full bg-[#EBECF0] flex items-center justify-center p-4 sm:p-8">
        <div className="relative z-10 flex items-center justify-center h-full p-5">
          <div className="rounded-lg p-6 md:p-10 max-w-lg w-full bg-white shadow-md text-center border border-gray-200">
            {/* Inventory Information */}
            <p className="text-center text-lg text-gray-700 mb-5">
              Total value of inventory: <span className="font-semibold">$2M</span> <br />
              Value of each brick: <span className="font-semibold">$100</span> <br />
              Total number of bricks: <span className="font-semibold">20,000</span>
            </p>

            {/* Investment Tagline */}
            <h1 className="mb-20 text-xl md:text-2xl font-bold text-emerald-700">
              Yesterday was the best time to invest; the next best day is today.
            </h1>
            <Link className="px-10 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition duration-300" to="/paymentRazorpay">
              Let's begin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
