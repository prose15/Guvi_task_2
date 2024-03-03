// src/Modal.js
import React from 'react';

const Modal = ({ isOpen, handleClose, ingredients }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-0 left-0 w-4/12 h-full bg-black bg-opacity-5 flex items-center justify-center">
      <div className="bg-white p-4 max-w-md">
        <button className="absolute top-2 right-2 text-gray-600" onClick={handleClose}>
          Close
        </button>
        <h2 className="text-lg font-bold mb-2">Ingredients</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
