import { createClient } from '@/supabase/client';
import type { Project } from '@/types';

const supabase = createClient();

export const projectService = {
  async getAll(): Promise<Project[]> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('published', true)
      .order('order', { ascending: true });

    if (error) throw error;
    return data || [];
  },

  async getFeatured(): Promise<Project[]> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('published', true)
      .eq('featured', true)
      .order('order', { ascending: true })
      .limit(6);

    if (error) throw error;
    return data || [];
  },

  async getById(id: string): Promise<Project | null> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },
};
