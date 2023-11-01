import { useState } from "react";
import AllImages from "./components/AllImages";
import Header from "./components/Header";
import { images } from "./static/images"; // all images array

const App = () => {
    const [selectedImage, setSelectedImage] = useState([]);
    const [allImages, setAllImages] = useState(images);

    return (
        <div className="bg-[#d5e4f7] w-screen h-screen p-2 lg:p-4">
            <div className="rounded-lg lg:rounded-2xl bg-white w-full h-full p-2 lg:p-4 flex flex-col gap-2 lg:gap-4 overflow-scroll">
                {/* header */}
                <Header
                    allImages={allImages}
                    setAllImages={setAllImages}
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                />

                {/* all images */}
                <AllImages
                    allImages={allImages}
                    setAllImages={setAllImages}
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                />
            </div>
        </div>
    );
};

export default App;
