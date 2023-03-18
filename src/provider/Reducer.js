import Types from './Types';

export const InitialState = {
   budget: [],
   expenses: [],
   weeklyExpense: [],
   monthlyExpenses: [],
};

const Reducer = (state, action) => {
   switch (action.type) {
      case Types.FETCH_BUDGET: {
         return {
            ...state,
            budget: action.payload,
         };
      }
      case Types.FETCH_EXPENSE: {
         return {
            ...state,
            expenses: action.payload,
         };
      }
      case Types.FETCH_WEEKLY_EXPENSE: {
         return {
            ...state,
            weeklyExpense: action.payload,
         };
      }
      case Types.FETCH_MONTHLY_EXPENSE: {
         return {
            ...state,
            monthlyExpenses: action.payload,
         };
      }
      case Types.DELETE_EXPENSE: {
        const newExpenses = state.expenses.filter(expense => expense.id != action.payload);

        return {
           ...state,
           expenses: newExpenses,
        };
      }
      case Types.CREATE_EXPENSE: {
        const newState = state.expenses.length ? [ ...state.expenses, action.payload] : [action.payload] 

        return {
           ...state,
           expenses: newState,
        };
      }
      case Types.EDIT_EXPENSE: {
        const { index, expense } = action.payload;
        const newState = state.expenses;
        newState[index] = expense;

        return {
           ...state,
           expenses: newState,
        };
      }
  }
};

export default Reducer;
