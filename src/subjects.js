import {BehaviorSubject, ReplaySubject, Subject} from "rxjs";


document.addEventListener('click', () => {
    // const stream$ = new Subject()
    // const stream$ = new BehaviorSubject('First')
    const stream$ = new ReplaySubject(2)//выводит все значения которые были задиспатчены даже до подписки

    stream$.next('Hi')
    stream$.next('Rx')
    stream$.next('JS')
    stream$.subscribe(value => console.log(value))
    // stream$.subscribe(value => console.log(value))
})
