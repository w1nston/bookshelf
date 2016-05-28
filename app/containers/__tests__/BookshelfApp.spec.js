import React from 'react';
import expect from 'expect';
import { shallowWithStore } from '../../../utils/redux-spec-utils';
import BookshelfApp from '../BookshelfApp';
import Bookshelf from '../../components/Bookshelf';

describe('BookshelfApp', () => {
  it('connects the state to a Bookshelf component', () => {
    const component = shallowWithStore(<BookshelfApp />);
    expect(component.type()).toBe(Bookshelf);
  });
});
