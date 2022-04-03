import React, { useState, useEffect } from "react";
import axios from "axios";

import MemeForm from "./MemeForm";

interface Meme {
    topText: string;
    bottomText: string;
    templateId: number;
}

interface TemplateData {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
    box_count: number;
}

const Meme: React.FC = () => {
    const [allTemplatesData, setAllTemplatesData] = useState<Array<TemplateData>>([]);
    const [meme, setMeme] = useState<Meme>({
        topText: "",
        bottomText: "",
        templateId: 0,
    });

    useEffect(() => {
        axios
            .get("https://api.imgflip.com/get_memes")
            .then((response) => response.status === 200 && response.data)
            .then((data) => {
                setAllTemplatesData(data.data.memes);
                const random = Math.floor(
                    Math.random() * data.data.memes.length
                );
                setMeme({
                    topText: "",
                    bottomText: "",
                    templateId: random,
                });
            });
    }, []);

    const changeTemplate = () => {
        const random = Math.floor(Math.random() * allTemplatesData.length);
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                templateId: random,
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
                changeTemplate={changeTemplate}
            />
            <div className="meme">
                <img
                    src={allTemplatesData[meme.templateId]?.url}
                    className="meme-image"
                />

                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
};

export default Meme;
