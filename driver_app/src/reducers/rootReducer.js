import AdviceOne from '../logged_page/Advice_one';
import AdviceTwo from '../logged_page/Advice_two';
import AdviceThree from '../logged_page/Advice_three';
import AdviceFour from '../logged_page/Advice_four';
import AdviceFive from '../logged_page/Advice_five';

const initState = {
    accounts: [
        {id: '1', name: 'Marcin', surname: 'Kusnierz', email: 'marcin@gmail.com', password: 'react1', image: "url('../../src/images/prace.jpg')"},
        // {id: '2', name: 'Mikele', surname: 'Bambino', email: 'mikele@gmail.com', password: 'react2'}
    ],

    advices: [
        {id:'1' , component: AdviceOne , path: '/logged-advice1'},
        {id:'2' ,component: AdviceTwo , path: '/logged-advice2'},
        {id:'3' ,component: AdviceThree , path: '/logged-advice3'},
        {id:'4' ,component:AdviceFour , path: '/logged-advice4'},
        {id:'5' ,component:AdviceFive, path: '/logged-weekly-advice'},

    ],

    faqs: [
        {id: '1', question: 'Jaka jutro pogoda?', answer: 'Znów upały'},
        {id: '2', question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure rem omnis.', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum ex exercitationem quod sequi consectetur veniam, repellendus velit, itaque, fugit saepe sit minus. Molestias.'},
        {id: '3', question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure rem omnis.', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum ex exercitationem quod sequi consectetur veniam, repellendus velit, itaque, fugit saepe sit minus. Molestias.'},
        {id: '4', question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure rem omnis.', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum ex exercitationem quod sequi consectetur veniam, repellendus velit, itaque, fugit saepe sit minus. Molestias.'},
        {id: '5', question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure rem omnis.', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum ex exercitationem quod sequi consectetur veniam, repellendus velit, itaque, fugit saepe sit minus. Molestias.'},
        {id: '6', question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure rem omnis.', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum ex exercitationem quod sequi consectetur veniam, repellendus velit, itaque, fugit saepe sit minus. Molestias.'},


    ]



}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer