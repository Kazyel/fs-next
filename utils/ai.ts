import { OpenAI } from 'langchain/llms/openai'
import { StructuredOutputParser } from 'langchain/output_parsers'
import { PromptTemplate } from 'langchain/prompts'
import z from 'zod'

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    mood: z
      .string()
      .describe('The mood of the person who wrote the journal entry.'),
    summary: z.string().describe('Quick summary of the entry.'),
    subject: z.string().describe('The subject of the journal entry.'),
    negative: z
      .boolean()
      .describe(
        'Is the journal entry negative? (i.e. does it contain negative emotions?'
      ),
    color: z
      .string()
      .describe(
        'A hexadecimal color code that represents the mood of the entry. Example, #FFFFFF for white color.'
      ),
  })
)

const getPrompt = async (content: string) => {
  const format_instructions = parser.getFormatInstructions()

  const prompt = new PromptTemplate({
    template:
      'Analyze the following journal entry. Follow the instructions and format your response to match the format instructions, no matter what! \n{format_instructions}\n{entry}',
    inputVariables: ['entry'],
    partialVariables: { format_instructions },
  })

  const input = await prompt.format({
    entry: content,
  })

  return input
}

export const analyzeEntry = async (content: string) => {
  const inputPrompt = await getPrompt(content)

  const model = new OpenAI({
    temperature: 0,
    modelName: 'gpt-3.5-turbo',
  })

  const result = await model.invoke(inputPrompt)

  try {
    return parser.parse(result)
  } catch (e) {
    console.log(e)
  }
}
