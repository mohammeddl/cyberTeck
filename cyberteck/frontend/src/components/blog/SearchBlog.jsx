export default function SearchBlog(){
    return(<>
    <div className=" pt-10">
    <form id="searchForm" className="mx-auto  flex flex-col md:flex-row items-center justify-center gap-2">
        <input type="text" id="title" name="title" placeholder="Title" className="px-4 py-2 w-full md:w-auto rounded-md outline-none bg-white border border-gray-300 focus:border-gray-500"/>
        <input className="px-4 py-2 w-full md:w-auto rounded-md outline-none bg-white border border-gray-300 focus:border-gray-500" type="text" id="category" name="category" placeholder="categories"/>
        <button type="submit" id="searchBtn" className="px-6 py-2 bg-black text-white rounded-xl transition-all hover:bg-gray-800 focus:outline-none focus:bg-gray-800">
            Search
        </button>
    </form>
</div>

<div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
    <div id="result">

    </div>
</div>

    </>)
}