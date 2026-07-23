import { createClient } from '@/supabase/client';
import type { ContactMessage } from '@/types';

const supabase = createClient();

export const contactService = {
  async create(message: Omit<ContactMessage, 'id' | 'read' | 'created_at'>) {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([{ ...message, read: false }])
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};
