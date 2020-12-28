import React, { useState } from 'react';
import { Layout, Card, Empty, List } from 'antd';
import ModalInfo from './ModalInfo';

const ShowList = ({ shows = [] }) => {
    const { Content } = Layout;
    const { Meta } = Card;
    const [ modalVisible, setModalVisible ] = useState(null);
    const showModal = (id) => setModalVisible(id);
    const dismissModal = () => setModalVisible(null);

    if(shows.length === 0) {
        return (
            <Content style={{ minHeight: 500, display: "grid", placeItems: "center" }}>
                <Empty />
            </Content>
        );
    }
    return (
        <Content style={{ padding: 24 }}>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={shows}
                renderItem={ show => (
                    <List.Item key={show.id}>
                        <Card 
                            hoverable 
                            onClick={() => showModal(show.id)}
                            cover={ show.image ? <img src={show.image?.medium} alt={show.name} /> : null }
                        >
                            <Meta title={show.name} />
                        </Card>
                        <ModalInfo isModalVisible={modalVisible === show.id} dismissModal={dismissModal} show={show} /> 
                    </List.Item>    
                )}
            />
        </Content>
    );
}

export default ShowList;