export interface Task {
  id: string
  status: TaskStatuses
  description: string
}

export type TaskStatuses = 'completed' | 'active'

export type TaskFilters = TaskStatuses | 'all'