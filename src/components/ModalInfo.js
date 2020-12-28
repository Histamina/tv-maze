import React from 'react';
import { Modal } from 'antd';

const ModalInfo = ({ isModalVisible, dismissModal, show }) => {
  
  return (
      <Modal title={show.name} visible={isModalVisible} onOk={dismissModal} onCancel={dismissModal}>
        <p>Language: {show.language}</p>
        <p>Rating: {Object.keys(show.rating)}</p>
        <div>Genres: {show.genres.map((genre, i) => <ul key={i}><li>{genre}</li></ul>)}</div>
        <div >Synopsis: <p dangerouslySetInnerHTML={{__html:show.summary}}></p></div>
        <p>Status: {show.status}</p>
        <p>Official Site: <a href={show.officialSite}>{show.officialSite}</a></p>
      </Modal>
  );
};

export default ModalInfo;