import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';

const initialOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

function FlavorSelector() {
    const [options, setOptions] = useState(initialOptions);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (newValue) => {
        setSelectedOption(newValue);
    };

    const handleCreate = (inputValue) => {
        const newOption = { value: inputValue.toLowerCase(), label: inputValue };
        setOptions((prevOptions) => [...prevOptions, newOption]);
        setSelectedOption(newOption);
    };

    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-4 offset-4">
                    <CreatableSelect
                        isClearable
                        onChange={handleChange}
                        onCreateOption={handleCreate}
                        options={options}
                        value={selectedOption}
                        placeholder="Select or create a flavor"
                    />
                </div>
                <div className="col-4 offset-4">
                    <button className='btn btn-light mt-4' onClick={() => alert(selectedOption.label)}>Show</button>
                </div>
            </div>
        </div>
    );
}

export default FlavorSelector;
