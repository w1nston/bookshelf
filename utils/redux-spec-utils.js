/* eslint import/no-extraneous-dependencies: 0 */
import { shallow } from 'enzyme';

export default function shallowWithStore(Component, state = {}, dispatch = () => ({})) {
  const context = {
    store: {
      getState: () => state,
      dispatch,
      subscribe: () => {},
    },
  };
  return shallow(Component, { context });
}
