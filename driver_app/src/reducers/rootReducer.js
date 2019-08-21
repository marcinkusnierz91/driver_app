const initState = {
    accounts: [
        {id: '1', name: 'Marcin', surname: 'Kusnierz', email: 'marcin@gmail.com', password: 'dupa'},
        // {id: '2', name: 'Mikele', surname: 'Bambino', email: 'mikele@gmail.com', password: 'kupa'}
    ]

}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer