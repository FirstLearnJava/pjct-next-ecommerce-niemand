import { Route } from 'next';
import { z } from 'zod';

const returnToSchema = z.string().refine((value) => {
  return (
    // Regular expression for valid returnTo path with query parameters:
    // - starts with a slash
    // - until the end of the string, 1 or more:
    //   - numbers
    //   - hash symbols
    //   - forward slashes
    //   - equals signs
    //   - question marks
    //   - lowercase letters
    //   - dashes
    !value.startsWith('/logout') && /^\/[\d#/=?a-z-]+(\?.*)?$/.test(value) // Updated regex
  );
});

export function getSafeReturnToPath(path: string | string[] | undefined) {
  const result = returnToSchema.safeParse(path);
  console.log(result.success);
  if (!result.success) return undefined;
  return result.data as Route;
}
