import { useMutation } from '@tanstack/react-query'
type IData = {
    email: string,
    password: string,
    confirmPassword?: string
  }

export const useMutationHooks = (fnCallback : (data: IData) => Promise<any>) => {
    const mutation = useMutation({
        mutationFn:  fnCallback
      })
      const resetMutation = mutation.reset;

  return {
    ...mutation,
    reset: resetMutation
  };
}