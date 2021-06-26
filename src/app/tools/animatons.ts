import { trigger, animate, transition, style, query, animateChild, group } from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* <=> *', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ], { optional: true }),
            query(':enter', [
                style({ opacity: 0.5, transform: 'scale(0.95)' })
            ], { optional: true }),
            query(':leave', animateChild(), { optional: true }),
            group([
                query(':leave', [
                    animate('100ms ease-out', style({ opacity: 0, transform: 'scale(1.1)' }))
                ], { optional: true }),
                query(':enter', [
                    animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
                ], { optional: true })
            ]),
            query(':enter', animateChild(), { optional: true }),
        ]),
    ]);
    