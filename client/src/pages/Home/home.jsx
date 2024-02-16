import React, {useState} from 'react';
import './home.css'
import logo from '../../assets/img/houseImage.jpg'; // Adjust the path if necessary
import Swal from 'sweetalert2';

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
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://127.0.0.1:5000/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          // Request successful
          const data = await response.json();
          console.log('Response from server:', data);
          // Reset the form after successful submission if needed
          handleReset();
        } else {
          // Request failed
          console.error('Failed to send data to server');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
  
    const handleReset = () => {
      // Show a confirmation message before resetting the form
      Swal.fire({
        title: 'Are you sure?',
        text: 'Your form data will be reset!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, reset it!',
      }).then((result) => {
        if (result.isConfirmed) {
          // If user confirms, reset the form data
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
          // Show a success message
          Swal.fire(
            'Reset!',
            'Your form has been reset.',
            'success'
          );
        }
      });
    };
  
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card">
              <div className="card-header bg-primary text-white text-center">
                <h2 className="name_container">House Price Prediction</h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit} >

                  <div className='left_container'>
                    <img src={logo} alt="Logo" />
                  </div>

                  <div className='right_container'>
                    <div className='right_containerGap'>
                    <div className='right_upperContainer'>
                      <div className='right_upperRightContainer'>
                        <div>
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
                        </div>

                        <div>
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
                        </div>

                        <div>
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
                        </div>

                        <div>
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
                        </div>

                        <div>
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
                        </div>
                      </div>

                      <div className='right_upperLeftContainer'>
                        <div>
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

                        <div>
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

                        <div>
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

                        <div>
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

                        <div>
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
                      </div>
                    </div>
                  
                    <div className='right_lowerContainer'>
                      <div className='right_lowerRightContainer'>
                        <div>
                          <label htmlFor="hasYard">Has Yard</label>
                          <input
                            type="checkbox"
                            id="hasYard"
                            name="hasYard"
                            checked={formData.hasYard}
                            onChange={(e) =>
                              setFormData({ ...formData, hasYard: e.target.checked })
                            }
                          />
                        </div>

                        <div>
                          <label htmlFor="isNewBuilt">Is New Built</label>
                          <input
                            type="checkbox"
                            id="isNewBuilt"
                            name="isNewBuilt"
                            checked={formData.isNewBuilt}
                            onChange={(e) =>
                              setFormData({ ...formData, isNewBuilt: e.target.checked })
                            }
                          />
                        </div>

                        <div>
                          <label htmlFor="hasStorageRoom">Has Storage Room</label>
                          <input
                            type="checkbox"
                            id="hasStorageRoom"
                            name="hasStorageRoom"
                            checked={formData.hasStorageRoom}
                            onChange={(e) =>
                              setFormData({ ...formData, hasStorageRoom: e.target.checked })
                            }
                          />
                        </div>

                        <div>
                          <label htmlFor="hasBalcony">Has Balcony</label>
                          <input
                            type="checkbox"
                            id="hasBalcony"
                            name="hasBalcony"
                            checked={formData.hasBalcony}
                            onChange={(e) =>
                              setFormData({ ...formData, hasBalcony: e.target.checked })
                            }
                          />
                        </div>

                        <div>
                          <label htmlFor="hasAirCondition">Has Air Condition</label>
                          <input
                            type="checkbox"
                            id="hasAirCondition"
                            name="hasAirCondition"
                            checked={formData.hasAirCondition}
                            onChange={(e) =>
                              setFormData({ ...formData, hasAirCondition: e.target.checked })
                            }
                          />
                        </div>

                        <div>
                          <label htmlFor="hasSecuritySystem">Has Security System</label>
                          <input
                            type="checkbox"
                            id="hasSecuritySystem"
                            name="hasSecuritySystem"
                            checked={formData.hasSecuritySystem}
                            onChange={(e) =>
                              setFormData({ ...formData, hasSecuritySystem: e.target.checked })
                            }
                          />
                        </div>
                      </div>

                      <div className='right_lowerLeftContainer'>
                        <div>
                          <label htmlFor="hasPool">Has Pool</label>
                          <input
                            type="checkbox"
                            id="hasPool"
                            name="hasPool"
                            checked={formData.hasPool}
                            onChange={(e) =>
                              setFormData({ ...formData, hasPool: e.target.checked })
                            }
                          />
                        </div>

                        <div>
                          <label htmlFor="hasStormProtector">Has Storm Protector</label>
                          <input
                            type="checkbox"
                            id="hasStormProtector"
                            name="hasStormProtector"
                            checked={formData.hasStormProtector}
                            onChange={(e) =>
                              setFormData({ ...formData, hasStormProtector: e.target.checked })
                            }
                          />
                        </div>

                        <div>
                          <label htmlFor="hasFirePlace">Has Fire Place</label>
                          <input
                            type="checkbox"
                            id="hasFirePlace"
                            name="hasFirePlace"
                            checked={formData.hasFirePlace}
                            onChange={(e) =>
                              setFormData({ ...formData, hasFirePlace: e.target.checked })
                            }
                          />
                        </div>

                        <div>
                          <label htmlFor="hasSolarPanels">Has Solar Panels</label>
                          <input
                            type="checkbox"
                            id="hasSolarPanels"
                            name="hasSolarPanels"
                            checked={formData.hasSolarPanels}
                            onChange={(e) =>
                              setFormData({ ...formData, hasSolarPanels: e.target.checked })
                            }
                          />
                        </div>

                        <div>
                          <label htmlFor="hasView">Has View</label>
                          <input
                            type="checkbox"
                            id="hasView"
                            name="hasView"
                            checked={formData.hasView}
                            onChange={(e) =>
                              setFormData({ ...formData, hasView: e.target.checked })
                            }
                          />
                        </div>

                      </div>
                    </div>
                    </div>
                  </div>

                  
  
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