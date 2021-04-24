export interface Toast {
  message: string;
  type: 'success' | 'info' | 'warn' | 'error';
  summary: string;
}
