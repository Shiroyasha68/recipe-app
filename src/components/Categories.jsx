import {Link} from 'react-router-dom';
const Categories = () => {
    return (
        <div className="categories mt-6">
            <h1 className="font-bold text-lg">Kategori</h1>
            <div className="category mt-4 grid grid-cols-2 gap-2">
                <Link to="List/resep-dessert">
                    <div className="items flex flex-col items-center">
                        <img src="./image 4.png" alt="" />
                        <p className="text-lg mt-2">Dessert</p>
                    </div>
                </Link>
                <Link to="List/sarapan">
                    <div className="items flex flex-col items-center">
                        <img src="./image 5.png" alt="" />
                        <p className="text-lg mt-2">Sarapan</p>
                    </div>
                </Link>
                <Link to="List/makan-siang">
                    <div className="items flex flex-col items-center">
                        <img src="./image 6.png" alt="" />
                        <p className="text-lg mt-2">Makan Siang</p>
                    </div>
                </Link>
                <Link to="List/makan-malam">
                    <div className="items flex flex-col items-center">
                        <img src="./image 7.png" alt="" />
                        <p className="text-lg mt-2">Makan Malam</p>
                    </div>
                </Link>
                <Link to="List/masakan-tradisional">
                    <div className="items flex flex-col items-center">
                        <img src="./image 8.png" alt="" />
                        <p className="text-lg mt-2">Tradisional</p>
                    </div>
                </Link>
                <Link to="List/resep-seafood">
                    <div className="items flex flex-col items-center">
                        <img src="./image 9.png" alt="" />
                        <p className="text-lg mt-2">Seafood</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Categories;