import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from 'react-tabs';

import {
  ContainerBox,
  Container,
  Row,
  FormatedTitle,
  FormatedLabel,
} from './style';

import Prospection from './Prospection';
import Realocation from './Realocation';

import All from './All';
import Open from './Open';
import Closed from './Closed';
import Recent from './Recent';
import MostCommented from './MostCommented';

import Modal from '../../components/Modal';

import {
  handleLoading,
  handleModal,
} from '../../store/actions/requests';


import RequestsContext from './context';

const Requests = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.requests.modal);
  const [interview, setInterview] = useState(null);
  const [setShowDetailRequest] = useState(false);

  return (
    <ContainerBox>
      <RequestsContext.Provider value={
        {
          interview,
          setInterview,
          setShowDetailRequest,
        }
      }
      >
        <Modal
          isOpen={modal.isOpen}
          handleModal={() => dispatch(handleModal())}
          title={modal.title}
          message={modal.message}
        />
        
        <Container>
          <Row>
            <Tabs forceRenderTabPanel>
              <TabList>
                <Tab><FormatedLabel>TODAS AS ISSUES</FormatedLabel></Tab>
                <Tab><FormatedLabel>ABERTAS</FormatedLabel></Tab>
                <Tab><FormatedLabel>FECHADAS</FormatedLabel></Tab>
                <Tab><FormatedLabel>MAIS COMENTADAS</FormatedLabel></Tab>
              </TabList>
              <TabPanel>
                <All />
              </TabPanel>
              <TabPanel>
                <Open />
              </TabPanel>
              <TabPanel>
                <Closed />
              </TabPanel>
              <TabPanel>
                <MostCommented />
              </TabPanel>
            </Tabs>
          </Row>
        </Container>
      </RequestsContext.Provider>
    </ContainerBox>
  );
};


export default Requests;
