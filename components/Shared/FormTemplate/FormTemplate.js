

const FormTemplate = ({ data, register }) => {
    //some reusable styles
    const borderPrimaryColor = 'block w-full p-1 px-3 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring focus:ring-opacity-40'
    const borderErrorColor = 'border-red-700 focus:ring-red-300'
    const borderSuccessColor = 'focus:border-blue-400 focus:ring-blue-300'

    return (
        <>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">{data?.placeholder}</span>
                </label>
                <input
                    type={data?.type}
                    placeholder={data?.placeholder}
                    className={`${borderPrimaryColor} ${data?.error ? borderErrorColor : borderSuccessColor}`}
                    {...register(data?.name, {
                        required: ` ${data?.name} must required`,
                    })}
                />
                {data?.error && (
                    <span className="label-text text-red-400">
                        {data?.error.message}
                    </span>
                )}
            </div>
        </>
    );
};

export default FormTemplate;