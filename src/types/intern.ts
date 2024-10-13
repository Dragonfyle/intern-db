import { type Ref } from 'vue'

export interface Intern {
  id: number
  name: string
  avatarURL: string
}

export interface InternsContext {
  interns: Ref<Intern[]>
  updateInterns: (newInterns: Intern[]) => void
}

export type FilteredInternsContext = Ref<Intern[]>
