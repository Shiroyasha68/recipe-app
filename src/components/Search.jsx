const Search = () => {
    return (
            <div className=" search flex justify-between mt-14 border-2 border-black px-2 py-2  rounded-xl">
                <img src="./icons/search.svg" alt="" />
                <input type="text" name="" id="" className="focus:outline-none bg-transparent  w-9/12 " placeholder="Mau masak apa hari ini" />
                <button className="bg-yellow-recipe py-1 px-4 w-1/4 font-bold rounded-xl">Cari</button>
            </div>
    )
}

export default Search;