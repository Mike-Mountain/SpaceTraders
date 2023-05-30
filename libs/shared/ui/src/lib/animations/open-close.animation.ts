import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const openCloseAnimation = trigger('openClose', [
  state(
    'open',
    style({
      left: 0,
      opacity: 1,
    })
  ),
  state(
    'closed',
    style({
      left: '-50%',
      opacity: 0,
    })
  ),
  transition('* => *', [animate('.2s ease')]),
]);
