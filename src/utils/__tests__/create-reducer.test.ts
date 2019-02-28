import createReducer from '../create-reducer';

const reducerType = 'TEST_CREATE_REDUCER';
type reducerType = typeof reducerType;

type initialStateType = number;


describe('Utils - create-reducer', () => {
  let initialState: initialStateType = 0;
  const reducer = createReducer<initialStateType>(initialState, {
    [reducerType](state, action: any) {
      return state + action.payload;
    }
  });

  beforeEach(() => {
    initialState = 0;
  });

  it('Should return a function', () => {
    const expected = 'function';
    const result = typeof reducer;

    expect(result).toEqual(expected);
  });

  it('Should return the type value', () => {
    const action = {
      payload: 1,
      type: reducerType,
    };
    const expected = 2;
    const result = reducer(1, action);

    expect(result).toEqual(expected);
  });

  it('Should return default value', () => {
    const action = {
      payload: 100,
      type: 'test',
    };
    const expected = 2;
    const result = reducer(2, action);

    expect(result).toEqual(expected);
  });
});
