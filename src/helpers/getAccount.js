export const getAccount = async (id) => {
    const url = `https://tp2-analytics.azurewebsites.net/api/accounts/${id}`;
    const resp = await fetch(url);
    const data = await resp.json();

    const account = {
        limit: data.limit,
        products: data.products
    };

    return account;
};
