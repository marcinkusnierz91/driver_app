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
        {id: '2', question: 'Czy znaki pionowe sę ważniejsze od poziomych?', answer: 'Nie mam pojęcia'},
        {id: '3', question: 'Ile zezwyczej zajmuje wymiana koła w samochodzie?', answer: 'Zazwyczaj koło 20 - 30minut.'},
        {id: '4', question: 'Jakie są zalety hamowania silnikiem?', answer: 'Hamując silnikiem nie zużywamy paliwa, w przeciwieństwie do jazdy na luzie bez wrzuconego biegu.'},
        {id: '5', question: 'Jak zmieniły się przepisy dotyczące przeglądu samochodowego względem zeszłego roku?', answer: 'Najpoważniejszą zmianą wprowadzoną w ubiegłym roku jest to, że za przegląd płaci się z góry .'},
        {id: '6', question: 'Jak często muszę dolewać olej silnikowy ?', answer: 'Najlepiej sprawdzać samemu poziom oleju silnikowego co jakieś okres. Jeśli jest wyciek nalży dolać, po czym udać się do mechanika celem naprawy.'},
        // {id: '7', question: 'Jak często muszę dolewać olej silnikowy ?', answer: 'Najlepiej sprawdzać samemu poziom oleju silnikowego co jakieś okres. Jeśli jest wyciek nalży dolać, po czym udać się do mechanika celem naprawy.'},
    ]

    quiz: [
        {
            question: 'Lorem ipsum dolor sit amet?', 
            answers: ['Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.', ],
            correct: 3,
        },
        {
            question: 'Lorem ipsum dolor sit amet?', 
            answers: ['Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.', ],
            correct: 1,
        },
        {
            question: 'Lorem ipsum dolor sit amet?', 
            answers: ['Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.', ],
            correct: 4,
        },
        {
            question: 'Lorem ipsum dolor sit amet?', 
            answers: ['Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.', ],
            correct: 2,
        },
    ]



}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer