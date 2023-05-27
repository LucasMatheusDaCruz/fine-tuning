import { openai } from './api.js'

async function createFineTune() {
  try {
    const response = await openai.createFineTune({
      training_file: 'file-ArXmKPNG5L13QIfng6oa0tn2',
      model: 'davinci:ft-personal-2023-04-30-17-08-27'
    })
    console.log('response: ', response)
  } catch (err) {
    console.log('error: ', err.response.data.error)
  }
}

createFineTune()