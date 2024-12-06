import React from 'react';
import { useStore } from '../../store/useStore';
import { CheckboxGroup } from '../forms/CheckboxGroup';
import { projectOptions, toolOptions } from '../../constants/options';

export const Section3Areas: React.FC = () => {
  const { userProfile, updateProfile } = useStore();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">Áreas de Aplicación de la IA</h2>
      
      <div className="space-y-6">
        <CheckboxGroup
          label="¿En qué tipo de proyectos te gustaría involucrarte?"
          options={projectOptions}
          selectedValues={userProfile.projectPreferences || []}
          onChange={(values) => updateProfile({ projectPreferences: values })}
        />

        <CheckboxGroup
          label="¿Qué herramientas de IA te interesan más?"
          options={toolOptions}
          selectedValues={userProfile.preferredTools || []}
          onChange={(values) => updateProfile({ preferredTools: values })}
        />
      </div>
    </div>
  );
};