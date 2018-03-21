import { handleCategoriesNames } from './utilityFunctions'

const initialState = {
    data: [
        {id: '1', name: 'Luke Skywalker', phone: '111-111-111', email: 'luke@gmail.com', category: '[jedi][padawans][rebels]'},
        {id: '2', name: 'Darth Vader', phone: '222-222-222', email: 'vader@gmail.com', category: '[sith][empire]'},
        {id: '3', name: 'Leia Organa', phone: '333-333-333', email: 'leia@gmail.com', category: '[senat][rebels]'},
        {id: '4', name: 'Han Solo', phone: '444-444-444', email: 'han@gmail.com', category: '[smugglers][rebels]'},
        {id: '5', name: 'Lando Carlissian', phone: '555-555-555', email: 'lando@gmail.com', category: '[gamblers][rebels]'},
        {id: '6', name: 'Obi-wan Kenobi', phone: '777-777-777', email: 'kenobi@gmail.com', category: '[jedi][masters]'}
    ]
};

export default (state = initialState, action = {}) => {


    switch (action.type) {

        case 'ADD_CONTACT':

            //const categoriesInBrackets = this.handleCategoriesNames(newCategory);
            const categoriesInBrackers = handleCategoriesNames(action.newCategory);

            return {
                ...state,
                data: state.data.concat({
                    id: Date.now().toString(32), // generate id based on current date, than change it to string
                    name: action.newName,
                    phone: action.newPhone,
                    email: action.newEmail,
                    category: categoriesInBrackers,
                })
            };

        default:
            return state
    }
}

