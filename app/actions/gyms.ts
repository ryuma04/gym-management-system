/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import pool from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function getGyms() {
  try {
    const [rows] = await pool.query('SELECT * FROM gym');
    return rows as any[];
  } catch (error) {
    console.error('Error fetching gyms:', error);
    return [];
  }
}

export async function addGym(formData: FormData) {
  const g_name = formData.get('g_name');
  const g_location = formData.get('g_location');

  try {
    await pool.query('INSERT INTO gym (g_name, g_location) VALUES (?, ?)', [g_name, g_location]);
    revalidatePath('/gyms'); // REVALIDATE THE GYM PAGE
  } catch (error) {
    console.error('Error adding gym:', error);
  }
}

export async function deleteGym(g_id: number) {
  try {
    await pool.query('DELETE FROM gym WHERE g_id = ?', [g_id]);
    revalidatePath('/gyms');
  } catch (error) {
    console.error('Error deleting gym:', error);
  }
}

export async function updateGym(g_id: number, formData: FormData) {
  const g_name = formData.get('g_name');
  const g_location = formData.get('g_location');
  
  try {
    await pool.query('UPDATE gym SET g_name = ?, g_location = ? WHERE g_id = ?', [g_name, g_location, g_id]);
  } catch (error) {
    console.error('Error updating gym:', error);
    return;
  }
  revalidatePath('/gyms');
  redirect('/gyms');
}
