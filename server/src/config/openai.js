const { Configuration, OpenAIApi } = require('openai')
require("dotenv").config()

module.exports = class openai{

	static configuration(){
		const configuration = new Configuration({
			apiKey: process.env.OPEN_AI_KEY,
		})

		return new OpenAIApi(configuration)
	}

	static textCompletion ({prompt}) {
    return 	{
			model: "gpt-3.5-turbo",
		  messages: [
			{
			  "role": "user",
			  "content": [
				{
				  "type": "text",
				  "text": '${prompt}'
				}
			  ]
			}
		  ],
		  temperature: 1,
		  max_tokens: 256,
		  top_p: 1,
		  frequency_penalty: 0,
		  presence_penalty: 0,
		  response_format: {
			"type": "text"
		  }
		}
  }
}
