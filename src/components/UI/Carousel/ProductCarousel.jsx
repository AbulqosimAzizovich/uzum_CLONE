
import {Galleria} from "primereact/galleria";

export default function ProductCarousel({image}) {
   

    const responsiveOptions = [
        {
            breakpoint: "991px",
            numVisible: 8,
        },
        {
            breakpoint: "767px",
            numVisible: 3,
        },
        {
            breakpoint: "575px",
            numVisible: 1,
        },
    ];

   

    const itemTemplate = (item) => {
        return (
            <img
                src={"https://image.minibox.uz" + item}
                alt={item.alt}
                className="w-full h-[550px] object-cover border border-gray-300"
            />
        );
    };

    const thumbnailTemplate = (item) => {
        return <img src={"https://image.minibox.uz" + item} alt={item.alt} className="w-[85px] min-h-[113px]" />;
    };

    return (
        <div className="card">
            <Galleria
                value={image}
                responsiveOptions={responsiveOptions}
                numVisible={5}
                style={{maxWidth: "508px", height: "500px"}}
                item={itemTemplate}
                thumbnail={thumbnailTemplate}
                indicatorsPosition="left"
                thumbnailsPosition="left"
                showItemNavigators={true}
            />
        </div>
    );
}
