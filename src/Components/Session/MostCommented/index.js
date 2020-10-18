import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import {Table} from './styles'

import { getAllIssues, getOpenIssues } from '../../../services/api_git';
import { toast } from 'react-toastify';
import { blue } from '@material-ui/core/colors';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const [requests, setRequests] = useState([]);
  

  // console.log("POR", props);

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  console.log("page", page)
  // console.log("AIWO", res)
  // console.log("AIWO", res)
  const getRequestsIssues = async (query) => {
      
    let res = await getAllIssues(page)
    // console.log("AIWO", res.length)
    // count = res.length;
    
  
    return { 
     
      // data: formatedRequests,
      
    }
    
  };
  
 useEffect(() => {
    // init();
    getRequestsIssues();
  }, []);
 
  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  // data: PropTypes.formatedRequests,
};




// function createData(name, calories, fat) {
//   return { name, calories, fat };
// }

const basicColumns = [
  { title: 'Número', field: 'number', searchable: true },
  { title: 'Criada em', field: 'created_at' },
  { title: 'Estado', field: 'states', searchable: true },
  { title: 'Labels', field: 'labels', searchable: true },
  
];

// const columns = basicColumns;

const rows = [
  
 
];

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function CustomPaginationActionsTable() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const history = useHistory();
  const userData = JSON.parse(sessionStorage.getItem('user'));
  const [issues, setIssues] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  console.log("ROWS ->", rowsPerPage);
  // console.log("ISS.LEN ->", basicColumns);
  console.log("PAG", page);
  

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  async function init() {
    setLoading(true);
    try {
      await getOpenIssues()
        .then((res) => {
            setIssues(res);
        });
    } catch (error) {
      toast.warn('Aconteceu um erro ao recuperar as issues');
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    init();
    // getRequestsIssues();
  }, []);

  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableBody>
        <Table>
          <thead>
            <tr>
              <th>Número</th>
              <th>Aberta em:</th>
              <th>Estado</th>
              <th>Labels</th>
              <th>Quantidade de Comentários</th>
              <th></th>
            </tr>
          </thead>
            <tbody>
              {
                issues.map((issue) => (
                  console.log("issue --->", issue),
                  <tr>
                    {issue.number % 2 != 0 ?
                      <>
                          <TableCell component="th" scope="row" style={{ width: 160 }} align="center">
                            <h4>{issue.number}</h4> 
                          </TableCell> 
                          <TableCell component="th" scope="row" style={{ width: 160 }} align="center">
                            <h4>{issue.created_at.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1')}</h4>
                          </TableCell>
                          <TableCell component="th" scope="row" style={{ width: 160 }} align="center">
                            <h4>{issue.state.toUpperCase()}</h4>
                          </TableCell>
                          <TableCell component="th" scope="row" style={{ width: 160 }} align="center">
                            <h4>{issue.labels.length == 0 ? "N/A" : issue.labels[0].name.toUpperCase()}</h4>
                          </TableCell>
                          <TableCell component="th" scope="row" style={{ width: 160 }} align="center">
                            <h4>{issue.comments}</h4>
                          </TableCell>
                      </>
                      :
                      <>
                        <TableCell component="th" scope="row" style={{ width: 160}} align="center" color="secondary">
                          {issue.number}
                        </TableCell>
                    
                        <TableCell component="th" scope="row" style={{ width: 160 }} align="center">
                          {issue.created_at.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1')}
                        </TableCell>

                        <TableCell component="th" scope="row" style={{ width: 160 }} align="center">
                          {issue.state.toUpperCase()}
                        </TableCell>
                        
                        <TableCell component="th" scope="row" style={{ width: 160 }} align="center">
                        {issue.labels.length == 0 ? "N/A" : issue.labels[0].name.toUpperCase()}
                        </TableCell>
                        <TableCell component="th" scope="row" style={{ width: 160 }} align="center">
                           {issue.comments}
                          </TableCell>

                      </>

}
                                                              
                  </tr>
                ))
              }
            </tbody>
        </Table>

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}