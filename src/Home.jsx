import Search from './components/Search.jsx';
import List from './components/List.jsx';
import Categories from './components/Categories.jsx';
function Home() {
  return (
    <div className="home mx-6">
        <div className="head mt-10">
          <h1 className="text-xl font-bold">Masakan Nusantara</h1>
          <p>daftar resep masakan seluruh Indonesia</p>
        </div>
        <Search />
        <List/>
        <Categories  />
    </div>
  )
}

export default Home;
