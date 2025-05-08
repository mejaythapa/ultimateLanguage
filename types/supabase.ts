export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      courses: {
        Row: {
          id: number
          created_at: string
          title: string
          slug: string
          description: string
          course_type: string
          price: number
          duration: string
          image_url: string
          features: Json
        }
        Insert: {
          id?: number
          created_at?: string
          title: string
          slug: string
          description: string
          course_type: string
          price: number
          duration: string
          image_url: string
          features?: Json
        }
        Update: {
          id?: number
          created_at?: string
          title?: string
          slug?: string
          description?: string
          course_type?: string
          price?: number
          duration?: string
          image_url?: string
          features?: Json
        }
      }
      testimonials: {
        Row: {
          id: number
          created_at: string
          name: string
          image_url: string
          message: string
          rating: number
          course_type: string
        }
        Insert: {
          id?: number
          created_at?: string
          name: string
          image_url: string
          message: string
          rating: number
          course_type: string
        }
        Update: {
          id?: number
          created_at?: string
          name?: string
          image_url?: string
          message?: string
          rating?: number
          course_type?: string
        }
      }
      bookings: {
        Row: {
          id: number
          created_at: string
          name: string
          email: string
          phone: string
          course_id: number
          preferred_date: string
          message: string
          status: string
        }
        Insert: {
          id?: number
          created_at?: string
          name: string
          email: string
          phone: string
          course_id: number
          preferred_date: string
          message: string
          status?: string
        }
        Update: {
          id?: number
          created_at?: string
          name?: string
          email?: string
          phone?: string
          course_id?: number
          preferred_date?: string
          message?: string
          status?: string
        }
      }
      contact_messages: {
        Row: {
          id: number
          created_at: string
          name: string
          email: string
          phone: string
          message: string
          read: boolean
        }
        Insert: {
          id?: number
          created_at?: string
          name: string
          email: string
          phone: string
          message: string
          read?: boolean
        }
        Update: {
          id?: number
          created_at?: string
          name?: string
          email?: string
          phone?: string
          message?: string
          read?: boolean
        }
      }
      blog_posts: {
        Row: {
          id: number
          created_at: string
          title: string
          slug: string
          excerpt: string
          content: string
          image_url: string
          author: string
          published: boolean
        }
        Insert: {
          id?: number
          created_at?: string
          title: string
          slug: string
          excerpt: string
          content: string
          image_url: string
          author: string
          published?: boolean
        }
        Update: {
          id?: number
          created_at?: string
          title?: string
          slug?: string
          excerpt?: string
          content?: string
          image_url?: string
          author?: string
          published?: boolean
        }
      }
    }
  }
}