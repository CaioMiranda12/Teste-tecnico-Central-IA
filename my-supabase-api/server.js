/* eslint-disable camelcase */
// server.js
const cors = require('cors');
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
);

app.get('/getAIs', async (req, res) => {
  try {
    const { data, error } = await supabase.from('ai_models').select('*');

    if (error) throw error;

    res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao obter IA models:', error);
    res.status(500).send('Erro ao obter IA models');
  }
});

app.get('/getAIsRecents', async (req, res) => {
  try {
    const { data, error } = await supabase.from('ai_recents').select('*');

    if (error) throw error;

    res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao obter IA models:', error);
    res.status(500).send('Erro ao obter IA models');
  }
});

app.get('/getUser/:uid', async (req, res) => {
  const { uid } = req.params;
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('firebase_uid', uid)
      .single();

    if (error) throw error;

    res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao obter informações do usuário:', error);
    res.status(500).send('Erro ao obter informações do usuário');
  }
});

app.post('/createUser', async (req, res) => {
  const { name, email, firebase_uid } = req.body;
  try {
    const { data, error } = await supabase
      .from('users')
      .insert([{ name, email, firebase_uid }]);

    if (error) throw error;

    res.status(201).json({ message: 'Usuário criado com sucesso', data });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).send('Erro ao criar usuário');
  }
});

app.post('/registerPrompt', async (req, res) => {
  const { userId, aiModelId, prompt, response } = req.body;
  try {
    const { data, error } = await supabase
      .from('user_interactions')
      .insert([{ user_id: userId, ai_model_id: aiModelId, prompt, response }]);

    if (error) throw error;

    res.status(201).json({ message: 'Prompt registrado com sucesso', data });
  } catch (error) {
    console.error('Erro ao registrar prompt:', error);
    res.status(500).send('Erro ao registrar prompt');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
