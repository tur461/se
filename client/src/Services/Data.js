const url = 'Api/all_diseases';
export let DataArray = [];
export const getData = async _ => {
    return fetch(url)
    .then(dat => dat.json())
    .catch(err => console.log('Error fetching data.'));
};