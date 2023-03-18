const { Configuration, OpenAIApi } = require("openai");


export async function ChatGptRequest(props) {

  const prompt = console.prompt("Ask ChatGPT")
  // const [status, setStatus] = useState('idle');
  
  const configuration = new Configuration({
    apiKey: process.env.apiKEy,
  });

  

  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 7,
    temperature: 0,
  });


console.alert(response);
}

