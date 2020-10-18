import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Person, Launch, PictureAsPdfOutlined } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import MaterialTable from 'material-table';
import { EnumType } from 'json-to-graphql-query';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import tableIcons from '../../../utils/tableIcons';

import { getFile, DownloadFile } from '../../../services/api_curriculo';
import { getFileExtension } from '../../../utils/file';
// import {
//   getProfessionalWithEmail,
  
// } from '../../../services/api_professionals';

import {
  dateFormatterBR,
  // dateFormatterUSA
} from '../../../utils/dateFormatter';

import {
  handleProfessional,
  handleLoading,
  handleModal,
  clearProfessional,
  handleChangeProfessionalInterview,
} from '../../../store/actions/professional';

// import Document from './Document/DocumentPDF/index';

import currencyFormatter from '../../../utils/currencyFormatter';

import { getAllProspect } from '../../../services/api_interview';

import DetailRequest from '../DetailRequest';
import Details from './Details';

import ResquestContext from '../context';

function Prospection() {
  
  const userData = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState({});
  const [limit] = useState(5);
  
  
  const { setInterview, interview } = useContext(ResquestContext);
  const [showDetailRequest, setShowDetailRequest] = useState(false);
  const professional = useSelector((state) => state.professional.professional );
  const [requests, setRequests] = useState([]);

  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);




  const getRequests = async () => {
    setIsLoading(true);
    getAllProspect(1, 5, new EnumType('PROSPECT'))
      .then((res) => {
        const formatedRequests = res.data.interviews.map((request) => (
          {
            ...request,
            status: request.status.name,
            createdAt: dateFormatterBR(request.createdAt),
            interviewDate: request.interviewDate ? dateFormatterBR(request.interviewDate) : 'Não marcada',
            name: request.professional.name,
            client: request.client,
            pdf: request.professional.keyCv,
            interviewDateCalendar: request.interviewDate,
            isMarktedInterview: !!request.interviewDate,
            remuneration: currencyFormatter(request.salary),
            
          }
        ));
        setTotal(100)
        setRequests(formatedRequests);
        
      })
      .catch((err) => {
        
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const getRequestsPagination = async (query) => {
    
    let res = await getAllProspect(query.page + 1, query.pageSize, new EnumType('PROSPECT'))
        
    const formatedRequests = res.data.interviews.map((request) => (
      {
        ...request,
        status: request.status.name,
        createdAt: dateFormatterBR(request.createdAt),
        interviewDate: request.interviewDate ? dateFormatterBR(request.interviewDate) : 'Não marcada',
        interviewDateCalendar: request.interviewDate,
        isMarktedInterview: !!request.interviewDate,
        remuneration: currencyFormatter(request.salary),
        attendedBy: request.attendedBy,
      }
    ));
    
    return {                         
      data: formatedRequests,
      page: query.page,
      totalCount: formatedRequests && formatedRequests.length>0? res.data.interviews[0].pagination.total : 0
    }
  };

   
  const openDetailRequest = (request) => {
    setIsLoading(true);
    setShowDetailRequest(true);
    setInterview(request);
    setIsLoading(false);
  };


  const openDetailProfessional = (request) => {
    setIsLoading(true);
    const id = request.professional.id;
    history.push(`/professional/${id}`);
  };

 
  
  const handleGetBook = async (keyCv) => {

    
    
        const response = await getFile(`books/${keyCv.professional.keyBook}`);
        
        if (response.status === 404) {
          dispatch(handleLoading(false));
          dispatch(handleModal(true, 'Ops... Parece que o arquivo não foi encontrado.', 'Erro'));
        } else {
          DownloadFile(response.data, `curriculo.${getFileExtension(keyCv.professional.keyBook)}`);
          dispatch(handleLoading(false));
        }
 
     
      dispatch(handleLoading(false));
   
 
  }
  
  
  const basicColumns = [
    {title: 'ID', field: 'id', searchable: true },
    {title: 'Nome', field: 'name', searchable: true },
    {title: 'Status', field: 'status' },
    {title: 'Cliente',  field: 'client'},
     
    {
      title: 'Baixar',
      field: 'pdf',
      render: (rowData) => {
        return rowData.professional && !!rowData.professional.keyBook ? (

            <IconButton onClick={() => 
                      handleGetBook(rowData)
           }>
              <PictureAsPdfOutlined />
            </IconButton>

        ) : 
        (<div/>)
        }
        
        
    },
    
  ];

  const managerColumns = [
    { title: 'Cargo', field: 'role' },
    { title: 'Localidade', field: 'workplace' },
  ];

  const columns = userData.permission === 'RH' || userData.permission === 'RH_WL' || userData.permission === 'MANAGER' || userData.permission === 'MANAGER_WL' ? basicColumns : basicColumns.concat(managerColumns);
  const basicActions = [
    {
      icon: Person,
      tooltip: 'Detalhes do Profissional',
      onClick: (e, request) => openDetailProfessional(request),
    },
  ];
  

  const rhActions = [
    {
      icon: Launch,
      tooltip: 'Mostrar Detalhes',
      onClick: (e, request) => openDetailRequest(request),
    },
  ];

  useEffect(() => {
    getRequests();
    // handleGetBook();
    // eslint-disable-next-line
  }, []);



  // const openDetailRequest = (request) => {
  //   setInterview(request);
  //   setShowDetailRequest(true);
  // };

  const actions = userData.permission === 'RH'
                  || userData.permission === 'RH_WL'
                  || userData.permission === 'MANAGER'
                  || userData.permission === 'MANAGER_WL' ? basicActions.concat(rhActions) : basicActions;

  const handleCloseModal =  () => {
    setShowDetailRequest(false);
    setInterview(null);
  }
  return (
    <>
      
    <Container>
      {interview && (
          <DetailRequest
            isOpen={showDetailRequest}
            handleClose={() => handleCloseModal()}
            selectedRequest={selectedRequest}
            setInterviewDate={(e) => console.log(e)}
            handleUpdateInterview={() => console.log('handleUpdateInterview')}
          >
            <Details request={interview}/>
          </DetailRequest>
        )}
      {!interview && (
        <MaterialTable
          icons={tableIcons}
          title="Prospecções"
          columns={columns}
          actions={actions}
          data={getRequestsPagination}
          totalCount={total}
          page={page}
          loading={loading}
          components={{
            Toolbar: () => (<div />),
          }}
          localization={{
            header: {
              actions: '',
            },
            body: {
              emptyDataSourceMessage: 'Nenhuma solicitação encontrada',
            },
          }}
          option={{
            search: false,
            showTitle: false,
            pageSize: limit,
          }}
        />
        )}
      </Container>
    </>
  );
}

export default Prospection;
