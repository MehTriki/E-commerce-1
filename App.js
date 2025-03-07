import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to EcoGlow</h1>
      <p className="text-lg text-gray-700 mb-6">Stylish, solar-powered lamps for indoor and outdoor use.</p>
      <Card className="w-96 shadow-lg">
        <CardContent className="p-6 flex flex-col items-center">
          <img src="https://via.placeholder.com/300" alt="EcoGlow Lamp" className="w-64 h-64 object-cover mb-4 rounded-lg" />
          <h2 className="text-2xl font-semibold">EcoGlow Solar Lamp</h2>
          <p className="text-gray-600 mt-2">Elegant, eco-friendly lighting solution for any space.</p>
          <p className="text-xl font-bold text-green-600 mt-3">$49.99</p>
          <Button className="mt-4 bg-green-500 hover:bg-green-600">Buy Now</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
