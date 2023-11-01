const Header = ({
    allImages,
    setAllImages,
    selectedImage,
    setSelectedImage,
}) => {
    // delete selected image(s)
    const handleDelete = () => {
        setAllImages(
            allImages.filter((image) => !selectedImage.includes(image.id)),
        ); // remove selected images from all images and update state

        setSelectedImage([]); // clear selected images
    };

    return (
        <div className="rounded-lg lg:rounded-xl bg-[#d5e4f7] w-full p-2 pb-4 px-4 flex justify-between gap-3 items-center">
            <div className="flex gap-4 items-center">
                {/* logo or brand name */}
                <h1
                    className={`logo ${
                        selectedImage.length > 0 ? "hidden" : "block"
                    } lg:block text-2xl lg:text-3xl font-bold text-gray-700`}
                >
                    Galari Gamber
                </h1>

                {/* show how many file(s) selected */}
                {selectedImage.length > 0 && (
                    <p className="text-gray-700 text-base lg:text-lg font-semibold lg:font-bold mt-2.5">
                        {selectedImage.length} File(s) Selected
                    </p>
                )}
            </div>

            {/* delete button */}
            <button
                onClick={handleDelete}
                className="text-red-500 font-medium mt-1.5 border py-1 px-3 border-red-500 rounded-md text-base lg:text-lg cursor-pointer lg:font-semibold hover:text-white hover:bg-red-500 duration-500"
            >
                Delete File(s)
            </button>
        </div>
    );
};

export default Header;
