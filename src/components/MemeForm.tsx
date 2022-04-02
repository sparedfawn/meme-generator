import React from "react";

interface Props {
    meme: {
        topText: string;
        bottomText: string;
        randomImageId: number;
    };
    handleTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    getMeme: () => void;
}

const MemeForm: React.FC<Props> = ({ meme, handleTextChange, getMeme }) => {
    return (
        <div className="form">
            <input
                type="text"
                className="form-input"
                placeholder="Top text"
                name="topText"
                value={meme.topText}
                onChange={handleTextChange}
            />

            <input
                type="text"
                className="form-input"
                placeholder="Bottom text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleTextChange}
            />

            <button className="form-button" onClick={getMeme}>
                Get a new meme image 🖼
            </button>
        </div>
    );
};

export default MemeForm;
