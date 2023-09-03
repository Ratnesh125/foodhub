import coffee from './assets/images/Bestseller.jpg';
export default function Curations() {
    return (
        <div className='bg-stone-50 pt-5 mt-52 h-44 flex justify-evenly'>
            <div className='flex flex-col bg-stone-50 h-28 w-28 rounded-full'>
                <img className='flex justify-center h-28 w-28 rounded-full' src={coffee} />
                <div className='flex justify-center pt-2 font-semibold'>coffee</div>
            </div>
        </div>
    )
}