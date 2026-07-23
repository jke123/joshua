import { createClient } from '@/supabase/client';
import type { Skill } from '@/types';

const supabase = createClient();

export const skillService = {
  async getAll(): Promise<Skill[]> {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('order', { ascending: true });

    if (error) throw error;
    return data || [];
  },

  async getByCategory(category: string): Promise<Skill[]> {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .eq('category', category)
      .order('order', { ascending: true });

    if (error) throw error;
    return data || [];
  },
};
