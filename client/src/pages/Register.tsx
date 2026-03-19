import Button from "../components/Button";
import Input from "../components/Input";

function Register() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-md w-[360px] p-8">
        
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            Create Account
          </h1>
          <p className="text-sm text-gray-500 mt-1">Join AlterBrain today 🚀</p>
        </div>

        
        <div className="flex flex-col gap-4">
          <Input placeholder="Email" />
          <Input placeholder="Password" />
        </div>

        
        <div className=" flex justify-center mt-3 w-full">
          <Button
            variant="primary"
            loading={false}
            size="sm"
            text="Register"
          />
        </div>

        <div className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <span className="text-purple-600 cursor-pointer hover:underline">
            Login
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
