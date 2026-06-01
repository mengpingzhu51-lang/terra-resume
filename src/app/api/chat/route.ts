import { resumeAgent } from "@/lib/agent/resume-agent";

export async function POST(request: Request) {
  try {
    const { message, threadId } = await request.json();

    if (!message) {
      return Response.json({ error: "message is required" }, { status: 400 });
    }

    const result = await resumeAgent.invoke(
      {
        messages: [{ role: "user", content: message }],
      },
      {
        configurable: {
          thread_id: threadId ?? `thread-${Date.now()}`,
        },
      }
    );

    const lastMessage = result.messages[result.messages.length - 1];

    return Response.json({
      message: lastMessage.content,
      threadId: threadId ?? `thread-${Date.now()}`,
    });
  } catch (error) {
    console.error("Agent error:", error);
    return Response.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
