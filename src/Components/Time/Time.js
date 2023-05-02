import React, { useState } from 'react';

function OptionButton({ label, selected, onClick }) {
  return (
    <button
      className={`option-button ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function OptionSelector({ options, onChange }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  function handleOptionClick(option) {
    setSelectedOption(option);
    onChange(option);
  }

  return (
    <div className="option-selector">
      {options.map((option) => (
        <OptionButton
          key={option}
          label={option}
          selected={option === selectedOption}
          onClick={() => handleOptionClick(option)}
        />
      ))}
    </div>
  );
}

export default OptionSelector;
