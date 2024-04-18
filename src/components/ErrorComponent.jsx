import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function ErrorComponent(){

    const error = useRouteError();
    return(
        <div className="bg-gray-700 h-[100vh] w-full flex flex-col items-center justify-center gap-5">
            <div className="text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[10rem] h-[10rem]">
                <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
            </svg>
            </div>

            <div className="text-xl font-bold text-white">
                Something Went Wrong.
            </div>

            <Link to='/'>
                <button className="bg-white px-4 py-2 rounded-lg font-medium">
                    Go To Homepage
                </button>
            </Link>
        </div>
    )
}

export default ErrorComponent;