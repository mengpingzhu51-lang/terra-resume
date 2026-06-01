# Terra Resume

AI 驱动的智能简历优化平台，帮助求职者精准匹配目标岗位，提升简历质量与竞争力。

## 平台能力

### Dashboard 仪表盘

一览全局，掌控简历优化全流程。展示通用简历完整度、针对性版本匹配得分、快捷导航入口。

### Resume Optimizer 简历优化器

针对每个目标职位创建定制化简历版本，实时追踪各版本的匹配得分与状态（草稿 / 进行中 / 已提交），支持一键创建新副本。

### AI Suggestions AI 优化建议

基于 LangGraph Agent 智能分析简历与 JD 的差距，提供三大类优化建议：

- **经验描述润色** — 量化成果、强化影响力（如"提升了产品体验" → "将用户核心操作路径缩短30%，NPS评分提升15分"）
- **技能关键词补充** — 对齐 JD 高频要求，补齐缺失技能标签
- **措辞升级** — 替换平淡表述为专业行为动词，彰显执行力和专业度

支持逐条采纳/忽略或一键采纳全部。

### JD Analysis 职位匹配分析

深度解析职位描述，从三个维度评估简历匹配度：

- **硬技能** — 技术栈、工具、方法论的关键词匹配
- **软技能** — 沟通能力、冲突解决、适应能力等软实力覆盖
- **文化契合度** — 用户导向、创新、快速试错等文化标签

同时识别技能差距（核心缺失 / 部分缺失 / 高度匹配），提供明确改进方向。

### Assessment Center 简历评估中心

全面体检简历健康度，涵盖：

- **综合健康评分** — 一目了然的总体分数
- **标准化检查** — ATS 兼容性、格式规范验证
- **内容质量分析** — Action Verbs 使用率、量化指标覆盖率

## 技术栈

| 层 | 技术 |
|---|---|
| 框架 | Next.js 15 (App Router) |
| 语言 | TypeScript |
| 样式 | Tailwind CSS v4 |
| AI Agent | LangGraph.js + ChatOpenAI |
| LLM | moonshotai/kimi-k2 (via OpenRouter) |
| 数据库 | Supabase (Postgres) |
| 部署 | Vercel |

## 快速开始

**前置条件：** Node.js >= 20

1. 安装依赖：
   ```bash
   npm install
   ```

2. 配置环境变量（复制模板并填入实际值）：
   ```bash
   cp .env.example .env
   ```

3. 启动开发服务器：
   ```bash
   npm run dev
   ```

## 环境变量

| 变量 | 说明 |
|------|------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase 项目 URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase 匿名 Key |
| `OPENROUTER_API_KEY` | OpenRouter API Key |
| `LANGGRAPH_LLM_BASE_URL` | LLM API 基础地址（默认 `https://openrouter.ai/api/v1`） |
| `LANGGRAPH_LLM_MODEL` | LLM 模型名称（默认 `moonshotai/kimi-k2`） |

## API

### POST /api/chat

与 AI 简历优化顾问对话。

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "帮我优化这段简历描述", "threadId": "my-thread"}'
```

**请求体：**

| 字段 | 类型 | 说明 |
|------|------|------|
| `message` | string | 用户消息（必填） |
| `threadId` | string | 会话 ID，用于保持上下文（可选） |

**响应：**

```json
{
  "message": "优化后的回复内容...",
  "threadId": "my-thread"
}
```
