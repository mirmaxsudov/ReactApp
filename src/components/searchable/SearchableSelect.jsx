import React, { useState } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchableSelect = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'caramel', label: 'Caramel' },
        { value: 'peppermint', label: 'Peppermint' },
        { value: 'mint', label: 'Mint' },
        { value: 'lemon', label: 'Lemon' },
        { value: 'orange', label: 'Orange' },
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'caramel', label: 'Caramel' },
    ];

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    return (
        <div style={{ width: '300px', margin: '0 auto', paddingTop: '50px' }}>
            <h3 className='text-white mb-4 text-center'>Searchable Select</h3>
            <Select
                isSearchable
                options={options}
                value={selectedOption}
                onChange={handleChange}
                placeholder="Select a flavor..."
            />
        </div>
    );
};

export default SearchableSelect;