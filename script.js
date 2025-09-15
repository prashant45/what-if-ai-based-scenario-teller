document.getElementById("askBtn").addEventListener("click", async () => {
  const question = document.getElementById("question").value.trim();
  const responseDiv = document.getElementById("response");

  if (!question) {
    responseDiv.innerText = "⚠️ Please enter a 'what if' question.";
    return;
  }

  responseDiv.innerText = "⏳ Thinking...";

  try {
    const res = await fetch("http://127.0.0.1:5000/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();

    if (data.answer) {
      responseDiv.innerText = data.answer;
    } else {
      responseDiv.innerText = "⚠️ " + (data.error || "No response from AI");
    }
  } catch (err) {
    console.error(err);
    responseDiv.innerText = "❌ Error: " + err.message;
  }
});
