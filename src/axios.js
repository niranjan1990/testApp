import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://34.209.108.106/family_tree/public/education_journal_entries'
});


export default instance;