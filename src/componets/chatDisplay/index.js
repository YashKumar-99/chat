import React from 'react';
import { useSelector } from 'react-redux';
import MessageComponent from '../message';
const ChatDisplay = () => {
  const data = useSelector((store) => store.chat.data);

  return (
    <div>
      {data && data.map((item, index) => <MessageComponent key={index} item={item} />)}
    </div>
  );
};

export default ChatDisplay;
