import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';

function WrapperComponent() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <Modal>
        <View style={{flex: 1}}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </View>
  );
}
