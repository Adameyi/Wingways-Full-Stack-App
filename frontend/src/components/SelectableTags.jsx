import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SelectableTags = ({ tags = [] }) => {
    // State to manage the active tag
    const [activeTag, setActiveTag] = useState(null);

    // Function to handle tag click
    const handleTagClick = (tag) => {
        setActiveTag(tag);
    };

    return (
        <div className="flex flex-wrap gap-2 space-x-2">
            {tags.map((tag) => (
                <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={`px-4 py-2 rounded-full ${activeTag === tag
                        ? 'border-2 bg-gray-500 text-white'
                        : 'bg-white text-gray-400 hover:text-blue-800'
                        } transition-colors duration-300`}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
};

SelectableTags.propTypes = {
    tags: PropTypes.array
}

export default SelectableTags;
