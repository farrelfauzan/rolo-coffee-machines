"use client";

import { useCartStore } from "@/lib/store/cart";
import { priceFmt } from "@/lib/utils";
import { Store, Smartphone } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const PayNow = () => {
  const { items, total } = useCartStore();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full">
      {/* Left side */}
      <div className="flex-1 flex justify-center lg:justify-end items-start bg-gray-50 py-8 lg:py-20 px-4 lg:pr-16">
        <div className="flex flex-col gap-6 lg:gap-8 w-full max-w-sm lg:w-80">
          {/* Header */}
          <div className="flex flex-row items-center gap-3">
            <div className="rounded-full p-2 bg-white shadow-sm flex items-center justify-center">
              <Store className="size-5 text-gray-500" />
            </div>
            <span className="text-gray-800 font-medium text-base">
              Gobi Coffee
            </span>
          </div>
          
          {/* Payment Title and Amount */}
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 text-sm">Pay Gobi Coffee</span>
            <span className="text-gray-900 text-2xl lg:text-3xl font-bold">
              {priceFmt(total)}
            </span>
          </div>

          {/* Items List */}
          <div className="flex flex-col gap-3 lg:gap-4">
            {items.map((item, index) => (
              <div key={`${item.id}-${item.type}-${index}`} className="flex justify-between items-center">
                <span className="text-gray-700 text-sm font-medium">
                  {item.title} - {item.type}
                </span>
                <span className="text-gray-700 text-sm font-medium">
                  {priceFmt(item.price * item.unit)}
                </span>
              </div>
            ))}
            
            {/* Subtotal */}
            <div className="flex justify-between items-center pt-2">
              <span className="text-gray-700 text-sm font-medium">Subtotal</span>
              <span className="text-gray-700 text-sm font-medium">
                {priceFmt(total)}
              </span>
            </div>
            
            {/* Promotion Code */}
            <div className="py-2 lg:py-3">
              <Button className="text-sm transition-colors bg-gray-100 text-gray-500 hover:text-gray-400 hover:bg-gray-200" variant="outline">
                Add promotion code
              </Button>
            </div>
            
            {/* Divider */}
            <hr className="border-gray-300" />
            
            {/* Total Due */}
            <div className="flex justify-between items-center pt-2">
              <span className="text-gray-900 text-base font-medium">Total due</span>
              <span className="text-gray-900 text-base font-medium">
                {priceFmt(total)}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="flex-1 bg-white flex justify-start items-start py-8 lg:py-20 px-4 lg:pl-16">
        <div className="flex flex-col gap-6 w-full max-w-md lg:w-96">
          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Pay with PayNow
          </h1>
          
          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              type="email"
              placeholder="email@example.com"
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Name
            </label>
            <Input
              type="text"
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          {/* Payment Method Section */}
          <div className="flex flex-col gap-4 mt-4">
            <h3 className="text-lg font-medium text-gray-900">
              Payment method
            </h3>
            
            {/* PayNow Option */}
            <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
              <div className="flex flex-col gap-3">
                {/* PayNow Logo/Title */}
                <div className="text-purple-600 font-bold text-lg">
                  PAYNOW
                </div>
                
                {/* Description */}
                <p className="text-sm text-gray-600">
                  PayNow is supported by bank apps and payment apps such as DBS, POSB, OCBC, UOB and GrabPay
                </p>
                
                {/* QR Code Info */}
                <div className="flex items-center gap-3 mt-2">
                  <Smartphone className="size-6 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    You will be shown a QR code to scan using your preferred banking or payment app
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pay Button */}
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium mt-6">
            Pay
          </Button>
          
          {/* Footer */}
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-500">
            <span>Powered by <strong>stripe</strong></span>
            <span>•</span>
            <a href="#" className="hover:text-gray-700">Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-700">Privacy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayNow;
