import logo from "../assets/Troll Face.png"

export default function Nav() {
    return (
        <nav>
            <div className="box w-[550px] h-[65px] mx-auto bg-gradient-to-r from-navcolor1 to-navcolor2 text-white flex px-8 items-center justify-between">
                <div className="left flex">
                    <img className="w-[31px] h-[26px] mr-2" src={logo} alt="" />
                    <h1 className="text-[20px] font-bold">Meme Generator</h1>
                </div>
                <div className="right text-[12px]">
                    <h3 className="">React Course - Project 3</h3>
                </div>
            </div>
        </nav>
    )
}