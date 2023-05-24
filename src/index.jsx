import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


function PromptCard({ prompt ,setPrompts}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClickSend = () => {
        let textarea = document.querySelector('#prompt-textarea');
        textarea.value = prompt;
    };

    const [isHidden, setHiddened] = useState(true);


    const handleClickDelete = () => {
        setHiddened(false);
    }
    return (
        isHidden ? <div className="flex flex-col dialogue p-3 overflow-y-auto promptcard relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            {isHovered && <div className='flex flex-row justify-between'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={1.5} stroke="currentColor" className="sendSVG " onClick={handleClickSend}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={1.5} stroke="currentColor" className="sendSVG " onClick={handleClickDelete}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

            </div>}
            <p className=' font-sans text-sm font-normal text-slate-600'>{prompt}</p>

        </div> : <></>
    );
}


function PromptPart({ prompts, setPrompts }) {
    return (
        <div className='overflow-auto h-full flex flex-col gap-3  p-3' >
            {Object.keys(prompts).map((key) => (
                <PromptCard key={key} prompt={prompts[key]} setPrompts={setPrompts}/>
            ))}
        </div>
    )
}

function InputArea({ prompts, setPrompts }) {
    const [newPrompt, setNewPrompt] = useState('');

    const handleInputChange = (event) => {
        setNewPrompt(event.target.value);
    }

    const handleButtonClick = () => {
        if (newPrompt!=="") {
            setPrompts({
                ...prompts,
                [Object.keys(prompts).length + 1]: newPrompt
            });
            setNewPrompt(''); // 清空输入框
        }
    }

    return (
        <div className='flex flex-col gap-3 p-3 inputarea font-sans text-sm font-normal text-slate-600'>
            <textarea rows="3" name="Add Prompt" id="newPrompt" className="dialogue" placeholder="Add your prompt..." onChange={handleInputChange}></textarea>
            <button className='dialogue bg-red-500 p-3' onClick={handleButtonClick}>Add Prompt</button>
        </div>
    )
}
function App() {
    const initialPrompts = {
        1: "我将向你提问，你需要先把我的问题根据我们的聊天记录，重新总结为一个新的问题，并且先用英文复述这个新问题，然后再用中文回答。如果你明白的话，我将向你提问。",
        2: "你是一个翻译引擎，请将给到的文本翻译成英文，请列出3种（如果有）最常用翻译结果：单词或短语，并列出对应的适用语境（用中文阐述）、音标、词性、双语示例。",
        3: "I want you to act as a javascript console. I will type commands and you will reply with what the javascript console should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. do not write explanations. do not type commands unless I instruct you to do so. when I need to tell you something in english, I will do so by putting text inside curly brackets {like this}. My first command is console.log('Hello World');",
        4: "I want you to act as a travel guide. I will write you my location and you will suggest a place to visit near my location. In some cases, I will also give you the type of places I will visit. You will also suggest me places of similar type that are close to my first location. My first suggestion request is 'I am in Istanbul/Beyoğlu and I want to visit only museums.'",

    }
    const [prompts, setPrompts] = useState(initialPrompts);

    return (

        <div className='dialogue flex flex-col  root-body  h-full text-slate-500 '>
            <PromptPart prompts={prompts} setPrompts={setPrompts} />

            <InputArea prompts={prompts} setPrompts={setPrompts} />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('extension-root')).render(
    <React.StrictMode>
        <App />

    </React.StrictMode>,
)
