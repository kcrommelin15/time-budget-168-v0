export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      active_sessions: {
        Row: {
          category_id: string
          created_at: string | null
          description: string | null
          id: string
          is_paused: boolean | null
          notes: string | null
          paused_at: string | null
          start_time: string
          subcategory_id: string | null
          total_paused_minutes: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          category_id: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_paused?: boolean | null
          notes?: string | null
          paused_at?: string | null
          start_time?: string
          subcategory_id?: string | null
          total_paused_minutes?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          category_id?: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_paused?: boolean | null
          notes?: string | null
          paused_at?: string | null
          start_time?: string
          subcategory_id?: string | null
          total_paused_minutes?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "active_sessions_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "time_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "active_sessions_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "weekly_time_summary"
            referencedColumns: ["category_id"]
          },
          {
            foreignKeyName: "active_sessions_subcategory_id_fkey"
            columns: ["subcategory_id"]
            isOneToOne: false
            referencedRelation: "time_subcategories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "active_sessions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_training_data: {
        Row: {
          confidence_score: number | null
          context_data: Json | null
          created_at: string | null
          feedback_provided_at: string | null
          id: string
          model_version: string | null
          predicted_category_id: string | null
          predicted_subcategory_id: string | null
          raw_description: string
          time_entry_id: string | null
          user_confirmed: boolean | null
          user_corrected_category_id: string | null
          user_corrected_subcategory_id: string | null
          user_id: string
        }
        Insert: {
          confidence_score?: number | null
          context_data?: Json | null
          created_at?: string | null
          feedback_provided_at?: string | null
          id?: string
          model_version?: string | null
          predicted_category_id?: string | null
          predicted_subcategory_id?: string | null
          raw_description: string
          time_entry_id?: string | null
          user_confirmed?: boolean | null
          user_corrected_category_id?: string | null
          user_corrected_subcategory_id?: string | null
          user_id: string
        }
        Update: {
          confidence_score?: number | null
          context_data?: Json | null
          created_at?: string | null
          feedback_provided_at?: string | null
          id?: string
          model_version?: string | null
          predicted_category_id?: string | null
          predicted_subcategory_id?: string | null
          raw_description?: string
          time_entry_id?: string | null
          user_confirmed?: boolean | null
          user_corrected_category_id?: string | null
          user_corrected_subcategory_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_training_data_predicted_category_id_fkey"
            columns: ["predicted_category_id"]
            isOneToOne: false
            referencedRelation: "time_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_training_data_predicted_category_id_fkey"
            columns: ["predicted_category_id"]
            isOneToOne: false
            referencedRelation: "weekly_time_summary"
            referencedColumns: ["category_id"]
          },
          {
            foreignKeyName: "ai_training_data_predicted_subcategory_id_fkey"
            columns: ["predicted_subcategory_id"]
            isOneToOne: false
            referencedRelation: "time_subcategories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_training_data_time_entry_id_fkey"
            columns: ["time_entry_id"]
            isOneToOne: false
            referencedRelation: "time_entries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_training_data_user_corrected_category_id_fkey"
            columns: ["user_corrected_category_id"]
            isOneToOne: false
            referencedRelation: "time_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_training_data_user_corrected_category_id_fkey"
            columns: ["user_corrected_category_id"]
            isOneToOne: false
            referencedRelation: "weekly_time_summary"
            referencedColumns: ["category_id"]
          },
          {
            foreignKeyName: "ai_training_data_user_corrected_subcategory_id_fkey"
            columns: ["user_corrected_subcategory_id"]
            isOneToOne: false
            referencedRelation: "time_subcategories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_training_data_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      test_workflow_table: {
        Row: {
          created_at: string | null
          id: string
          is_active: boolean | null
          test_data: Json | null
          test_name: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          test_data?: Json | null
          test_name: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          test_data?: Json | null
          test_name?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "test_workflow_table_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      time_categories: {
        Row: {
          color: string
          created_at: string | null
          description: string | null
          goal_direction: string | null
          goal_target_max: number | null
          goal_target_min: number | null
          goal_threshold: number | null
          id: string
          is_active: boolean | null
          is_archived: boolean | null
          name: string
          sort_order: number | null
          time_used: number
          updated_at: string | null
          user_id: string
          weekly_budget: number
        }
        Insert: {
          color?: string
          created_at?: string | null
          description?: string | null
          goal_direction?: string | null
          goal_target_max?: number | null
          goal_target_min?: number | null
          goal_threshold?: number | null
          id?: string
          is_active?: boolean | null
          is_archived?: boolean | null
          name: string
          sort_order?: number | null
          time_used?: number
          updated_at?: string | null
          user_id: string
          weekly_budget?: number
        }
        Update: {
          color?: string
          created_at?: string | null
          description?: string | null
          goal_direction?: string | null
          goal_target_max?: number | null
          goal_target_min?: number | null
          goal_threshold?: number | null
          id?: string
          is_active?: boolean | null
          is_archived?: boolean | null
          name?: string
          sort_order?: number | null
          time_used?: number
          updated_at?: string | null
          user_id?: string
          weekly_budget?: number
        }
        Relationships: [
          {
            foreignKeyName: "time_categories_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      time_entries: {
        Row: {
          approved: boolean | null
          category_id: string
          confidence_score: number | null
          created_at: string | null
          date: string
          description: string | null
          duration_minutes: number | null
          end_time: string | null
          id: string
          notes: string | null
          requires_review: boolean | null
          source: string | null
          source_reference: string | null
          start_time: string
          status: string | null
          subcategory_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          approved?: boolean | null
          category_id: string
          confidence_score?: number | null
          created_at?: string | null
          date?: string
          description?: string | null
          duration_minutes?: number | null
          end_time?: string | null
          id?: string
          notes?: string | null
          requires_review?: boolean | null
          source?: string | null
          source_reference?: string | null
          start_time: string
          status?: string | null
          subcategory_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          approved?: boolean | null
          category_id?: string
          confidence_score?: number | null
          created_at?: string | null
          date?: string
          description?: string | null
          duration_minutes?: number | null
          end_time?: string | null
          id?: string
          notes?: string | null
          requires_review?: boolean | null
          source?: string | null
          source_reference?: string | null
          start_time?: string
          status?: string | null
          subcategory_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "time_entries_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "time_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "time_entries_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "weekly_time_summary"
            referencedColumns: ["category_id"]
          },
          {
            foreignKeyName: "time_entries_subcategory_id_fkey"
            columns: ["subcategory_id"]
            isOneToOne: false
            referencedRelation: "time_subcategories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "time_entries_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      time_subcategories: {
        Row: {
          budget: number
          category_id: string
          created_at: string | null
          description: string | null
          goal_direction: string | null
          goal_target_max: number | null
          goal_target_min: number | null
          goal_threshold: number | null
          id: string
          is_active: boolean | null
          is_fixed: boolean | null
          name: string
          sort_order: number | null
          time_used: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          budget?: number
          category_id: string
          created_at?: string | null
          description?: string | null
          goal_direction?: string | null
          goal_target_max?: number | null
          goal_target_min?: number | null
          goal_threshold?: number | null
          id?: string
          is_active?: boolean | null
          is_fixed?: boolean | null
          name: string
          sort_order?: number | null
          time_used?: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          budget?: number
          category_id?: string
          created_at?: string | null
          description?: string | null
          goal_direction?: string | null
          goal_target_max?: number | null
          goal_target_min?: number | null
          goal_threshold?: number | null
          id?: string
          is_active?: boolean | null
          is_fixed?: boolean | null
          name?: string
          sort_order?: number | null
          time_used?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "time_subcategories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "time_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "time_subcategories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "weekly_time_summary"
            referencedColumns: ["category_id"]
          },
          {
            foreignKeyName: "time_subcategories_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_integrations: {
        Row: {
          access_token: string | null
          auto_track_enabled: boolean | null
          created_at: string | null
          external_user_id: string | null
          id: string
          is_active: boolean | null
          last_sync_at: string | null
          refresh_token: string | null
          service_type: string
          sync_categories: boolean | null
          token_expires_at: string | null
          updated_at: string | null
          user_id: string
          workspace_id: string | null
        }
        Insert: {
          access_token?: string | null
          auto_track_enabled?: boolean | null
          created_at?: string | null
          external_user_id?: string | null
          id?: string
          is_active?: boolean | null
          last_sync_at?: string | null
          refresh_token?: string | null
          service_type: string
          sync_categories?: boolean | null
          token_expires_at?: string | null
          updated_at?: string | null
          user_id: string
          workspace_id?: string | null
        }
        Update: {
          access_token?: string | null
          auto_track_enabled?: boolean | null
          created_at?: string | null
          external_user_id?: string | null
          id?: string
          is_active?: boolean | null
          last_sync_at?: string | null
          refresh_token?: string | null
          service_type?: string
          sync_categories?: boolean | null
          token_expires_at?: string | null
          updated_at?: string | null
          user_id?: string
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_integrations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          first_login_at: string | null
          full_name: string | null
          id: string
          last_seen_at: string | null
          notifications_enabled: boolean | null
          onboarding_completed: boolean | null
          theme: string | null
          timezone: string | null
          updated_at: string | null
          weekly_budget_default: number | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          first_login_at?: string | null
          full_name?: string | null
          id: string
          last_seen_at?: string | null
          notifications_enabled?: boolean | null
          onboarding_completed?: boolean | null
          theme?: string | null
          timezone?: string | null
          updated_at?: string | null
          weekly_budget_default?: number | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          first_login_at?: string | null
          full_name?: string | null
          id?: string
          last_seen_at?: string | null
          notifications_enabled?: boolean | null
          onboarding_completed?: boolean | null
          theme?: string | null
          timezone?: string | null
          updated_at?: string | null
          weekly_budget_default?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      daily_productivity_insights: {
        Row: {
          avg_session_minutes: number | null
          categories_used: number | null
          date: string | null
          first_activity: string | null
          last_activity: string | null
          total_entries: number | null
          total_hours: number | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "time_entries_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      weekly_time_summary: {
        Row: {
          category_color: string | null
          category_id: string | null
          category_name: string | null
          entry_count: number | null
          hours_remaining: number | null
          hours_tracked: number | null
          usage_percentage: number | null
          user_id: string | null
          week_start: string | null
          weekly_budget: number | null
        }
        Relationships: [
          {
            foreignKeyName: "time_categories_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      admin_table_counts: {
        Args: Record<PropertyKey, never>
        Returns: {
          table_name: string
          row_count: number
        }[]
      }
      create_default_categories: {
        Args: { p_user_id: string }
        Returns: undefined
      }
      create_test_data_for_user: {
        Args: { p_user_id: string }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"] | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"] | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"] | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"] | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
