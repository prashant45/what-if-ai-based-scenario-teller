from flask import Flask, request, jsonify
import openai
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow frontend to talk to backend

# 🔑 Add your OpenAI API key here
openai.api_key = "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"


@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    question = data.get("question", "")
    try:
        response = openai.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are a creative storyteller who answers 'what if' questions."},
                {"role": "user", "content": question}
            ]
        )
        return jsonify({"answer": response.choices[0].message.content})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
