const initState = {
    accounts: [
        {id: '1', name: 'Marcin', surname: 'Kusnierz', email: 'marcin@gmail.com', password: 'react1'},
        // {id: '2', name: 'Mikele', surname: 'Bambino', email: 'mikele@gmail.com', password: 'react2'}
    ]

}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer