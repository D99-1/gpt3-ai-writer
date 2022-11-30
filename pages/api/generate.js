import { Configuration, OpenAIApi } from 'openai';



const basePromptPrefix = "Finish off this rap song about ";
const generateAction = async (req, res) => {
    const configuration = new Configuration({
        apiKey: req.body.userApiKey,
      });
      
      const openai = new OpenAIApi(configuration);
      
      console.log(`API: ${basePromptPrefix}${req.body.userInput}`)
    console.log(`${basePromptPrefix}${req.body.userInput}:\n${req.body.userInput1}`)
var baseCompletion
try{
    baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}:\n${req.body.userInput1}`,
    temperature: 0.7,
    max_tokens: 150,
  })
}catch{}

  const basePromptOutput = baseCompletion ? baseCompletion.data.choices.pop() : null

  res.status(200).json({ output: basePromptOutput });

};

export default generateAction;
