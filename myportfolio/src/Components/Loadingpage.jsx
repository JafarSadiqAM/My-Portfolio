import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loadingpage = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return showLoading ? (
    <div className="h-screen flex flex-col items-center justify-center">
      <FaSpinner className="animate-spin text-4xl mb-4" />
      <p className="text-lg">Loading...</p>
    </div>
  ) : null;
};

export default Loadingpage;
