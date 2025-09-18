from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Home page
@app.route("/")
def home():
    return render_template("index.html")

# API endpoint to check site/email
@app.route("/check", methods=["POST"])
def check_site():
    data = request.get_json()
    user_input = data.get("input")

    # --- Dummy logic (replace with real API or ML model) ---
    phishing_keywords = ["login", "secure", "verify", "free", "gmail-phish"]
    is_phishing = any(word in user_input.lower() for word in phishing_keywords)

    if is_phishing:
        return jsonify({"status": "phishing"})
    else:
        return jsonify({"status": "safe"})


if __name__ == "__main__":
    app.run(debug=True)
