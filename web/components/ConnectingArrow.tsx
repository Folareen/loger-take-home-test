import { GoDotFill } from "react-icons/go";
import { FaCaretRight } from "react-icons/fa";

const ConnectingArrow = ({ origin, destination }: { origin: number, destination: number }) => {
    const diff = Math.abs(destination - origin);
    const value = (diff * 25);
    const mt = origin
    console.log(value);
    // ${((diff) * 100)}
    return (
        <div className={` w-15 flex items-center relative ${origin > destination ? '-scale-y-100' : ''} h-[${value}%] mt-[${mt}px]`}>
            <GoDotFill color="#3434F4" className="absolute -left-2 -top-2 " />
            <div className='h-full w-7.5'>
                <div className='h-1/2 w-full border-t border-t-[#3434F4] rounded-tr-xl border-r border-r-[#3434F4]'>
                </div>
                <div className='h-1/2 w-full'>
                </div>
            </div>
            <div className='h-full w-7.5 -ml-px'>
                <div className='h-1/2 w-full '></div>
                <div className='h-1/2 w-full border-b border-b-[#3434F4] border-l border-l-[#3434F4] rounded-bl-xl -mt-px'>
                </div>
            </div>
            <FaCaretRight color="#3434F4" className="absolute -right-2 -bottom-1.5 " />
        </div>
    )
}

export default ConnectingArrow