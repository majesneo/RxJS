import {from, fromEvent, interval, Observable, of, range} from "rxjs";
import {map, scan} from "rxjs/operators";


// const stream$ = of(1, 2, 3, 4)
//
// stream$.subscribe(value => {
//     console.log('Value: ', value)
// })

// const arr$ = from([1, 2, 3, 4]).pipe(scan((acc, v) =>
//     acc.concat(v), []))
// arr$.subscribe(value => console.log(value))

// const stream$ = new Observable(observer => {
//     observer.next('First value')
//     setTimeout(() => observer.next('After 1000ms'), 1000)
//     setTimeout(() => observer.complete(), 2000)
//     setTimeout(() => observer.error('Something went wrong'), 2000)
//     setTimeout(() => observer.next('After 3000ms'), 3000)
// })


// stream$.subscribe(
//     (value) => console.log(value),
//     (error) => {
//         console.log(error)
//     },
//     () => console.log('Complete')
// )

// stream$.subscribe({
//     next(value) {
//         console.log(value)
//     },
//     error(err) {
//         console.log(err)
//     },
//     complete() {
//         console.log('Complete')
//     }
// })

//
// fromEvent(document.querySelector('canvas'), 'mousemove')
//     .pipe(
//         map(e => ({
//             x: e.offsetX,
//             y: e.offsetY,
//             ctx: e.target.getContext('2d')
//         }))
//     )
//     .subscribe(pos => {
//         console.log(pos)
//         pos.ctx.fillRect(pos.x, pos.y, 2, 2)
//     })
//
// const clear$ = fromEvent(document.getElementById('clear'), 'click')
//
// clear$.subscribe(() => {
//     const canvas = document.querySelector('canvas')
//     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
// })

interval(500).subscribe(value => {
    console.log(value)
})
