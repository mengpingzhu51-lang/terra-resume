import { ChatOpenAI } from "@langchain/openai";
import {
  END,
  START,
  StateGraph,
  MemorySaver,
  MessagesAnnotation,
} from "@langchain/langgraph";

const model = new ChatOpenAI({
  modelName: process.env.LANGGRAPH_LLM_MODEL ?? "moonshotai/kimi-k2",
  temperature: 0,
  openAIApiKey: process.env.OPENROUTER_API_KEY,
  configuration: {
    baseURL: process.env.LANGGRAPH_LLM_BASE_URL ?? "https://openrouter.ai/api/v1",
  },
});

const SYSTEM_PROMPT = `你是一位专业的简历优化顾问。你的任务是：
1. 分析用户提供的简历内容和职位描述
2. 识别简历中的不足之处（如缺乏量化数据、关键词缺失、措辞不专业等）
3. 提供具体、可操作的优化建议
4. 帮助用户改写简历描述，使其更具冲击力和专业性

请用中文回复，保持专业、友好的语气。`;

async function callModel(state: typeof MessagesAnnotation.State) {
  const messages = state.messages;
  const systemMessage = {
    role: "system" as const,
    content: SYSTEM_PROMPT,
  };

  const response = await model.invoke([systemMessage, ...messages]);
  return { messages: [response] };
}

const workflow = new StateGraph(MessagesAnnotation)
  .addNode("agent", callModel)
  .addEdge(START, "agent")
  .addEdge("agent", END);

const memory = new MemorySaver();

export const resumeAgent = workflow.compile({ checkpointer: memory });
