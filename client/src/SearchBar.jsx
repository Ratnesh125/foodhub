// import search from "./assets/images/search.svg";
export default function SearchBar() {
    return (
        <div className="p-52">
            <div className="w-96 border-2 border-gray-300 h-10 rounded-full text-sm flex">
                <input
                    className="flex-grow h-full px-4 pl-8 rounded-l-full text-sm focus:outline-none"
                    type="text"
                    name="search"
                    placeholder="Looking for something specific?"
                />
                <button
                    type="submit"
                    className="flex-shrink-0 bg-transparent bg-white border-none p-2 pr-4 pl-0 rounded-r-full"
                >
                    <img src="{search}" alt="Your SVG" />
                </button>
            </div>
        </div>
    )
}