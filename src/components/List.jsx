import {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'; 
import 'swiper/css';
const List = () => {
    const [dataRecipe, setDataRecipe] = useState(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('https://thingproxy.freeboard.io/fetch/https://masak-apa.tomorisakura.vercel.app/api/recipes')
                if(!response.ok) {
                    throw new Error;
                }
                const data = await response.json();
                setDataRecipe(data.results);
                console.log(data.results);
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, [])
    return (
        <div className="list-recipe mt-14">
            <div className="title flex justify-between">
                <h1 className="text-lg font-bold">Daftar Masakan</h1>
                <p className="text-gray-500">Selengkapnya</p>
            </div>
            <div className="list mt-4">
                 {dataRecipe ? <Swiper
                slidesPerView={1.2}
                spaceBetween={30}>
                    {dataRecipe.map(item => 
                    <SwiperSlide  key={item.key}>
                        <div className="content border-2">
                            <img src={item.thumb} alt="gambar" />
                            <h1 className="font-bold text-lg">{item.title}</h1>
                        </div>
                    </SwiperSlide>
                    
                     )}
                </Swiper>
                : <div className="animate-pulse w-60 h-40 bg-gray-400"></div>}
            </div>
        </div>

    )
}
export default List;