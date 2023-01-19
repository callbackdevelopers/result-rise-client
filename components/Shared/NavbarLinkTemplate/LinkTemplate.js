import Link from "next/link";

function LinkTemplate({ icon, title, toggleCollapse, link }) {

    return (
        <Link href={link} className="flex py-4 px-3 items-center w-full h-full  cursor-pointer hover:bg-gray-300 rounded overflow-hidden whitespace-nowrap" >
            <span className='w-7'>
                {icon}
            </span>
            {!toggleCollapse && (
                <span
                    className="text-md font-medium text-text-light">{title}
                </span>
            )}
        </Link>
    );
}

export default LinkTemplate;