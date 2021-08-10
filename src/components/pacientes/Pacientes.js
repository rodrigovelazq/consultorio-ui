import React from 'react';
import DataTable from "../library/data-table/DataTable";
import axios from "axios";

const getPacientesPaginate = (page, size, order, orderBy, filter) => {
    return axios.get('http://localhost:5000/api/pacientes', {
        params: {
            page,
            size,
            order,
            orderBy,
            filter
        }
    });
}

const dateFormat = (date) => {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}

export default function Pacientes() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [count, setCount] = React.useState(0);
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [filter, setFilter] = React.useState('');
    const [rows, setRows] = React.useState([]);

    const rowSettings = [
        {key: 'nombre', label: 'Nombre'},
        {key: 'apellido', label: 'Apellido'},
        {key: 'telefono', label: 'Telefono'},
        {key: 'cedula', label: 'Cedula'},
        {key: 'fecha_nacimiento', label: 'Fecha de Nacimiento', rowDisplay: (row) => dateFormat(new Date(row.fecha_nacimiento))},
        {
            key: 'actions',
            label: 'Acciones',
            onDelete: (item) => console.log(`Item ${item.nombre} eliminado`),
            onEdit: (item) => console.log(`Item ${item.nombre} editado`)
        },
    ];

    React.useEffect(() => {
        getPacientesPaginate(page, rowsPerPage, order, orderBy, filter).then(function (response) {
            setRows(response.data.rows);
            setCount(response.data.count);
        })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, []);


    const handlePageChange = (newPage) => {
        setPage(newPage);
        getPacientesPaginate(newPage, rowsPerPage, order, orderBy, filter).then(function (response) {
            setRows(response.data.rows);
            setCount(response.data.count);
        })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    const handleOrderChange = (newOrder, newOrderBy) => {
        setOrder(newOrder);
        setOrderBy(newOrderBy);
        getPacientesPaginate(page, rowsPerPage, newOrder, newOrderBy, filter).then(function (response) {
            setRows(response.data.rows);
            setCount(response.data.count);
        })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    return (
        <React.Fragment>
            <DataTable
                rows={rows}
                rowSettings={rowSettings}
                page={page}
                onPageChange={handlePageChange}
                rowsPerPage={rowsPerPage}
                setRowsPerPage={setRowsPerPage}
                order={order}
                orderBy={orderBy}
                onOrderChange={handleOrderChange}
                filter={filter}
                setFilter={setFilter}
                count={count}
            />
        </React.Fragment>
    );
}
