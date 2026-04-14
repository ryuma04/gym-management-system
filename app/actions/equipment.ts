/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import pool from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function getEquipments() {
  try {
    const [rows] = await pool.query('SELECT * FROM equipment');
    return rows as any[];
  } catch (error) {
    console.error('Error fetching equipments:', error);
    return [];
  }
}

export async function addEquipment(formData: FormData) {
  const e_name = formData.get('e_name');
  const e_type = formData.get('e_type');

  try {
    await pool.query('INSERT INTO equipment (e_name, e_type) VALUES (?, ?)', [e_name, e_type]);
    revalidatePath('/equipment'); 
  } catch (error) {
    console.error('Error adding equipment:', error);
  }
}

export async function deleteEquipment(e_id: number) {
  try {
    await pool.query('DELETE FROM equipment WHERE e_id = ?', [e_id]);
    revalidatePath('/equipment');
  } catch (error) {
    console.error('Error deleting equipment:', error);
  }
}

export async function updateEquipment(e_id: number, formData: FormData) {
  const e_name = formData.get('e_name');
  const e_type = formData.get('e_type');
  
  try {
    await pool.query('UPDATE equipment SET e_name = ?, e_type = ? WHERE e_id = ?', [e_name, e_type, e_id]);
    revalidatePath('/equipment');
  } catch (error) {
    console.error('Error updating equipment:', error);
  }
}
