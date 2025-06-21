import { useFormStatus } from "react-dom";

export default function FormStatus() {
  const status = useFormStatus();
  return <p>{status.pending ? 'submitting ...' : ''}</p>;
}