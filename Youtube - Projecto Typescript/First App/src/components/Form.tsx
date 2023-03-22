import useForm from "../hooks/useForm";

interface formInformation {
  email: string;
  name: string;
  age: number;
}

// App
const Form = () => {
  const { form, age, handleForm } = useForm<formInformation>({ email: "test@test.cl", name: "", age: 15 });

  const { email } = form;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input type="email" className="form-control" name="email" value={email} onChange={handleForm} />
      </div>
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input type="text" className="form-control" name="name" onChange={handleForm} />
      </div>
      <div className="mb-3">
        <label className="form-label">Age:</label>
        <input type="number" className="form-control" name="age" value={age} onChange={handleForm} />
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};

export default Form;

//El chiste de hacer esto, digamos, crear el hook de un formulario personalizado. Es
//que puedo crear tantos formularios como me venga en gana, y todos van a ocupar la misma lógica.
