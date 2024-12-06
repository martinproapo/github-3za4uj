import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import { TextArea } from '../forms/TextArea';
import { evaluatePrompt } from '../../utils/promptEvaluation';

export const Section2Prompts: React.FC = () => {
  const { updateProfile } = useStore();
  const [prompt, setPrompt] = useState('');
  const [improvedPrompt, setImprovedPrompt] = useState('');

  const handleEvaluate = () => {
    const evaluation = evaluatePrompt(prompt);
    updateProfile({ promptingSkill: evaluation.score });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">Capacidad para Comunicarse con la IA</h2>
      
      <div className="space-y-4">
        <TextArea
          label="Ejercicio: Escribe un prompt para generar una ilustración"
          value={prompt}
          onChange={setPrompt}
          placeholder="Describe cómo generarías una ilustración usando IA..."
        />

        <TextArea
          label='Mejora este prompt básico: "Genera una imagen de una ciudad moderna"'
          value={improvedPrompt}
          onChange={setImprovedPrompt}
          placeholder="Escribe una versión mejorada del prompt..."
        />

        <button
          onClick={handleEvaluate}
          className="w-full bg-gradient-primary text-white"
        >
          Evaluar habilidad
        </button>
      </div>
    </div>
  );
};