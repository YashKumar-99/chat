import React from 'react';
import { Image as BootstrapImage } from 'react-bootstrap';
import reciverImage from '../../assets/images/reciver.png';
import senderImage from '../../assets/images/sender.png';
import moment from 'moment';

import './index.css'
const MessageComponent = ({ item }) => {
    return (
        <div className={`chatfea ${item.user ? 'chatfea-right' : ''}`}>
            <div className='profile-pic'>
                {item.profilePicStatus && (
                    <BootstrapImage src={item.user ? reciverImage : senderImage} alt="Profile Image" />
                )}
            </div>
            <div>
                {item.title && <p style={{ borderTopRightRadius: item.user ? '0px' : '0px', borderTopLeftRadius: item.user ? '0px' : '5px' }}>{item.title}</p>}
                {item.image && (
                    <div>
                        <BootstrapImage src={URL.createObjectURL(item.image)} alt="Selected Image" thumbnail />
                    </div>
                )}
                <div style={{ textAlign: item.user ? 'right' : 'left' }}>
                    <span>{moment(item.timestamp).format('HH:mm')}</span>
                </div>
            </div>
        </div>
    );
};

export default MessageComponent;
