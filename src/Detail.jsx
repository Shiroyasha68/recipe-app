import {useState, useEffect} from 'react';
const Detail = () => {
    const [dataAll, setDataAll] = useState(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`https://thingproxy.freeboard.io/fetch/api/category/recipes/${keyData}`);
                if (!response.ok) {
                    throw new Error
                }
                const data = await response.json();
                setDataAll(data.results);
            } catch (err) {
                console.log(err);
            }
        }
    }, [])
    return (
        <div className="detail mx-6">
            <h1 className="font-bold mt-10 text-lg">Daftar masakan</h1>
            <div className="content">
                <div className="item mt-6">
                    <img src="./image 11.png" alt="" />
                    <h1 className="font-bold mt-4  text-center">Resep Liwetan Khas Sunda Yang Aromanya Selalu Menggoda</h1>
                    <div className="icon flex justify-between w-4/5 mt-4 mx-auto">
                                <div className="time flex flex-col items-center">
                                    <img src="./icons/clock.png" alt="" className="w-6"/>
                                    <p className="text-sm">30 Menit</p>
                                </div>
                                <div className="difficult flex flex-col items-center">
                                    <img src="./icons/flash.png" alt="" className="w-6"/>
                                    <p className="text-sm">30 Menit</p>
                                </div>
                                <div className="portion flex flex-col items-center">
                                    <img src="./icons/salad.png" alt="" className="w-6"/>
                                    <p className="text-sm">30 Menit</p>
                                </div>
                            </div>
                </div>
                <div className="item mt-6">
                    <img src="./image 11.png" alt="" />
                    <h1 className="font-bold mt-4  text-center">Resep Liwetan Khas Sunda Yang Aromanya Selalu Menggoda</h1>
                    <div className="icon flex justify-between w-4/5 mt-4 mx-auto">
                                <div className="time flex flex-col items-center">
                                    <img src="./icons/clock.png" alt="" className="w-6"/>
                                    <p className="text-sm">30 Menit</p>
                                </div>
                                <div className="difficult flex flex-col items-center">
                                    <img src="./icons/flash.png" alt="" className="w-6"/>
                                    <p className="text-sm">30 Menit</p>
                                </div>
                                <div className="portion flex flex-col items-center">
                                    <img src="./icons/salad.png" alt="" className="w-6"/>
                                    <p className="text-sm">30 Menit</p>
                                </div>
                            </div>
                </div>
                <div className="item mt-6">
                    <img src="./image 11.png" alt="" />
                    <h1 className="font-bold mt-4  text-center">Resep Liwetan Khas Sunda Yang Aromanya Selalu Menggoda</h1>
                    <div className="icon flex justify-between w-4/5 mt-4 mx-auto">
                                <div className="time flex flex-col items-center">
                                    <img src="./icons/clock.png" alt="" className="w-6"/>
                                    <p className="text-sm">30 Menit</p>
                                </div>
                                <div className="difficult flex flex-col items-center">
                                    <img src="./icons/flash.png" alt="" className="w-6"/>
                                    <p className="text-sm">30 Menit</p>
                                </div>
                                <div className="portion flex flex-col items-center">
                                    <img src="./icons/salad.png" alt="" className="w-6"/>
                                    <p className="text-sm">30 Menit</p>
                                </div>
                            </div>
                </div>
            </div>
            <div className="more w-fit mx-auto mt-8">
                <button className="bg-yellow-recipe font-bold py-2 px-6 rounded-md">Lebih Banyak</button>
            </div>
        </div>
    )
}

export default Detail;


