from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
import pandas as pd
import pickle

def main():
    # Load data
    df = pd.read_csv('../Dataset/csv/train csv.csv')

    # Preprocess data (using all features this time)
    feature_columns = [
        'squareMeters', 'numberOfRooms', 'hasYard', 'hasPool', 'floors',
        'cityPartRange', 'numPrevOwners', 'made',
        'isNewBuilt', 'hasStormProtector', 'basement', 'attic',
        'garage', 'hasStorageRoom', 'hasGuestRoom',
        'hasFirePlace', 'hasBalcony', 'hasSolarPanels', 'hasAirCondition',
        'hasView', 'hasSecuritySystem'
    ]

    X = df[feature_columns]
    y = df['price']

    # Split data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Train model
    model = RandomForestRegressor(random_state=42)
    model.fit(X_train, y_train)

    # Save model
    with open('model/RandomForestPredictionsModel.pkl', 'wb') as model_file:
        pickle.dump(model, model_file)

if __name__ == '__main__':
    main()
