import React, { useState, useEffect } from 'react';

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const formatDate = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      
      return `${year}年${month}月${day}日 ${hours}:${minutes}:${seconds}`;
    };

    const updateDate = () => {
      const date = new Date();
      setCurrentDate(formatDate(date));
    };

    updateDate(); // 初回実行
    const intervalId = setInterval(updateDate, 1000); // 1秒ごとに更新

    return () => clearInterval(intervalId); // クリーンアップ
  }, []);

  return (
    <div>
      <p>{currentDate}</p>
    </div>
  );
};

export default CurrentDate;
