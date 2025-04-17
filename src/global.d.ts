declare global {
  interface Window {
    Village?: {
      on?: (event: string, callback: (data: any) => void) => void;
      emit?: (event: string, data: any) => void;
      broadcast?: (event: string, data: any) => void;
      authorize?: (...args: any[]) => void;
      init?: (...args: any[]) => void;
      loaded?: boolean;
      q?: any[];
    };
  }
}
export {};