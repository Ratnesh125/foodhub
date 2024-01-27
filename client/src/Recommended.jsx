// Recommended.jsx
import React from 'react';
import RecommendedCard from './RecommendedCard'; // Corrected import statement

import left from './assets/images/left-arrow.svg';
import right from './assets/images/right-arrow.svg';
import coffee from './assets/images/coffee.jpg';

const data = [{
    name: "Mocha cookie crumble Frappuccino",
    kcal: "PER SERVE(50gm)-302 Kcal",
    price: {
        rupee: "315",
        paise: "75"
    },
    imageUrl: coffee
}];

export default function Recommended() {
    return (
        <div className='pb-5 bg-stone-50 pt-2 '>
            <div className='bg-stone-50 text-2xl pl-20 pt-5 pb-5 text-teal-950 font-bold'>
                Barista Recommended
            </div>
            <div>
                <div className='bg-stone-50 flex justify-around'>
                    <button>
                        <img className='h-10 w-10' src={left} alt="Left Arrow" />
                    </button>
                    {data.map((item, index) => (
                        <RecommendedCard
                            key={index}
                            name={item.name}
                            kcal={item.kcal}
                            rupee={item.price.rupee}
                            paisa={item.price.paise}
                            imageUrl={item.imageUrl}
                        />
                    ))}
                    <button>
                        <img className='h-10 w-10' src={right} alt="Right Arrow" />
                    </button>
                </div>
            </div>
        </div>
    );
}
