import React, { useState } from 'react';
import './EmojiPicker.css';
import emojiList from './emojiList';

const EmojiPicker = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filteredEmojis = emojiList.filter(({ emoji, description }) =>
    emoji.includes(search) || description.toLowerCase().includes(search)
  );

  const handleEmojiClick = (emoji) => {
    navigator.clipboard.writeText(emoji);
    alert(`Copied: ${emoji}`);
  };

  return (
    <div className="emoji-picker">
      <h1>Emoji Picker</h1>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search emojis"
      />
      <div className="emoji-container">
        {filteredEmojis.length ? (
          filteredEmojis.map(({ emoji, description }, index) => (
            <span
              key={index}
              className="emoji"
              title={description}
              onClick={() => handleEmojiClick(emoji)}
            >
              {emoji}
            </span>
          ))
        ) : (
          <p>No emojis found</p>
        )}
      </div>
    </div>
  );
};

export default EmojiPicker;
