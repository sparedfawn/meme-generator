import React from "react";

interface Props {
    meme: {
        topText: string;
        bottomText: string;
        templateId: number;
    };
    handleTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    changeTemplate: () => void;
}

const MemeForm: React.FC<Props> = ({ meme, handleTextChange, changeTemplate }) => {
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

            <button className="form-button" onClick={changeTemplate}>
                Get a new meme template 🖼
            </button>
        </div>
    );
};

export default MemeForm;
