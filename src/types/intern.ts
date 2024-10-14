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

type InternsContext = {
  internList: Ref<Intern[]>
  filteredInterns: Ref<Intern[]>
  updateFiltered: (newInterns: Intern[]) => void
  deleteInternLocally: (
    id: number,
  ) => { intern: Intern; index: number } | undefined
  restoreInternLocally: (intern: Intern, index: number) => void
}

interface DeletedIntern {
  intern: Intern
  index: number
}

export type { InternFormContext, InternsContext, Intern, DeletedIntern }
