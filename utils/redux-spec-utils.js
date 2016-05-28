import { shallow } from 'enzyme';

export function shallowWithStore(Component, state = {}, dispatch = () => ({})) {
  const context = {
    store: {
      getState: () => state,
      dispatch,
      subscribe: () => {}
    },
  };
  return shallow(Component, { context });
}
