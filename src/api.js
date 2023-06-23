export const fetchResponse =  async(chat) => {
    try {
        const response = await fetch('https://chatgpt-server-o0pbervb9-divy027.vercel.app/', { 
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: chat.map((message)=> message.message).join(" \n ") //sending all chats to model so that it can understand the context of questions
            })
        })

        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}
