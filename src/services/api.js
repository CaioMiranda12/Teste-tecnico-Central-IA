/* eslint-disable camelcase */
const API_URL = 'http://localhost:5000';

export async function fetchAIs() {
  const response = await fetch(`${API_URL}/getAIs`);
  return response.json();
}

export async function fetchAIsRecents() {
  const response = await fetch(`${API_URL}/getAIsRecents`);
  return response.json();
}

export async function fetchUser(uid) {
  const response = await fetch(`${API_URL}/getUser/${uid}`);
  return response.json();
}

export async function registerPrompt(userId, aiModelId, prompt, response) {
  const res = await fetch(`${API_URL}/registerPrompt`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, aiModelId, prompt, response }),
  });
  return res.json();
}

export async function fetchUserHistory(userId) {
  const response = await fetch(`${API_URL}/getUserHistory/${userId}`);
  if (!response.ok) {
    throw new Error(`Erro ao buscar histórico: ${response.status}`);
  }
  return response.json();
}

export async function createUser(name, email, firebase_uid) {
  const response = await fetch(`${API_URL}/createUser`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, firebase_uid }),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(
      `Erro ao criar usuário: ${response.status} - ${errorResponse.message}`,
    );
  }

  return response.json();
}
