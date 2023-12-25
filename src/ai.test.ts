import { createAzureAPI } from "./ai"


declare global {
  function getMiniflareBindings(): {
    ENV_AZURE_URL: string
    ENV_AZURE_API_KEY: string
    ENV_AZURE_API_VERSION: string
  }
}

const env = getMiniflareBindings()

describe("azure_openai", () => {
  const ai = createAzureAPI({
    url: env.ENV_AZURE_URL,
    apiKey: env.ENV_AZURE_API_KEY,
    apiVersion: env.ENV_AZURE_API_VERSION
  })

  const messages = [
    { role: "user", content: "say hello" }
  ]
  const temperature = 0.3
  test("stream", async () => {
    let text = ""
    await ai.chat({
      messages,
      temperature
    }, async (r, _) => {
      text += r?.choices[0]?.delta.content ?? ""
    })
    expect(text.toLowerCase().includes("hello")).toBeTruthy()
  }, 100000)

  test("non_stream", async () => {
    const resp = await ai.chat({
      messages,
      temperature
    })
    expect(resp?.choices[0]?.message.content.toLowerCase().includes("hello")).toBeTruthy()
  }, 100000)
})
