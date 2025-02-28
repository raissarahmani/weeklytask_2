const arrNameDom = () => {
    const links = "https://jsonplaceholder.typicode.com/users"
    fetch(links)
    .then((response) => {
        if (!response.ok) throw new Error(response.statusText)
        return response.json()
    })
    .then((dataFetch) => {
        const nameAndDomicile = dataFetch.map((user) => {
            const {name, address} = user;
            const {city} = address;
            return {name, city};
        });
        const sortedCity = nameAndDomicile.sort((a, b) => {
            if (a.city > b.city) return 1;
            if (a.city < b.city) return -1;
            return 0;
        });
        return Promise.all(sortedCity);
    })
    .then((sortedCity) => {
        console.log(sortedCity);
    })    
    .catch((err) => {
        if (err instanceof Error) console.log(err.message)
    })
}

arrNameDom()
