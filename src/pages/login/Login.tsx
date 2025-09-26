import {useForm} from "react-hook-form";
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useLogin} from "./hooks/useLogin.ts";
const Login = () => {
    type loginForm = z.infer<typeof loginSchema>;

    const { mutate, isPending } = useLogin();

    const loginSchema = z.object({
        email: z.string().email({message: 'Please enter a valid email address'}),
        password: z.string().min(6, {message: 'Password must be at least 6 characters'}),
    })
    const {register, handleSubmit, formState } = useForm<loginForm>({
        resolver: zodResolver(loginSchema)
    })
    const {errors} = formState;
    const onSubmit = (data: loginForm) => {
        mutate(data, {
            onSuccess: (res) => {console.log("Login success", res); localStorage.setItem('auth-token', res.token)},
            onError: (err) => console.log("Login error", err),
        });
    };


    const inputs = [
        {name: 'email', placeholder: 'Email', type: 'email'},
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
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-10 max-w-sm w-full  mx-auto  rounded-2xl ">

                    {inputs.map((input, index) => (
                        <div className={`${index === inputs.length-1 ? 'col-span-2' : null}`} key={index}>
                            <input
                                {...register(input.name as keyof loginForm)}
                                type={input.type || 'string'}
                                placeholder={input.placeholder}
                                className="px-4 w-full py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                            {errors[input.name as keyof loginForm] && (
                                <p className='text-red-500  text-sm'>
                                    {errors[input.name as keyof loginForm]?.message}
                                </p>
                            )}
                        </div>
                    ))}
                <button
                    type="submit"
                    className="mt-2 py-2 px-4 rounded-lg bg-violet-500 text-white font-medium hover:bg-violet-600 transition"
                >
                    {isPending ? 'Loading...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default Login;