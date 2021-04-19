# Logistic Regression
from sklearn.linear_model import LogisticRegression
# find accuracy, precision, recall:
from sklearn.metrics import confusion_matrix,classification_report
from joblib import load
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import json


def main():
    url = "http://localhost:8080"

    app = Flask(__name__)
    CORS(app)
    app.config["DEBUG"] = True

    @app.route('/', methods=['POST'])
    def home():
        comment = request.get_json()
        result = analyze_sentiment(comment['text'])
        comment['sentiment'] = result
        print(comment, flush=True)
        data = json.dumps(comment)
        requests.post(url, json=comment)

        return comment

    app.run()


def analyze_sentiment(text):
    filename = 'analyzer.model'
    filename_vect = 'vectorizer.vec'
    lr = load(open(filename, 'rb'))
    vectorizer = load(open(filename_vect, 'rb'))

    comment = vectorizer.transform([text])
    prediction = lr.predict(comment)[0]
    result = False
    if(prediction==1):
        result = True
    elif(prediction==-1):
        result = False

    return result



if __name__ == '__main__':
    main()


