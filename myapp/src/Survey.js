import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Survey.css';

function Survey() {
  const [currentStep, setCurrentStep] = useState(1);
  const [surveyData, setSurveyData] = useState({
    question1: '',
    question2: [],
    question3: '',
    question4: '',
  });

  const options = [
    'Option A - Description of the reason for visiting the website',
    'Option B - Description of the reason for visiting the website',
    'Option C - Description of the reason for visiting the website',
    'Option D - Description of the reason for visiting the website',
  ];

  const bodyParts = [
    'Head',
    'Neck',
    'Shoulders',
    'Upper Back',
    'Lower Back',
    'Chest',
    'Stomach',
    'Arms',
    'Elbows',
    'Wrists',
    'Hands',
    'Fingers',
    'Hips',
    'Thighs',
    'Knees',
    'Shins',
    'Calves',
    'Ankles',
    'Feet',
    'Toes',
  ];

  const navigate = useNavigate();

  /*Question 2*/
  const toggleOption = (option) => {
    setSurveyData({
      ...surveyData,
      question2: surveyData.question2.includes(option)
        ? surveyData.question2.filter((o) => o !== option)
        : [...surveyData.question2, option],
    });
  };

  /* Question 3 */
  const handleCheckboxChange = (area) => {
    const updatedAreas = surveyData.question3.includes(area)
      ? surveyData.question3.filter((a) => a !== area)
      : [...surveyData.question3, area];

    setSurveyData({ ...surveyData, question3: updatedAreas });
  };

  const [otherPainArea, setOtherPainArea] = useState('');

  const handleOtherPainAreaChange = (e) => {
    setOtherPainArea(e.target.value);
  };

  // q4
  const handleSubmit = () => {
    console.log('Survey Data:', surveyData);

    navigate('/success');
  };

  const nextStep = () => {
    if (currentStep === 4) {
      handleSubmit();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (e) => {
    setSurveyData({ ...surveyData, [e.target.name]: e.target.value });
  };

  return (
    <div className="survey-container">
      <h4>QUESTION {currentStep}</h4>

      {currentStep === 1 && (
        <div>
          <label className="survey-question">
            <h3>What brings you here today?</h3>
          </label>
          <select
            name="question1"
            className="survey-input"
            value={surveyData.question1}
            onChange={handleChange}
          >
            <option value="">Select a reason</option>
            <option value="red">Seek treatment for a medical issue</option>
            <option value="blue">Register patients</option>
            <option value="green">Register your account</option>
            <option value="green">Other</option>
          </select>
        </div>
      )}

      {currentStep === 2 && (
        <div className="survey-options-container">
          <h3>What brings you here today?</h3>

          <label className="survey-question">Select all that apply:</label>
          {options.map((option, index) => (
            <div
              key={index}
              name="question2"
              className={`survey-option ${
                surveyData.question2.includes(option) ? 'active' : ''
              }`}
              onClick={() => toggleOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}

      {currentStep === 3 && (
        <div className="survey-question-container">
          <label className="survey-question">
            Where are you experiencing pain?
          </label>
          <div className="checkbox-grid">
            {bodyParts.map((area, index) => (
              <div key={index} className="checkbox-container">
                <input
                  type="checkbox"
                  id={`checkbox-${area}`}
                  name="question3"
                  value={area}
                  checked={surveyData.question3.includes(area)}
                  onChange={() => handleCheckboxChange(area)}
                />
                <label htmlFor={`checkbox-${area}`} className="checkbox-label">
                  {area}
                </label>
              </div>
            ))}
          </div>
          <div className="other-option-container">
            <label className="survey-question survey-question-text">
              Other area:
            </label>
            <input
              type="text"
              className="survey-input"
              value={otherPainArea}
              onChange={handleOtherPainAreaChange}
              placeholder="Please specify"
            />
          </div>
        </div>
      )}

      {currentStep === 4 && (
        <div className="survey-question-container">
          <label className="survey-question">How severe is your pain?</label>
          <p>
            On a scale of 1 (very mild) to 10 (worst imaginable), please select
            the intensity of your pain.
          </p>
          <div className="slider-container">
            <span>1</span>
            <input
              type="range"
              min="1"
              max="10"
              value={surveyData.question4}
              onChange={(e) =>
                setSurveyData({ ...surveyData, question4: e.target.value })
              }
              className="slider"
            />
            <span>10</span>
          </div>
          <div className="slider-value">
            Severity: {surveyData.question4 || 'N/A'}
          </div>
        </div>
      )}
      <div>
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="survey-button survey-button-top"
        >
          PREVIOUS
        </button>
        <button onClick={nextStep} className="survey-button">
          {currentStep === 4 ? 'SUBMIT' : 'NEXT'}
        </button>
      </div>
    </div>
  );
}

export default Survey;
