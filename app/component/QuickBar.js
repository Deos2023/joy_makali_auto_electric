import React from 'react'
import { LuClock, LuMapPin, LuPhone } from 'react-icons/lu'

const QuickBar = () => {
  return (
    <div>
      <div className="bg-red-700 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <LuPhone className="mr-2" />
              <span className="font-medium">Emergency Support:</span>
              <a href="tel:9830320876" className="ml-2 hover:underline">9830320876</a>
            </div>
            <div className="flex items-center">
              <LuClock className="mr-2" />
              <span>Open: Mon-Sun 9:00 AM - 9:00 PM</span>
            </div>
            <div className="flex items-center">
              <LuMapPin className="mr-2" />
              <span>17A Hemchandra Naskar Road, Kolkata - 700010</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickBar
