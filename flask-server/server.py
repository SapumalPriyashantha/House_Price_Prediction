from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Load the saved model
with open('model/RandomForestPredictionsModel.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

@app.route('/', methods=['POST'])
def predict():
    if request.method == 'POST':
        # Parse JSON data sent from the frontend
        data = request.json

        # Extract necessary fields from the data
        squareMeters = data.get('squareMeters', 0)
        floors = data.get('floors', 0)
        numPrevOwners = data.get('numPrevOwners', 0)
        basement = data.get('basement', 0)
        garage = data.get('garage', 0)
        numberOfRooms = data.get('numberOfRooms', 0)
        cityPartRange = data.get('cityPartRange', 0)
        made = data.get('made', 0)
        attic = data.get('attic', 0)
        hasGuestRoom = data.get('hasGuestRoom', 0)
        hasYard = data.get('hasYard', 0)
        isNewBuilt = data.get('isNewBuilt', 0)
        hasStorageRoom = data.get('hasStorageRoom', 0)
        hasBalcony = data.get('hasBalcony', 0)
        hasAirCondition = data.get('hasAirCondition', 0)
        hasSecuritySystem = data.get('hasSecuritySystem', 0)
        hasPool = data.get('hasPool', 0)
        hasStormProtector = data.get('hasStormProtector', 0)
        hasFirePlace = data.get('hasFirePlace', 0)
        hasSolarPanels = data.get('hasSolarPanels', 0)
        hasView = data.get('hasView', 0)

        # Convert data to a suitable format for the model
        model_input = np.array([
            float(squareMeters),
            int(floors),
            int(numPrevOwners),
            int(basement),
            int(garage),
            int(numberOfRooms),
            int(cityPartRange),
            int(made),
            int(attic),
            int(hasGuestRoom),
            int(hasYard),
            int(isNewBuilt),
            int(hasStorageRoom),
            int(hasBalcony),
            int(hasAirCondition),
            int(hasSecuritySystem),
            int(hasPool),
            int(hasStormProtector),
            int(hasFirePlace),
            int(hasSolarPanels),
            int(hasView),
        ]).reshape(1, -1)

        # Make prediction
        prediction = model.predict(model_input)[0]

        # Format the prediction to have only two decimal places
        formatted_prediction = "{:.2f}".format(prediction)

        return jsonify({'prediction': formatted_prediction})

if __name__ == '__main__':
    app.run(debug=True)
