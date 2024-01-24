import React from 'react'

const Modal = ({ isOpen, onClose, children }) => {
    const modalClasses = isOpen ? 'fixed inset-0 flex items-center justify-center' : 'hidden';
    const overlayClasses = isOpen ? 'fixed inset-0 bg-black opacity-50' : '';
    const modalContentClasses = 'bg-white p-6 rounded-lg';
  return (
    <div> <div className={modalClasses}>
    <div className={overlayClasses} onClick={onClose}></div>
    <div className={modalContentClasses}>
      {children}
      <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Close
      </button>
    </div>
  </div>
    </div>
  )
}

export default Modal
