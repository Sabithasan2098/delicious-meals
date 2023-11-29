import { Link } from "react-router-dom";
import registerImage from "../../../../public/login-register.avif";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthProvider } from "../../../Providers/Provider";
import { useForm } from "react-hook-form";

const Register = () => {
  const { createUser } = useContext(AuthProvider);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      reset();
    });
  };

  return (
    <div>
      <Helmet>
        <title>Delicious meals || register</title>
      </Helmet>
      <div className="flex md:flex-row sm:flex-row ">
        <div className="">
          <img src={registerImage} alt="" />
        </div>
        <div className="hero min-h-screen lg:absolute -top-24">
          <div className="hero-content flex-col ">
            <div className="text-center ">
              <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-400">Name field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-400">
                      Email field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password && (
                    <span className="text-red-400">
                      Password field is required
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-400">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-400">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-400">
                      Password must have 1 uppercase 1 special character 1
                      number and 1 lowercase
                    </p>
                  )}
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <p className="text-md font-bold text-[#001F3F]">
                  All ready have an account.Please{" "}
                  <Link to={"/login"} className="underline text-yellow-500">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
