import React from 'react';

// import currencyFormatter from '../../../../utils/currencyFormatter';

import { Container } from './styles';




function Details({request}) {
  // console.log("REQ>>>>>>>>>", request)
 
  return (
    <Container>
      <div>
        <p>Cargo</p>
        { request.professional.role.name }
      </div>
      <div>
        <p>Salário</p>
        {/* { currencyFormatter(request.professional.salary) } */}
      </div>
      <div>
        <p>Beneficios</p>
        {/* { currencyFormatter(request.professional.benefits) } */}
      </div>
      <div>
        <p>Salário/hora</p>
        {/* { currencyFormatter(request.professional.hourlySalary) } */}
      </div>
      <div>
        <p>Custo/hora</p>
        {/* { currencyFormatter(request.professional.hourlyCost) } */}
      </div>
      <div>
        <p>Salario Oferecido</p>
        {/* { currencyFormatter(request.salary) } */}
      </div>
      <div>
        <p>Data de Interesse</p>
        { request.createdAt }
      </div>
      <div>
        <p>Data da entrevista</p>
        { request.interviewDate }
      </div>
      <div>
        <p>Localidade</p>
        { request.professional.states[0].name }
      </div>
      <div>
        <p>Status</p>
        { request.status }
      </div>
      
      <div>
        <p>Email Gestor</p>
        { request.professional && request.professional.manager }
      </div>
      <div>
        <p>Requisitado por</p>
        {!request.manager ? (
          <>
          {("N/A")}
          </> 
        ) :
        <>
          { request.manager && request.manager.email}
        </>
      }
      </div>
      
      {/* {canShowForRHPermission
      && ( */}
        <>
         
        </>
      {/* // )} */}
      
      {/* <div>
        <p>Data da entrevista</p>
        { request.interviewDate }
      </div> */}
    </Container>
  );
}

export default Details;
