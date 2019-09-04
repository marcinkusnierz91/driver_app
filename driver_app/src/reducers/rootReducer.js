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
    ],

    quiz: [
        {
            question: 'Ile jest znaków zakazu ?', 
            answers: ['108', '46', '54', '12', ],
            correct: '46',
            questionId: '1'
        },
        {
            question: 'Co oznacza znak na którym widnieje opona ?', 
            answers: ['Sprzedaż opon', 'Hotel', 'Wulkanizacja', 'Motel', ],
            correct: 'Wulkanizacja',
            questionId: '2'
        },
        {
            question: 'Co oznacza mała tabliczka z napisem np. "49" ?', 
            answers: ['Nr domu', 'Miejscowość', 'Ograniczenie prędkości', 'Numer drogi', ],
            correct: 'Numer drogi',
            questionId: '3'
        },
        {
            question: 'Co oznacza znak na którym napisane jest "CŁO ZOOL" ?', 
            answers: ['Kontrola celna', 'Strefa postoju', 'Zakaz ruchu', 'Kontrola skarbowa', ],
            correct: 'Kontrola celna',
            questionId: '4'
        },
        {
            question: 'Co oznacza biały okrągły znak z czerwoną obwódką ?', 
            answers: ['Pierwszeństwo przejazdu', 'Brak ograniczenia prędkości', 'Zakaz ruchu w obu kierunkach', 'Zakaz wjazdu', ],
            correct: 'Zakaz ruchu w obu kierunkach',
            questionId: '5'
        },
        {
            question: 'Co oznacza biały okrągły znak z czerwoną obwódką ?', 
            answers: ['Pierwszeństwo przejazdu', 'Brak ograniczenia prędkości', 'Zakaz ruchu w obu kierunkach', 'Zakaz wjazdu', ],
            correct: 'Zakaz ruchu w obu kierunkach',
            questionId: '6'
        },
        {
            question: 'Co oznacza biały okrągły znak z czerwoną obwódką ?', 
            answers: ['Pierwszeństwo przejazdu', 'Brak ograniczenia prędkości', 'Zakaz ruchu w obu kierunkach', 'Zakaz wjazdu', ],
            correct: 'Zakaz ruchu w obu kierunkach',
            questionId: '7'
        },
        {
            question: 'Co oznacza biały okrągły znak z czerwoną obwódką ?', 
            answers: ['Pierwszeństwo przejazdu', 'Brak ograniczenia prędkości', 'Zakaz ruchu w obu kierunkach', 'Zakaz wjazdu', ],
            correct: 'Zakaz ruchu w obu kierunkach',
            questionId: '8'
        },
        {
            question: 'Co oznacza biały okrągły znak z czerwoną obwódką ?', 
            answers: ['Pierwszeństwo przejazdu', 'Brak ograniczenia prędkości', 'Zakaz ruchu w obu kierunkach', 'Zakaz wjazdu', ],
            correct: 'Zakaz ruchu w obu kierunkach',
            questionId: '9'
        },
        {
            question: 'Co oznacza biały okrągły znak z czerwoną obwódką ?', 
            answers: ['Pierwszeństwo przejazdu', 'Brak ograniczenia prędkości', 'Zakaz ruchu w obu kierunkach', 'Zakaz wjazdu', ],
            correct: 'Zakaz ruchu w obu kierunkach',
            questionId: '10'
        },
        {
            question: 'Co oznacza biały okrągły znak z czerwoną obwódką ?', 
            answers: ['Pierwszeństwo przejazdu', 'Brak ograniczenia prędkości', 'Zakaz ruchu w obu kierunkach', 'Zakaz wjazdu', ],
            correct: 'Zakaz ruchu w obu kierunkach',
            questionId: '11'
        },
        {
            question: 'Co oznacza biały okrągły znak z czerwoną obwódką ?', 
            answers: ['Pierwszeństwo przejazdu', 'Brak ograniczenia prędkości', 'Zakaz ruchu w obu kierunkach', 'Zakaz wjazdu', ],
            correct: 'Zakaz ruchu w obu kierunkach',
            questionId: '12'
        },
        {
            question: 'Co oznacza biały okrągły znak z czerwoną obwódką ?', 
            answers: ['Pierwszeństwo przejazdu', 'Brak ograniczenia prędkości', 'Zakaz ruchu w obu kierunkach', 'Zakaz wjazdu', ],
            correct: 'Zakaz ruchu w obu kierunkach',
            questionId: '13'
        },
        {
            question: 'Co oznacza biały okrągły znak z czerwoną obwódką ?', 
            answers: ['Pierwszeństwo przejazdu', 'Brak ograniczenia prędkości', 'Zakaz ruchu w obu kierunkach', 'Zakaz wjazdu', ],
            correct: 'Zakaz ruchu w obu kierunkach',
            questionId: '14'
        },
        {
            question: 'Co oznacza biały okrągły znak z czerwoną obwódką ?', 
            answers: ['Pierwszeństwo przejazdu', 'Brak ograniczenia prędkości', 'Zakaz ruchu w obu kierunkach', 'Zakaz wjazdu', ],
            correct: 'Zakaz ruchu w obu kierunkach',
            questionId: '15'
        },
    ],



}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer