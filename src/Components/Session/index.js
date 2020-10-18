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
} from './style';

import Prospection from './Prospection';
import Realocation from './Realocation';

import All from './All';
import Open from './Open';
import Closed from './Closed';
import Recent from './Recent';
import MostCommented from './MostCommented';



import Modal from '../../components/Modal';
import Title from '../../components/Title';

// import { updateInterview } from '../../services/api_interview';

import {
  handleLoading,
  handleModal,
} from '../../store/actions/requests';

// import { interviewStatusMessage } from '../../utils/interviewStatus';
import RequestsContext from './context';

const Requests = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.requests.modal);
  const userData = JSON.parse(localStorage.getItem('user'));
  const [interview, setInterview] = useState(null);
  const [setShowDetailRequest] = useState(false);

  const handleUpdateInterview = (input) => {
    dispatch(handleLoading(true, 'full'));
    // const date = input.status === 'SCHEDULED' ? dateFormatterUSA(input.interviewDate) : '';
    // updateInterview({ ...input})
    //   .then(() => {
    //     dispatch(handleModal(true, interviewStatusMessage[input.status], 'Sucesso'));
    //     // const copySelectedRequest = { ...interview };
    //     // dispatch(setSelectedRequest(
    //     //   {
    //     //     ...copySelectedRequest,
    //     //     status: interviewStatus[status],
    //     //     interviewDate: dateFormatterBR(interviewDate),
    //     //   },
    //     // ));
    //   })
    //   .catch((err) => {
    //     dispatch(handleModal(true, 'Ops... ocorreu um erro inesperado. Tente novamente.', 'Erro'));
        
    //   })
    //   .finRecenty(() => {
      // MostCommented.finRecenty(() => {
    //     dispatch(handleLoading(false, 'full'));
    //   });
  };

  return (
    <ContainerBox>
      <RequestsContext.Provider value={
        {
          interview,
          setInterview,
          setShowDetailRequest,
          handleUpdateInterview,
        }
      }
      >
        <Modal
          isOpen={modal.isOpen}
          handleModal={() => dispatch(handleModal())}
          title={modal.title}
          message={modal.message}
        />
        {/* <Loading
          isLoading={isLoading.full}
        /> */}
        {/* {!!interview && (
          <DetailRequest
            isOpen={showDetailRequest}
            handleClose={() => dispatch(setSelectedRequest({}))}
            selectedRequest={selectedRequest}
            setInterviewDate={(e) => dispatch(setInterviewDate(e))}
            handleUpdateInterview={handleUpdateInterview}
          />
        )} */}
        <Container>
          {/* <Title>Minhas Solicitações</Title> */}
          <Row>
            <Tabs forceRenderTabPanel>
              <TabList>
                <Tab>Todas as Issues</Tab>
                <Tab>Issues Abertas</Tab>
                <Tab>Issues Fechadas</Tab>
                <Tab>Issues Mais Comentadas</Tab>
                
              
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
