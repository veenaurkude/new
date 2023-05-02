
import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'papaya', label: 'Papaya' },
  { value: 'mango', label: 'Mango' },
  { value: 'pineapple', label: 'PineApple' },
  { value: 'grapes', label: 'Grapes' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'custard-apple', label: 'Custard-Apple' },
];

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <h1 style={{textAlign:"center"}}>React Searchable Dropdown</h1>
      <Select 
      value={selectedOption}
      onChange={handleChange}
      options={options}
      isMulti
      isSearchable
      noOptionsMessage={() => 'No fruits found'}
      // isDisabled
    />
    </div>
    
  );
};

export default App;
