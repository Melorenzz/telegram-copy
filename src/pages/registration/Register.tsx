import {useRegistration} from "./hooks/useRegistration.ts";
import {useForm} from "react-hook-form";
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Link, useNavigate} from "react-router";
const Register = () => {
    type RegisterForm = z.infer<typeof registerSchema>;

    const { mutate, isPending } = useRegistration();

    const registerSchema = z.object({
        email: z.string().email({message: 'Please enter a valid email address'}),
        username: z.string().min(4, {message: 'Minimum 4 characters'}),
        displayName: z.string().min(1, {message: `Can't be empty`}),
        description: z.string().optional(),
        password: z.string().min(6, {message: 'Password must be at least 6 characters'}),
    })
    const {register, handleSubmit, formState } = useForm<RegisterForm>({
        resolver: zodResolver(registerSchema)
    })
    const navigate = useNavigate();
    const {errors} = formState;
    const onSubmit = (data: RegisterForm) => {
        mutate(data, {
            onSuccess: (res) => {
                console.log("Successfully registered", res);
                navigate('/login');
            },
            onError: (err) => console.log("Registration error", err),
        });
    };
    const inputs = [
        {name: 'email', placeholder: 'Email', type: 'email'},
        {name: 'username', placeholder: 'Username'},
        {name: 'displayName', placeholder: 'Display Name'},
        {name: 'description', placeholder: 'Description'},
        {name: 'password', placeholder: '******', type: 'password'},
    ]
    return (
        <div className='bg-bg-main inset-0 fixed flex flex-col items-center justify-center'>
            <img className='w-[160px] h-[160px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1024px-Telegram_2019_Logo.svg.png" alt="logo"/>
            <h2 className="text-4xl mt-5 font-semibold text-center mb-2">Telegram</h2>
            <p className='max-w-[360px] text-center text-text-secondary leading-6 mt-2'>
                Please confirm your country code
                and enter your phone number.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-10 max-w-xl w-full  mx-auto  rounded-2xl ">

                <div className='bg-[#2c2c2c]  p-5 rounded-xl grid grid-cols-2 grid-rows-3 gap-3'>
                    {inputs.map((input, index) => (
                        <div className={`${index === inputs.length-1 ? 'col-span-2' : null}`} key={index}>
                            <input
                                {...register(input.name as keyof RegisterForm)}
                                type={input.type || 'string'}
                                placeholder={input.placeholder}
                                className="px-4 w-full py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                            {errors[input.name as keyof RegisterForm] && (
                                <p className='text-red-500  text-sm'>
                                    {errors[input.name as keyof RegisterForm]?.message}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                <Link to='/login'>Login</Link>
                <button
                    type="submit"
                    className="mt-2 py-2 px-4 rounded-lg bg-violet-500 text-white font-medium hover:bg-violet-600 transition"
                >
                    {isPending ? 'Loading...' : 'Register'}
                </button>
            </form>
        </div>
    );
};

export default Register;