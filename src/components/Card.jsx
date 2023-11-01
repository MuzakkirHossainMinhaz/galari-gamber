import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const Card = ({
    src,
    id,
    index,
    moveImage,
    handleSelectImage,
    selectedImage,
}) => {
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: "image",

        hover: (item, monitor) => {
            if (!ref.current) {
                return;
            }

            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();

            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            const clientOffset = monitor.getClientOffset();

            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            // move image
            moveImage(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    // monitoring when dragging
    const [{ isDragging }, drag] = useDrag({
        type: "image",
        item: () => {
            return { id, index };
        },
        collect: (monitor) => {
            return {
                isDragging: monitor.isDragging(),
            };
        },
    });

    // opacity controll when dragging
    const opacity = isDragging ? 0.9 : 1;
    drag(drop(ref));

    return (
        <div
            ref={ref}
            style={{ opacity }}
            className={`relative overflow-hidden border rounded-2xl group hover:bg-slate-800 duration-500 ${
                index === 0 && "row-span-2 col-span-2"
            }`}
        >
            {/* check if image is selected */}
            {selectedImage.includes(id) ? (
                <span
                    onClick={() => handleSelectImage(id)}
                    className="material-symbols-rounded absolute top-2 left-2 text-2xl lg:text-3xl xl:text-4xl cursor-pointer text-white bg-blue-600 px-0.5 rounded-lg z-50 duration-500"
                >
                    check_box
                </span>
            ) : (
                <span
                    onClick={() => handleSelectImage(id)}
                    className="material-symbols-rounded absolute top-2 left-2 rounded-lg text-gray-700 text-2xl lg:text-3xl xl:text-4xl cursor-pointer z-50 duration-500 px-0.5"
                >
                    check_box_outline_blank
                </span>
            )}
            {/* show image */}
            <img
                src={src}
                alt="image"
                className={`w-full rounded-xl group-hover:scale-[1.05] group-hover:opacity-75 duration-500 bg-white cursor-grab`}
            />
        </div>
    );
};

export default Card;
