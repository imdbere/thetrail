export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      crumbs: {
        Row: {
          clicks: number
          code: string
          created_at: string
          created_by: string
          description: string | null
          id: number
          parent_id: number | null
        }
        Insert: {
          clicks?: number
          code: string
          created_at?: string
          created_by: string
          description?: string | null
          id?: number
          parent_id?: number | null
        }
        Update: {
          clicks?: number
          code?: string
          created_at?: string
          created_by?: string
          description?: string | null
          id?: number
          parent_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "crumbs_parent_id_fkey"
            columns: ["parent_id"]
            referencedRelation: "crumbs"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
