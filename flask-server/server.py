from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/members/")
def members():
    return {
        "name": {
            "required" : "required",
            "sdcdscd" : "ssads"
        }
    }

if __name__ == '__main__':
    app.run(debug=True).run(debug=True)