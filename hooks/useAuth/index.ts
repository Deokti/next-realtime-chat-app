import React, { useState } from 'react';
import { IAuthError } from '../../types/auth';
import { authTranslate } from '../../utils/auth-translate';
import { IUseAuth } from './useAuth.props';

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