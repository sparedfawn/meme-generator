import React, { useState, useEffect } from "react";
import axios from "axios";

import MemeForm from "./MemeForm";

interface MemeState {
    topText: string;
    bottomText: string;
    randomImageId: number;
}

interface MemeData {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
    box_count: number;
}

const Meme: React.FC = () => {
    const [allMemeData, setAllMemeData] = useState<Array<MemeData>>([]);
    const [meme, setMeme] = useState<MemeState>({
        topText: "",
        bottomText: "",
        randomImageId: 0,
    });

    useEffect(() => {
        axios
            .get("https://api.imgflip.com/get_memes")
            .then((response) => response.status === 200 && response.data)
            .then((data) => {
                setAllMemeData(data.data.memes);
                const random = Math.floor(
                    Math.random() * data.data.memes.length
                );
                setMeme({
                    topText: "",
                    bottomText: "",
                    randomImageId: random,
                });
            });
    }, []);

    const getMeme = () => {
        const random = Math.floor(Math.random() * allMemeData.length);
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImageId: random,
            };
        });
    };

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                [name]: value,
            };
        });
    };

    return (
        <main>
            <MemeForm
                meme={meme}
                handleTextChange={handleTextChange}
                getMeme={getMeme}
            />
            <div className="meme">
                <img
                    src={allMemeData[meme.randomImageId]?.url}
                    className="meme-image"
                />

                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
};

export default Meme;
