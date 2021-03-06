import {Colors} from './../../style';
import _ from 'lodash';
import {ContextType} from './FieldContext';
import {ColorType} from './types';

export function getColorByState(color: ColorType, context?: ContextType) {
  let finalColor: string | undefined = Colors.grey10;
  if (_.isString(color)) {
    finalColor = color;
  } else if (_.isPlainObject(color)) {
    if (context?.disabled) {
      finalColor = color?.disabled;
    } else if (!context?.isValid) {
      finalColor = color?.error;
    } else if (context?.isFocused) {
      finalColor = color?.focus;
    } else {
      finalColor = color?.default;
    }
  }

  return finalColor;
}
