import { openai } from './api.js'

async function createCompletion(promptText) {
  try {
    const response = await openai.createCompletion({
      model: 'davinci:ft-personal-2023-04-30-17-08-27',
      prompt: promptText,
      max_tokens: 92,
      temperature: 0.6,
      n: 2
    })
    if (response.data) {
      console.log('choices: ', response.data.choices)
      return response.data.choices;
    }
  } catch (err) {
    console.log('err: ', err)
  }
}

async function main() {
  const initialPrompt = 'Como inserir um novo item na umove?';
  const gptResponse = await createCompletion(initialPrompt);
  
  const newPrompt = gptResponse[0].text; 

  const gptResponseMain = await createCompletion(newPrompt);
  console.log('GPT response for main prompt: ', gptResponseMain);
}

main();
