import React, { useState } from 'react';
import { Layout, Menu, Spin, Popover, Button } from 'antd';
import SearchBar from './SearchBar';
import ShowList from './ShowList';
import MonthShow from './MonthShow';

const Home = () => {
    const { Header, Content, Sider } = Layout;
    const [ shows, setShows ] = useState([]);
    const [ searching, setSearching ] = useState(false);
    const hoverableButton = (
        <div>
          <p>By Julieta Gomez</p>
          <p>For Medulab</p>
        </div>
    );

    return (
        <Layout>
            <Header className="ant-row ant-row-space-around" style={{ backgroundColor:'#000' }}>
                <div className="logo ant-col ant-col-6" style={{color:'#fff'}}>
                   <h1>🎬 MEDUFLIX</h1>
                </div>
                <Menu theme="dark" className="ant-row ant-row-middle ant-col-offset-8" mode="horizontal" defaultSelectedKeys={['2']} style={{ backgroundColor:'#000' }}>
                    <SearchBar setShows={setShows} setSearching={setSearching}/>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} style={{backgroundColor: '#2b2b2b'}}>
                    <MonthShow />
                    <Content className="ant-row ant-row-center">
                        <Popover content={hoverableButton} title="Development">
                            <Button style={{marginTop:'100%'}} ghost>Hover me!</Button>
                        </Popover>
                    </Content>
                </Sider>
                <Layout>
                    { searching
                        ? <Content style={{ minHeight: 500, display: "grid", placeItems: "center", textAlign: "center" }}>
                            <Spin size="large" />
                        </Content>
                        : <ShowList shows={shows.map(show => show.show)} />
                    }
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Home;