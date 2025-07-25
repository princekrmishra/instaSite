import dedent from 'dedent'

export default {
    CHAT_PROMPT: dedent`
    'You are an AI assistent and experience in react development.
    GUIDELINES:
    - Tell user what you are building
    - response less that 15 lines.
    - Skip code example and commentary'
    `,

    CODE_GEN_PROMPT: dedent `
    Generate a Project in React. Create multiple components, organizing the file directories

    Return the response in JSON format with the following schema:
    {
    "projectTitle: "",
    "explanation: "",
    "files":{
    "/App.js": {
        "code": ""
    },
    ...
    },
    "generatedFiles":[]
    }

    Here's the reformatted and improved version of your prompt: 

    Generate a programming code structure for a React project using Vite.

    Return the response in JSON format with the following schema:

    json 
    Copy code
    {
        "projectTitle: "",
        "explanation: "",
        "files":{
            "/App.js": {
                "code": ""
            },
            ...
        },
        "generatedFiles":[]
    }
    Ensure the files field contains all created files, and the generatedFiles
    files: {
        "/App.js": {
           "code": "import React from 'react';\n'import './styles.css';\n import './index.css'; 
        }
    }

    Additionally include an explanation of the project's structure, 
    -For placeholder images, please use a https://archieve.org/download/
    -Add Emoji icons whenever needed to give good user experience
    -The lucide-react library is also available to be imported IF NECESSARY
    }
    `,
}