import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Table, Message } from './styles';

// import eye from '../../../assets/images/eye.svg';

// import currencyFormatter from '../../../services/currencyFormatter';
import { getIssues } from '../../services/api_git';
import LoadingBasic from '../../components/LoadingBasic';

const TableModel = () => {
  const history = useHistory();
  const userData = JSON.parse(sessionStorage.getItem('user'));
  const [issues, setIssues] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  async function init() {
    setLoading(true);
    try {
      await getIssues()
        .then((res) => {
            setIssues(res);
        });
    } catch (error) {
      toast.warn('Aconteceu um erro ao recuperar as cotas');
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      {/* <LoadingBasic status={loading} /> */}
      
            <Table>
              <thead>
                <tr>
                  <th>Número</th>
                  <th>Criada em</th>
                  <th>Estado</th>
                  <th>Labels</th>
                  <th></th>
                  
                </tr>
              </thead>
              <tbody>
                {
                  issues.map((issue) => (
                    console.log("issue --->", issue.labels.length),
                    <tr key={issue.id}>
                      <td>{issue.number }</td>
                      <td>{issue.created_at.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1')}</td>
                      <td>{issue.state}</td>
                      <td>{"ssue.user.name"}</td>
                      <td></td>
                      
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          

    </>
  );
};

export default TableModel;
