import React, { PropTypes } from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';
import Bookshelf from '../Bookshelf';
import TextInput from '../TextInput';
import SimpleButton from '../SimpleButton';

describe('Bookshelf', () => {
  it('sets a displayName', () => {
    expect(Bookshelf.displayName).toBe('Bookshelf');
  });

  it('specifies title as a propType', () => {
    expect(Bookshelf.propTypes.title).toEqual(PropTypes.string);
  });

  it('specifies author as a propType', () => {
    expect(Bookshelf.propTypes.author).toEqual(PropTypes.string);
  });

  it('specifies addBook as a propType', () => {
    expect(Bookshelf.propTypes.addBook).toEqual(PropTypes.func);
  });

  it('specifies clearBookForm as a propType', () => {
    expect(Bookshelf.propTypes.clearBookForm).toEqual(PropTypes.func);
  });

  it('renders a container element', () => {
    const component = shallow(<Bookshelf />);
    expect(component.find('.bookshelf-container').length).toBe(1);
  });

  it('renders two TextInput components', () => {
    const component = shallow(<Bookshelf />);
    expect(component.find(TextInput).length).toBe(2);
  });

  describe('first TextInput component', () => {
    it('sets name to title', () => {
      const component = shallow(<Bookshelf />);
      const textInput = component.find(TextInput);
      expect(textInput.at(0).props().name).toBe('title');
    });

    it('sets placeholder to "Title"', () => {
      const component = shallow(<Bookshelf />);
      const textInput = component.find(TextInput);
      expect(textInput.at(0).props().placeholder).toBe('Title');
    });

    describe('when title is defined through prop', () => {
      const title = 'Title';

      it('gets that title', () => {
        const component = shallow(<Bookshelf title={title} />);
        const textInput = component.find(TextInput);
        expect(textInput.at(0).props().value).toBe(title);
      });
    });
  });

  describe('second TextInput component', () => {
    it('sets name to author', () => {
      const component = shallow(<Bookshelf />);
      const textInput = component.find(TextInput);
      expect(textInput.at(1).props().name).toBe('author');
    });

    it('sets placeholder to "Author"', () => {
      const component = shallow(<Bookshelf />);
      const textInput = component.find(TextInput);
      expect(textInput.at(1).props().placeholder).toBe('Author');
    });

    describe('when authour is defined through prop', () => {
      const author = 'Author';

      it('gets that author', () => {
        const component = shallow(<Bookshelf author={author}/>);
        const textInput = component.find(TextInput);
        expect(textInput.at(1).props().value).toBe(author);
      });
    });
  });

  describe('SimpleButton component', () => {
    it('is rendered', () => {
      const component = shallow(<Bookshelf />);
      expect(component.find(SimpleButton).length).toBe(1);
    });

    it('gets a label', () => {
      const component = shallow(<Bookshelf />);
      expect(component.find(SimpleButton).props().label).toBe('Add new book');
    });

    describe('when addBook is defined', () => {
      const addBook = createSpy();

      it('is added to SimpleButton on click handler', () => {
        const component = shallow(<Bookshelf addBook={addBook} />);
        expect(component.find(SimpleButton).props().onClick).toNotBe(undefined);
      });

      describe('on click', () => {
        it('triggers addBook', () => {
          const component = shallow(<Bookshelf addBook={addBook} />);
          component.find(SimpleButton).simulate('click');
          expect(addBook).toHaveBeenCalled();
        });
      });
    });

    describe('on click', () => {
      it('calls the clearBookForm prop', () => {
        const clearBookForm = createSpy();
        const component = shallow(<Bookshelf clearBookForm={clearBookForm} />);
        component.find(SimpleButton).simulate('click');
        expect(clearBookForm).toHaveBeenCalled();
      });

      xdescribe('when title TextInput is not empty', () => {
        const title = 'Title';

        it('clears the title TextInput component', () => {
          const component = mount(<Bookshelf title={title} />);
          component.find(SimpleButton).simulate('click');
          const textInput = component.find(TextInput);
          expect(textInput.at(0).props().value).toBe('');
        });
      });

      xdescribe('when author TextInput is not empty', () => {
        const author = 'Author';

        it('clears the author TextInput component', () => {
          const component = shallow(<Bookshelf author={author} />);
          component.find(SimpleButton).simulate('click');
          const textInput = component.find(TextInput);
          expect(textInput.at(1).props().value).toBe('');
        });
      });
    });
  });
});
