import { moveItemIndex, transferArrayItem } from './index';

describe('moveItemIndex', () => {
  it('should move item index', () => {
    expect(
      moveItemIndex(
        [
          {
            id: '0',
            index: 0,
          },
          {
            id: '1',
            index: 1,
          },
          {
            id: '2',
            index: 2,
          },
        ],
        0,
        2,
      ),
    ).toEqual([
      {
        id: '1',
        index: 0,
      },
      {
        id: '2',
        index: 1,
      },
      {
        id: '0',
        index: 2,
      },
    ]);
  });

  it('should sort unsorted input', () => {
    expect(
      moveItemIndex(
        [
          {
            id: '1',
            index: 1,
          },
          {
            id: '2',
            index: 2,
          },
          {
            id: '0',
            index: 0,
          },
        ],
        0,
        2,
      ),
    ).toEqual([
      {
        id: '1',
        index: 0,
      },
      {
        id: '2',
        index: 1,
      },
      {
        id: '0',
        index: 2,
      },
    ]);
  });
});

describe('transferArrayItem', () => {
  it('should move item index', () => {
    expect(
      transferArrayItem(
        [
          {
            id: '0',
            listId: '0',
            index: 0,
          },
          {
            id: '1',
            listId: '0',
            index: 1,
          },
          {
            id: '2',
            listId: '0',
            index: 2,
          },
        ],
        [
          {
            id: '3',
            listId: '1',
            index: 0,
          },
          {
            id: '4',
            listId: '1',
            index: 1,
          },
          {
            id: '5',
            listId: '1',
            index: 2,
          },
        ],
        0,
        2,
        '1',
      ),
    ).toEqual([
      {
        id: '1',
        listId: '0',
        index: 0,
      },
      {
        id: '2',
        listId: '0',
        index: 1,
      },
      {
        id: '3',
        listId: '1',
        index: 0,
      },
      {
        id: '4',
        listId: '1',
        index: 1,
      },
      {
        id: '0',
        listId: '1',
        index: 2,
      },
      {
        id: '5',
        listId: '1',
        index: 3,
      },
    ]);
  });
});
