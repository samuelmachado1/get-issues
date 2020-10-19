// import React, { useState, useEffect, useContext } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { Person, Launch } from '@material-ui/icons';
// import MaterialTable from 'material-table';
// import { EnumType } from 'json-to-graphql-query';
// import { createFilterOptions } from '@material-ui/lab/Autocomplete';

// import tableIcons from '../../../utils/tableIcons';

// import '../../../shared/tabs-style.css';

// import {
//   Input,
//   AutoComplete,
// } from './style';

// import {
//   handleModal,
//   handleLoading,
//   setFormData
// } from '../../../store/actions/professional';

// // import Loading from '../../../components/Loading';
// import Modal from '../../../components/Modal';

// // import {
// //   dateFormatterBR,
// //   // dateFormatterUSA
// // } from '../../../utils/dateFormatter';

// // import tableIcons from '../../../utils/tableIcons';

// // import {
// //   getProfessionalWithEmail,
// //   // getProfessionalRH,
// // } from '../../../services/api_professionals';

// // import currencyFormatter from '../../../utils/currencyFormatter';

// // import {
// //   updateInterview,
// //   getAllInterviews,
// //   getAllInterviewsManager,
// //   // getManagerInterviews,
// // } from '../../../services/api_interview';

// // import {
// //   getManagers
// // } from '../../../services/api_professionals';

// // import DetailRequest from '../DetailRequest';
// // import Details from './Details';
// import { getIssues } from '../../../services/api_git';

// import ResquestContext from '../context';
// // import { Container } from './styles';

// function Realocation() {
//   const dispatch = useDispatch();
//   const userData = JSON.parse(localStorage.getItem('user'));
//   const managerRequestId = 1;
//   // console.log("MANAG >>>>>>>>>>", managerRequestId);
//   const history = useHistory();
//   const [error, setError] = useState(false);
//   // const modal = useSelector((state) => state.professional.modal);

//   const [issues, setIssues] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [selectedRequest, setSelectedRequest] = useState({});
//   const [limit] = useState(10);
//   const [showDetailRequest, setShowDetailRequest] = useState(false);
//   const { setInterview, interview } = useContext(ResquestContext);
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   const [requests, setRequests] = useState([]);
//   const [page, setPage] = useState(0);
//   const [total, setTotal] = useState(0);


//   const filterOptions = createFilterOptions({
//     limit: 10,
//   });

//   const handleChange = async (data, request) => {
    
//     // await updateInterview(
//     //   {
//     //     id: request.id,
//     //     attendedBy: data.manager,
//     //   },
//     // ).then(async (res) => {
//     //   dispatch(handleLoading(true))
//     //   // console.log("REEEE --->", res.error);
//     //   if (res.data.UpdateInterview == null && res.errors[0].message == "user does not have the necessary permission." ){
//     //     //DEscobrir pq não está funcionando a mensagem de erro com o handleModal
//     //     alert("Usuário não autorizado a ser recrutador")
//     //     // dispatch(handleModal(true, 'O preenchimento do campo CLIENTE é obrigatório.', 'Erro'));
//     //     // document.location.reload(true);
//     //     // await getRequests();
//     //   }else if(res.data.UpdateInterview == null && res.errors[0].message == "Couldn't find manager id." ){
//     //     alert("Esse usuário não possui ID de Manager")
//     //   }else if (res.data.UpdateInterview.message === 'success'){
//     //     document.location.reload(true);
//     //     await getRequests();
//     //   }
//     // }).catch(() => {
//     //   dispatch(handleModal(true, 'Houve um erro ao atualizar o profissional', 'Erro'));
//     // });
//   };
    
//   const getRequestsPagination = async (query) => {
//     // console.log('QQ-->', query);
//     let res = await getIssues(query.page + 1)
//     console.log("RES-->", res)
//     const formatedRequests = res.map((request) => (
//       {
//         ...request,
//         number: request.number,
//         created_at: request.created_at,
//         states: request.state,
//         labels: request.labels.length,
        
//       }      
//     ));
    
//     return {                         
//       data: formatedRequests,
//       page: (query.page + 1),
//       totalCount: formatedRequests && formatedRequests.length>0 ? res.length : 0
      
//     }
//   };
//   // console.log("LLGGO", formatedRequests.number);
//   // console.log("TOT", total)

//   const basicColumns = [
//     { title: 'Número', field: 'number', searchable: true },
//     { title: 'Criada em', field: 'created_at' },
//     { title: 'Estado', field: 'states', searchable: true },
//     { title: 'Labels', field: 'labels', searchable: true },
    
//   ];

//   const columns = basicColumns;

//   const basicActions = [
//     {
//       icon: Person,
//       tooltip: 'Detalhes do Profissional',
//       // onClick: (e, request) => openDetailProfessional(request),
//     },
//   ];

//   const rhActions = [
//     {
//       icon: Launch,
//       tooltip: 'Mostrar Detalhes',
//       // onClick: (e, request) => openDetailRequest(request),
//     },
//   ];
  
//   const fetchIssues = async () => {
//     await getIssues()
//     .then((res) => {
//       setIssues(res);
//       console.log("ISSUES", res);
//     });
//   };

//   useEffect(() => {
//     fetchIssues();
    
//   }, []);

//   const actions = basicActions.concat(rhActions);


//   const handleCloseModal = () => {
//     setShowDetailRequest(false);
//     setInterview(null);
//   };

//   return (
//     <>
//         <MaterialTable
//           icons={tableIcons}
//           title="allIssues"
//           columns={columns}
//           isLoading={isLoading}
//           data={getRequestsPagination}
//           totalCount={total}
//           page={page}

//           components={{
//             Toolbar: () => (<div />),
//           }}
//           localization={{
//             header: {
//               actions: '',
//             },
//             body: {
//               emptyDataSourceMessage: 'Nenhuma issues encontrada',
//             },
//             toolbar: {
//               searchPlaceholder: 'Ex: Entrevista Solicitada',
//               searchTooltip: 'Buscar',
//             },
//           }}
//           option={{
//             search: false,
//             showTitle: false,
//             pageSize: limit,
//           }}
//         />
//     </>
//   );
// }

// export default Realocation;
