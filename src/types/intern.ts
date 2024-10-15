import { type Ref } from 'vue'

interface Intern {
  id: number
  firstName: string
  lastName: string
  avatar: string
}

interface InternFormContext {
  updateInternName: (firstName: string, lastName: string) => void
  updateInternPhoto: (photo: string) => void
}

type LocalInternListContext = {
  filteredInterns: Ref<Intern[]>
  updateFiltered: (interns: Intern[]) => void
  deleteInternLocally: (
    id: number,
  ) => { intern: Intern; index: number } | undefined
  restoreInternLocally: (intern: Intern, index: number) => void
  numberOfPages: Ref<number>
}

type GlobalInternListContext = {
  internList: Ref<Intern[]>
  addIntern: (intern: Intern) => void
  setInternList: (interns: Intern[]) => void
}

interface DeletedIntern {
  intern: Intern
  index: number
}

export type {
  InternFormContext,
  LocalInternListContext,
  GlobalInternListContext,
  Intern,
  DeletedIntern,
}
