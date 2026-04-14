/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import pool from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function getMembers() {
  try {
    const [rows] = await pool.query('SELECT * FROM member');
    return rows as any[];
  } catch (error) {
    console.error('Error fetching members:', error);
    return [];
  }
}

export async function addMember(formData: FormData) {
  const m_name = formData.get('m_name');
  const m_dob = formData.get('m_dob');
  const m_gender = formData.get('m_gender');
  const m_info = formData.get('m_info');

  try {
    await pool.query('INSERT INTO member (m_name, m_dob, m_gender, m_info) VALUES (?, ?, ?, ?)', [m_name, m_dob, m_gender, m_info]);
    revalidatePath('/members'); 
  } catch (error) {
    console.error('Error adding member:', error);
  }
}

export async function deleteMember(m_id: number) {
  try {
    await pool.query('DELETE FROM member WHERE m_id = ?', [m_id]);
    revalidatePath('/members');
  } catch (error) {
    console.error('Error deleting member:', error);
  }
}

export async function updateMember(m_id: number, formData: FormData) {
  const m_name = formData.get('m_name');
  const m_dob = formData.get('m_dob');
  const m_gender = formData.get('m_gender');
  const m_info = formData.get('m_info');
  
  try {
    await pool.query('UPDATE member SET m_name = ?, m_dob = ?, m_gender = ?, m_info = ? WHERE m_id = ?', [m_name, m_dob, m_gender, m_info, m_id]);
    revalidatePath('/members');
  } catch (error) {
    console.error('Error updating member:', error);
  }
}
