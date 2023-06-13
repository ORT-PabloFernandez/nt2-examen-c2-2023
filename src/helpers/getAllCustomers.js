export const getAllCustomers = async() => {
    const url = 'https://tp2-analytics.azurewebsites.net/api/customers';
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
}
