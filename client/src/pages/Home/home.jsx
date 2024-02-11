import React, {useState} from 'react';

function Home() {
    const [formData, setFormData] = useState({
      squareMeters: '',
      numberOfRooms: '',
      floors: '',
      cityPartRange: '',
      numPrevOwners: '',
      made: '',
      basement: '',
      attic: '',
      garage: '',
      hasGuestRoom: '',
      hasYard: false,
      hasPool: false,
      isNewBuilt: false,
      hasStormProtector: false,
      hasStorageRoom: false,
      hasFirePlace: false,
      hasBalcony: false,
      hasSolarPanels: false,
      hasAirCondition: false,
      hasView: false,
      hasSecuritySystem: false,
    });
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: type === 'checkbox' ? checked : value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Implement your form submission logic here
      console.log(formData);
    };
  
    const handleReset = () => {
      setFormData({
        squareMeters: '',
        numberOfRooms: '',
        floors: '',
        cityPartRange: '',
        numPrevOwners: '',
        made: '',
        basement: '',
        attic: '',
        garage: '',
        hasGuestRoom: '',
        hasYard: false,
        hasPool: false,
        isNewBuilt: false,
        hasStormProtector: false,
        hasStorageRoom: false,
        hasFirePlace: false,
        hasBalcony: false,
        hasSolarPanels: false,
        hasAirCondition: false,
        hasView: false,
        hasSecuritySystem: false,
      });
    };
  
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card">
              <div className="card-header bg-primary text-white text-center">
                <h2>House Price Prediction</h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit} >
                  <div className="mb-3">
                    <label htmlFor="squareMeters" className="form-label">Square Meters</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="squareMeters" 
                      name="squareMeters" 
                      value={formData.squareMeters}
                      onChange={handleChange}
                      required
                    />

                    <label htmlFor="numberOfRooms" className="form-label">Number of room</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="numberOfRooms" 
                      name="numberOfRooms" 
                      value={formData.numberOfRooms}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="floors" className="form-label">Floors</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="floors" 
                      name="floors" 
                      value={formData.floors}
                      onChange={handleChange}
                      required
                    />

                    <label htmlFor="cityPartRange" className="form-label">City part range</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="cityPartRange" 
                      name="cityPartRange" 
                      value={formData.cityPartRange}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="numPrevOwners" className="form-label">numPrevOwners</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="numPrevOwners" 
                      name="numPrevOwners" 
                      value={formData.numPrevOwners}
                      onChange={handleChange}
                      required
                    />

                    <label htmlFor="made" className="form-label">made</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="made" 
                      name="made" 
                      value={formData.made}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="basement" className="form-label">basement</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="basement" 
                      name="basement" 
                      value={formData.basement}
                      onChange={handleChange}
                      required
                    />

                    <label htmlFor="attic" className="form-label">attic</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="attic" 
                      name="attic" 
                      value={formData.attic}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="garage" className="form-label">garage</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="garage" 
                      name="garage" 
                      value={formData.garage}
                      onChange={handleChange}
                      required
                    />

                    <label htmlFor="hasGuestRoom" className="form-label">hasGuestRoom</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="hasGuestRoom" 
                      name="hasGuestRoom" 
                      value={formData.hasGuestRoom}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
  
                  {/* Add other input fields similarly */}
  
                  <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary" id="predict-button">Predict</button>
                    <button type="button" className="btn btn-secondary float-end" onClick={handleReset}>Reset</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Home