import axios from "axios";

export const getPacientesPaginate = (page, size, order, orderBy, filter) => {
    return axios.get(`http://localhost:5000/api/pacientes`, {
        params: {
            page,
            size,
            order,
            orderBy,
            filter
        }
    });
}

export const createPaciente = (paciente) => {
    return axios.post(`http://localhost:5000/api/pacientes`, paciente);
}

export const updatePaciente = (id, paciente) => {
    return axios.put(`http://localhost:5000/api/pacientes/${id}`, paciente);
}

export const deletePaciente = (id) => {
    return axios.delete(`http://localhost:5000/api/pacientes/${id}`);
}

export const getPaciente = (id) => {
    return axios.get(`http://localhost:5000/api/pacientes/${id}`);
}