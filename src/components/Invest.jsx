import React from 'react';

const Invest = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 max-w-full w-full">
      <h2 className="text-3xl font-semibold mb-4">Calculating your mortgage has never been so <span className="text-[#059669]">simple</span></h2>
      <p className="text-gray-600 mb-6">Apply for your mortgage in just a few steps</p>
      
      <div className="mb-4">
        <label className="block text-gray-700">Purchase price</label>
        <input 
          type="number" 
          className="border border-gray-300 p-2 w-full rounded-lg mt-1"
          placeholder="$1,737,000"
        />
        <input 
          type="range" 
          min="50000" 
          max="3000000" 
          className="w-full mt-2"
        />
      </div>

      <div className="mb-4 flex space-x-4">
        <div className="w-1/2">
          <label className="block text-gray-700">Down payment</label>
          <input 
            type="number" 
            className="border border-gray-300 p-2 w-full rounded-lg mt-1"
            placeholder="$607,950"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700">Percentage</label>
          <input 
            type="number" 
            className="border border-gray-300 p-2 w-full rounded-lg mt-1"
            placeholder="35%"
          />
        </div>
      </div>

      <div className="flex space-x-4 mb-4">
        <div className="w-1/2">
          <label className="block text-gray-700">Length of loan</label>
          <select className="border border-gray-300 p-2 w-full rounded-lg mt-1">
            <option>15 years (fixed)</option>
            <option>30 years (fixed)</option>
          </select>
        </div>

        <div className="w-1/2">
          <label className="block text-gray-700">Interest rate</label>
          <input 
            type="number" 
            className="border border-gray-300 p-2 w-full rounded-lg mt-1"
            placeholder="4.442%"
          />
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h3 className="text-2xl font-semibold">Total monthly payment: <span className="text-gray-800">$9,813</span></h3>
        <p className="text-sm text-gray-600">Principal & interest: $8,603</p>
        <p className="text-sm text-gray-600">Homeowner's insurance: $66</p>
        <p className="text-sm text-gray-600">Property tax: $1,144</p>
      </div>

      <button className="bg-[#059669] text-white px-4 py-2 rounded-lg hover:bg-green-600">Get started</button>
    </div>
  );
}

export default Invest;
