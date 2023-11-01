import React, { useCallback } from "react";
import { useDrag } from "react-dnd";
import Card from "./Card";

const AllImages = ({
    allImages,
    setAllImages,
    selectedImage,
    setSelectedImage,
}) => {
    // move image
    const moveImage = useCallback((dragIndex, hoverIndex) => {
        setAllImages((prevCards) => {
            const clonedCards = [...prevCards];
            const removedItem = clonedCards.splice(dragIndex, 1)[0];
            clonedCards.splice(hoverIndex, 0, removedItem);
            return clonedCards;
        });
    }, []);

    // select image
    const handleSelectImage = (id) => {
        if (selectedImage.includes(id)) {
            setSelectedImage(selectedImage.filter((i) => i !== id));
        } else {
            setSelectedImage([...selectedImage, id]);
        }
    };

    return (
        <main>
            {/* make grid layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {/* show all images */}
                {allImages.map((image, index) => (
                    <Card
                        key={index}
                        src={image.src}
                        id={image.id}
                        index={index}
                        moveImage={moveImage}
                        handleSelectImage={handleSelectImage}
                        selectedImage={selectedImage}
                    />
                ))}

                {/* add image button */}
                <div className="border-[1.5px] border-gray-400 border-dashed rounded-lg cursor-pointer w-full h-full flex flex-col justify-center items-center text-gray-500 py-4">
                    <span className="material-symbols-rounded mb-3 text-4xl">
                        add_a_photo
                    </span>
                    <p>Add an image</p>
                </div>
            </div>
        </main>
    );
};

export default AllImages;
