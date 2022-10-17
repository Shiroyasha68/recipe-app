const Content = () => {
    return (
        <div className="content relative ">
            <div className="fixed">
                <h1 className="font-bold mx-6 mt-6 text-lg ">Daftar masakan</h1>
                <img src="./image 14.png" alt="" className="mt-6" />
            </div>
            <div className="h-80"></div>
            <div className="item absolute bg-white-recipe rounded-t-3xl top-3/4">
                <div className="mx-6">
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
                    <div className="desc mt-10">
                        <h1 className="font-bold">Deskripsi</h1>
                        <p className="mt-4">Bicara soal tahu susu Lembang, tentunya tidak selalu harus digorang seperti biasa. Rupanya banyak cara untuk mengolah protein sehat yang satu ini dan kali ini aku tidak segan-segan berbagi tiga resep! Tidak ada yang terlampau menyulitkan ketika mengolah yang namanya tahu. hanya saja, tahu susu yang berwarna putih ini rasanya sudah istimewa, sehingga tentu cara pengolahannya juga harus lebih spesial. </p>
                        <div className="alat">
                            <h1 className="font-bold xsmt-6">Alat Dan Bahan</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed vero, ipsum aut eum corporis et tempore doloribus praesentium rerum repellat eius, quisquam, deserunt at nisi reiciendis aperiam placeat labore autem.
                            Consectetur tenetur vero, natus dicta, officia blanditiis labore unde, neque suscipit inventore ratione expedita corrupti dolorum numquam animi reiciendis doloribus repellendus possimus quia. Quia quas maxime ab. Nesciunt, enim? Cupiditate!</p>
                        </div>
                    </div>
                    <div className="w-fit mx-auto"><button className="mt-8 py-2 px-28 bg-yellow-recipe font-bold rounded-md">Mulai</button></div>
                </div>
            </div>
        </div>
    )
}


export default Content;