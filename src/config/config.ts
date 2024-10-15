const CONFIG = Object.freeze({
  ROUTES: Object.freeze({
    INTERNS: '/interns/:page',
    INTERN_ADD: '/interns/add',
    INTERN_EDIT: '/interns/profile/:id',
  }),
  API: Object.freeze({
    GET_ONE: (id: string) => `https://reqres.in/api/users/${id}`,
    GET_PAGE: (page: string) =>
      `https://reqres.in/api/users?page=${page}&delay=3`,
    DELETE: (id: string) => `https://reqres.in/api/users/${id}`,
    CREATE: 'https://reqres.in/api/users?delay=3',
    UPDATE: (id: string) => `https://reqres.in/api/users/${id}?delay=3`,
  }),
})

export default CONFIG
