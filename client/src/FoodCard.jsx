import React from 'react';
import coffee from './assets/images/coffee.jpg';
export default function FoodCard() {
    return (
        <div className='p-10' >
            <div className="max-w-md rounded-lg bg-gray-100 border border-slate-300 overflow-hidden shadow-lg">
                <img className="w-full h-44" src={coffee} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-sans-serif font-semibold mb-2">Mocha Cookie Crumble Frappuccino</div>
                    <p className="text-gray-500 text-xs">
                        A perfect blend of coffee, vanilla flavour, milk and cocoa powder. Finished with delicious chocolate whipped cream and cookie crumbs.Allergens-Wheat, Milk and Soy                    </p>
                </div>
                <div className="px-6 pt-4 pb-2 flex justify-between">
                    <div>
                        <span className="font-semibold ">₹415.</span><span className="text-sm font-semibold ">75</span>
                    </div>
                    <div>
                        <span className="inline-block w-24 bg-green-800 rounded-full px-3 py-1 text-sm font-bold text-stone-50 mr-2 mb-5 pb-2 pt-1 text-center">Add Item</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
