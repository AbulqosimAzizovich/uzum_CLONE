import flag from "../../assets/flag.svg";
import HeaderIcon from "../UI/ICONS/MapIcon";
const HeaderTop = () => {
    return (
        <div className="bg-[#F4F5F5]">
            <div className="container mx-auto">
                <div className="flex items-center justify-between h-[32px]">
                    <div className="flex items-center gap-x-[23px] text-[#141415]">
                        <div className="flex items-center gap-x-[10px]">
                            <span>
                                <HeaderIcon />
                            </span>
                            Shahar:<span className="font-['InterMedium'] underline">Toshkent</span>
                        </div>
                        <div className="font-['InterMedium']">Topshirish punktlari</div>
                    </div>
                    <p className="text-[#62656A]">Buyurtmangizni 1 kunda bepul yetkazib beramiz!</p>

                    <div className="flex text-[#62656A] gap-x-[15px]">
                        <p>Savol-javoblar</p>
                        <p>Buyurtmalarim</p>
                        <div className="flex items-center gap-x-1 ml-[30px] cursor-pointer">
                            <img src={flag} alt="flag" /> <span>Оʻzbekcha</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
