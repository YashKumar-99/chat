import React from 'react';

import './Chatpage.css'

import { Container, Row, Col } from 'react-bootstrap'

import ChatBox from '../componets/chatbox';
import { useSelector } from 'react-redux';

import ChatDisplay from '../componets/chatDisplay';
const Chatpage = () => {




    const store = useSelector((store) => store.chat);

    console.log(store, "store is here");


    return (
        <Container fluid>
            <Row >

                <Col>




                    <div className='mainChatDiv'>


                        <div className='chatDisplaySec'>


                            <ChatDisplay />
                        </div>

                        <div className='doChatSec'>


                            <ChatBox />
                        </div>
                    </div>


                </Col>
            </Row>
        </Container>
    )
}

export default Chatpage