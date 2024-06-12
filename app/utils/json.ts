import sjson from 'secure-json-parse';

export default function parseJson(stringifiedJson: string | undefined) {
  if (!stringifiedJson) {
    return undefined;
  }

  try {
    return sjson(stringifiedJson);
  } catch {
    return undefined;
  }
}
