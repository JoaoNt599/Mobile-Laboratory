from flask import Flask, request, jsonify
from transformers import pipeline
from flask_cors import CORS


CORS(app)

app = Flask(__name__)


summarizer = pipeline("summarization")

@app.route("/summarize", methods=["POST"])
def summarize():
    data = request.json
    text = data.get("text", "")
    if not text:
        return jsonify({"error": "No text provided"}), 400
 
    summary = summarizer(text, max_length=50, min_length=25, do_sample=False)
    return jsonify({"summary": summary[0]['summary_text']})

if __name__ == "__main__":
    app.run(port=5000)
