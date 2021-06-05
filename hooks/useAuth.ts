import React, { useState } from 'react';
import { IAuthError } from '../types/auth';
import { authTranslate } from '../utils/auth-translate';

// Кастомный хук, который хранит в себе состояние загрузки и ошибок
// Отдаёт на рушу функции записывающие ошибки и саму ошибку

interface IUseAuth {
  loading: boolean
  error: string
  onLoading: () => void
  onSucsess: () => void
  onRejection: (error: IAuthError) => void
}

export function useAuth(): IUseAuth {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  function onLoading(): void {
    setLoading(true);
    setError('');
  }

  function onSucsess(): void {
    setLoading(false);
    setError('');
  }

  function onRejection({ message }: IAuthError): void {
    const toRussian = authTranslate(message);
    setLoading(false);
    setError(toRussian);
  }

  return {
    loading,
    error,
    onLoading,
    onSucsess,
    onRejection,
  };
}