const CONFIG = Object.freeze({
  ROUTES: Object.freeze({
    INTERNS: '/interns',
    INTERN_ADD: '/interns/add',
    INTERN_EDIT: '/interns/profile/:id',
  }),
  API: Object.freeze({
    GET_ONE: (id: string) => `https://reqres.in/api/users/${id}`,
    GET_PAGE: (page: string) => `https://reqres.in/api/users?page=${page}`,
    DELETE: (id: string) => `https://reqres.in/api/users/${id}`,
    CREATE: 'https://reqres.in/api/users/',
  }),
})

export default CONFIG
