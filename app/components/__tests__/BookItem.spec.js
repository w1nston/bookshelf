import React, { PropTypes } from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import BookItem from '../BookItem';

describe('BookItem', () => {
  it('sets displayName', () => {
    expect(BookItem.displayName).toBe('BookItem');
  });

  it('renders a container for its content', () => {
    const component = shallow(<BookItem />);
    expect(component.type()).toBe('tr');
  });

  it('sets class name on table row', () => {
    const component = shallow(<BookItem />);
    expect(component.props().className).toContain('book-item-row');
  });

  describe('title', () => {
    it('is declared in propTypes', () => {
      expect(BookItem.propTypes.title).toBe(PropTypes.string);
    });

    describe('when defined', () => {
      const title = 'Title';

      it('is rendered', () => {
        const component = shallow(<BookItem title={title} />);
        expect(component.find('.title').text()).toBe(title);
      });

      it('is rendered inside a table cell', () => {
        const component = shallow(<BookItem title={title} />);
        expect(component.find('.title').type()).toBe('td');
      });
    });
  });

  describe('author', () => {
    it('is declared in propTypes', () => {
      expect(BookItem.propTypes.author).toBe(PropTypes.string);
    });

    describe('when defined', () => {
      const author = 'Author';

      it('is rendered', () => {
        const component = shallow(<BookItem author={author} />);
        expect(component.find('.author').text()).toBe(author);
      });

      it('is rendered inside a table cell', () => {
        const component = shallow(<BookItem author={author} />);
        expect(component.find('.author').type()).toBe('td');
      });
    });
  });
});
