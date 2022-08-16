import { useState } from 'react';
import memesData from '../memesData.js';

export default function Body() {

    const [img_url, setImgUrl] = useState("")
    const [topText, setTopText] = useState("")
    const [bottomText, setBottomText] = useState("")

    function randomMeme() {
        return memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)].url;
    }

    const outlineCSS = ".outlinecolor { -webkit-text-stroke: 1.8px black;}";

    function handleClick() {
        console.log("clicked");
        const memeUrl = randomMeme();
        let text1 = document.getElementById("box1").value;
        let text2 = document.getElementById("box2").value;
        
        setImgUrl(memeUrl);
        setTopText(text1);
        setBottomText(text2);
    }

    return (
        <div className="body w-[550px] h-[485px] bg-white mx-auto relative">
            <div className="innerbox w-[500px] h-[450px] absolute top-4 left-6">
                <div className="inputs justify-between flex w-[500px] rounded pt-5 text-[12px]">
                    <input className="w-[230px] h[35px] border-[2px] border-gray-200 p-1 px-2 rounded" placeholder="Text here" type="text" id="box1" />
                    <input className="w-[230px] h[35px] border-[2px] border-gray-200 p-1 px-2 rounded" placeholder="Text here" type="text" id="box2" />

                </div>
                <div className="button pt-[15px]">
                    <button className="w-full h-[35px] bg-gradient-to-r from-navcolor1 to-navcolor2 rounded-lg px-2 text-white text-[16px] font-bold" id="generate" onClick={handleClick}>Get a new meme image</button>
                </div>
                <div className="img_field pt-[36px] relative text-white font-extrabold text-3xl tracking-tighter">
                    <div className="upperbox  w-[90%] h-10 z-10 absolute left-5 top-[55px]">
                        <p className=" text-center outlinecolor"><style>{outlineCSS}</style>{topText}</p>
                    </div>
                    <img className="w-full h-[303px]" src={img_url} alt="" id="img-box" />
                    <div className="lowerbox  w-[90%] h-10 z-10 absolute bottom-4 left-6 text-center">
                        <p className=" outlinecolor"><style>{outlineCSS}</style>{bottomText}</p>
                    </div>

                </div>
            </div>

        </div>
    )
}