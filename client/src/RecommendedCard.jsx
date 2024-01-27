// RecommendedCard.jsx
import React from 'react';

export default function RecommendedCard(props) {
    const { imageUrl, name, kcal, rupee, paisa } = props;

    return (
        <div className="w-96 h-40 flex flex-wrap wrap-overflow rounded-lg bg-gray-100 border border-slate-300 overflow-hidden shadow-lg">
            <img className="ml-4 mt-4 w-20 h-20 rounded-lg" src={imageUrl} alt="Coffee" />
            <div className='flex flex-col h-24'>
                <span className="font-sans-serif ml-4 mt-8 word-wrap font-semibold mb-2">{name}</span>
                <div className='ml-4 mt-1'>
                    <span className='text-xs text-gray-500'>{kcal}</span>
                </div>
            </div>
            <div className="px-6 pt-4 pb-2 w-full flex justify-between">
                <div>
                    <span className="font-semibold">₹{rupee}.{paisa}</span>
                </div>
                <div>
                    <button>
                        <span className="inline-block w-24 bg-green-800 rounded-full px-3 py-1 text-sm font-bold text-stone-50 mr-2 mb-5 pb-2 pt-1 text-center">Add Item</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
