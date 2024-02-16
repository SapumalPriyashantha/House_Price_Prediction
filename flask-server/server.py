from flask import Flask, render_template, request
from flask_cors import CORS
import pickle
# import numpy as np
from flask import jsonify

app = Flask(__name__)
CORS(app)

# Load the saved model
with open('model/RandomForestPredictionsModel.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

@app.route('/', methods=['GET', 'POST'])
def members():
   if request.method == 'POST':
        # Collect user input from the form
        user_input = request.form.to_dict()

        # Convert user input to a suitable format for the model
        model_input = np.array([
            float(user_input.get('squareMeters', 0)),
            int(user_input.get('floors', 0)),
            int(user_input.get('numPrevOwners', 0)),
            int(user_input.get('basement', 0)),
            int(user_input.get('garage', 0)),

            int(user_input.get('numberOfRooms', 0)),
            int(user_input.get('cityPartRange', 0)),
            int(user_input.get('made', 0)),
            int(user_input.get('attic', 0)),
            int(user_input.get('hasGuestRoom', 0)),

            int(user_input.get('hasYard', 0)),
            int(user_input.get('isNewBuilt', 0)),
            int(user_input.get('hasStorageRoom', 0)),
            int(user_input.get('hasBalcony', 0)),
            int(user_input.get('hasAirCondition', 0)),
            int(user_input.get('hasSecuritySystem', 0)),
            int(user_input.get('hasPool', 0)),
            int(user_input.get('hasStormProtector', 0)),
            int(user_input.get('hasFirePlace', 0)),
            int(user_input.get('hasSolarPanels', 0)),
            int(user_input.get('hasView', 0)),
        ]).reshape(1, -1)

        # Make prediction
        prediction = model.predict(model_input)[0]

        return jsonify({'prediction': prediction})

    # return render_template('home.jsx')

if __name__ == '__main__':
    app.run(debug=True).run(debug=True)