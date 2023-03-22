import { useState, ChangeEvent } from "react";

const useForm = <T extends Object>(initState: T) => {
  const [form, setForm] = useState(initState);

  const handleForm = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  return { form, ...form, handleForm };
  // Al pasar el spread de form '{...form}', estoy devolviendo y construyendo un nuevo form
  // con todo lo que este tiene.
};

export default useForm;
