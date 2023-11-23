import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddMessage } from '../../redux/reducer/chatReducer';
import { UpdateProfilePic } from '../../redux/reducer/chatReducer';

import { MdOutlineAttachFile } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import './index.css'
function ChatBox() {
    const [switchUser, setSwitchUser] = useState(false);
    const [message, setMessage] = useState('');
    const [checkProStatus, setProfileStatus] = useState('')
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();
    const profileImageHandler = () => {
        setProfileStatus(true);
    }
    useEffect(() => {
        setProfileStatus(true)
    }, [])


    const submitHandler = (e) => {
        e.preventDefault();
       
        if (image && message) {
            dispatch(AddMessage({ text: message, image: image, user: switchUser, profilePicStatus: checkProStatus }));

        }
        else if (message) {
            dispatch(AddMessage({ text: message, user: switchUser, profilePicStatus: checkProStatus }));

        } else if (image) {
            dispatch(AddMessage({ image: image, user: switchUser, profilePicStatus: checkProStatus }));

        }
        setImage('')
        setMessage('');
        setProfileStatus(false);

    }



    return (
        <Form onSubmit={submitHandler}>
            <Row className='bottom-section'>
                <Col>

                    <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        label="Became a  user 2"
                        value={switchUser}
                        onChange={() => setSwitchUser(!switchUser)}
                        onClick={profileImageHandler}
                    />

                    <div className='bottom-sec'>

                        <div className="file-input-container">
                            <label htmlFor="file-input" className="file-label">
                                <MdOutlineAttachFile className="file-icon" />
                            </label>
                            <Form.Control
                                id="file-input"
                                type="file"
                                accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])}
                                style={{ display: 'none' }}
                            />
                        </div>

                        <Form.Control placeholder="Write a message" value={message} onChange={(e) => setMessage(e.target.value)} />

                        <Button variant="primary" type="submit">
                            <IoSend />
                        </Button>

                    </div>


                </Col>

            </Row>
        </Form>
    );
}

export default ChatBox;