import { render, screen } from '@testing-library/react';
import TagInput from '../TagInput';
import { InputTag } from '../../../core/hooks/types/useTagInput';
import userEvent from '@testing-library/user-event';

// describe.skip('Given: renderTagInput', () => {
//   const renderComponent = (tags: InputTag[]) => {
//     render(
//       <TagInput
//         addTags={jest.fn()}
//         removeTags={jest.fn()}
//         tags={tags}
//         placeholder="test"
//       />
//     );
//     const input = screen.getByPlaceholderText('test');
//     return {
//       input
//     };
//   };

//   test('When: renderTagInput is called', () => {
//     const { input } = renderComponent([]);
//     expect(input).toBeInTheDocument();
//   });

//   describe('When: input is "아이스크림" and Enter key is pressed', () => {
//     renderComponent(['아이스크림']);
//     const name = '아이스크림';
//     test('Then: render "아이스크림" label', async () => {
//       expect(screen.findByText(name)).toBeInTheDocument();
//     });
//   });

//   test('When: input is empty and Enter key is pressed', () => {
//     const { input } = renderComponent([]);
//     userEvent.type(input, 'test{enter}');
//     userEvent.click(screen.getByTitle('tag'));
//     expect(screen.queryByTitle('tag')).not.toBeInTheDocument();
//   });
// });
