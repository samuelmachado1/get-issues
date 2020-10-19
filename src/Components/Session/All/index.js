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

import '../../../shared/tabs-style.css';

import {Table} from './styles'
import {
  FormatedTitle,
  FormatedLabel,
} from '../style'

import { getIssues, getAllIssues } from '../../../services/api_git';
import { toast } from 'react-toastify';

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
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = React.useState(true);

  async function init() {
    setLoading(true);
    try {
      await getAllIssues()
        .then((res) => {
          setTotal(res.length)
            
        });
    } catch (error) {
      toast.warn('Aconteceu um erro ao recuperar as issues');
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    init();
  }, []);


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
    onChangePage(event, Math.max(0, Math.ceil(total / rowsPerPage) - 1));

  };
  
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
        disabled={page >= Math.ceil(total / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(total / rowsPerPage) - 1}
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
};


const rows = [
  
 
];

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function CustomPaginationActionsTable() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const history = useHistory();
  const [issues, setIssues] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, total - page * rowsPerPage);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    init(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  async function init(page) {
    setLoading(true);
    try {
      await getIssues(page)
        .then((res) => {
            setIssues(res);
            setTotal(res.length)
        });
    } catch (error) {
      toast.warn('Aconteceu um erro ao recuperar as issues');
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    init();
  }, []);

  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableBody>
        <Table>
          <thead>
            <tr>
              <th><FormatedLabel>Número</FormatedLabel></th>
              <th><FormatedLabel>Criada em:</FormatedLabel></th>
              <th><FormatedLabel>Estado</FormatedLabel></th>
              <th><FormatedLabel>Labels</FormatedLabel></th>
              <th><FormatedLabel>Quantidade de Comentários</FormatedLabel></th>
            </tr>
          </thead>
            <tbody>
              {
                issues.map((issue) => (
                  <tr>
                    {issue.number % 2 != 0 ?
                      <>
                          <TableCell component="th" scope="row" style={{ width: 160 }} align="center">
                            <FormatedTitle>{issue.number}</FormatedTitle> 
                          </TableCell> 
                          <TableCell component="th" scope="row" style={{ width: 160 }} align="center">
                            <FormatedTitle>{issue.created_at.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1')}</FormatedTitle>
                          </TableCell>
                          <TableCell component="th" scope="row" style={{ width: 160 }} align="center">
                            <FormatedTitle>{issue.state.toUpperCase()}</FormatedTitle>
                          </TableCell>
                          <TableCell component="th" scope="row" style={{ width: 160 }} align="center">
                            <FormatedTitle>{issue.labels.length == 0 ? "N/A" : issue.labels[0].name}</FormatedTitle>
                          </TableCell>
                          <TableCell component="th" scope="row" style={{ width: 160 }} align="center">
                            <FormatedTitle>{issue.comments}</FormatedTitle>
                          </TableCell>
                      </>
                      :
                      <>
                        <TableCell component="th" scope="row" style={{ width: 160}} align="center" color="secondary">
                          <FormatedLabel>{issue.number}</FormatedLabel>
                        </TableCell>
                    
                        <TableCell component="th" scope="row" style={{ width: 160 }} align="center">
                          <FormatedLabel>{issue.created_at.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1')}</FormatedLabel>
                        </TableCell>

                        <TableCell component="th" scope="row" style={{ width: 160 }} align="center">
                          <FormatedLabel>{issue.state.toUpperCase()}</FormatedLabel>
                        </TableCell>

                        <TableCell component="th" scope="row" style={{ width: 160 }} align="center">
                          <FormatedLabel>{issue.labels.length == 0 ? "N/A" : issue.labels[0].name}</FormatedLabel>
                        </TableCell>
                        <TableCell component="th" scope="row" style={{ width: 160 }} align="center">
                            <FormatedLabel>{issue.comments}</FormatedLabel>
                        </TableCell>

                      </>

                    }
                  </tr>
                ))
              }
            </tbody>
        </Table>

          {/* {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )} */}
          
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10]}
              colSpan={3}
              count={total}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows' },
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