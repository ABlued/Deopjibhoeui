import { createHistoryMock } from '../../types/mocks/createHistory';
import { calculateMinimumTransaction } from '../calculateMinimumTransaction';

describe('calculateMinimumTransaction', () => {
  test('should return an empty array if mountPerPerson is 0', () => {
    const result = calculateMinimumTransaction({
      expense: [],
      members: ['Alice', 'Bob']
    });
    expect(result).toEqual([]);
  });

  test('should calculate the correct minimum transactions', () => {
    const result = calculateMinimumTransaction({
      expense: [
        createHistoryMock({
          buyer: 'Alice',
          cost: 40,
          purchaseHistory: '1차'
        }),
        createHistoryMock({ buyer: 'Bob', cost: 20, purchaseHistory: '2차' })
      ],
      members: ['Alice', 'Bob', 'Charlie']
    });
    expect(result).toEqual([
      { sender: 'Charlie', receiver: 'Alice', amount: 20 }
    ]);
  });

  test('should handle multiple transactions correctly', () => {
    const result = calculateMinimumTransaction({
      expense: [
        createHistoryMock({
          buyer: 'Alice',
          cost: 60,
          purchaseHistory: '1차'
        }),
        createHistoryMock({ buyer: 'Bob', cost: 20, purchaseHistory: '2차' }),
        createHistoryMock({
          buyer: 'Charlie',
          cost: 20,
          purchaseHistory: '3차'
        })
      ],
      members: ['Alice', 'Bob', 'Charlie']
    });
    expect(result).toEqual([
      { sender: 'Charlie', receiver: 'Alice', amount: 13 },
      { sender: 'Bob', receiver: 'Alice', amount: 13 }
    ]);
  });

  test('should handle no expenses correctly', () => {
    const result = calculateMinimumTransaction({
      expense: [],
      members: ['Alice', 'Bob', 'Charlie']
    });
    expect(result).toEqual([]);
  });

  test('should handle all members having paid equally', () => {
    const result = calculateMinimumTransaction({
      expense: [
        createHistoryMock({ buyer: 'Alice', cost: 20, purchaseHistory: '1차' }),
        createHistoryMock({ buyer: 'Bob', cost: 20, purchaseHistory: '2차' }),
        createHistoryMock({
          buyer: 'Charlie',
          cost: 20,
          purchaseHistory: '3차'
        })
      ],
      members: ['Alice', 'Bob', 'Charlie']
    });
    expect(result).toEqual([]);
  });

  test('should handle negative expenses correctly', () => {
    const result = calculateMinimumTransaction({
      expense: [
        createHistoryMock({
          buyer: 'Alice',
          cost: 20,
          purchaseHistory: '1차'
        }),
        createHistoryMock({ buyer: 'Bob', cost: 40, purchaseHistory: '2차' })
      ],
      members: ['Alice', 'Bob', 'Charlie']
    });
    expect(result).toEqual([
      { sender: 'Charlie', receiver: 'Bob', amount: 20 }
    ]);
  });

  test('should handle zero expenses correctly', () => {
    const result = calculateMinimumTransaction({
      expense: [
        createHistoryMock({ buyer: 'Alice', cost: 0, purchaseHistory: '1차' }),
        createHistoryMock({ buyer: 'Bob', cost: 0, purchaseHistory: '2차' })
      ],
      members: ['Alice', 'Bob', 'Charlie']
    });
    expect(result).toEqual([]);
  });
});
