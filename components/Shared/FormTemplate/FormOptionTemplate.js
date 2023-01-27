const FormOptionTemplate = ({ data, register }) => {

    //some reusable styles
    const borderPrimaryColor = 'block w-full p-1 px-3 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring focus:ring-opacity-40'
    const borderErrorColor = 'border-red-700 focus:ring-red-300'
    const borderSuccessColor = 'focus:border-blue-400 focus:ring-blue-300'

    return (
        <div className="">
            <label className="label">
                <span className="label-text">{data.name}</span>
            </label>
            <div>
                <select
                    className={`${borderPrimaryColor}${borderSuccessColor}`}
                    {...register(data.name)}
                >
                    {data?.options?.map((option, i) => (
                        <option key={i}>{option.value}</option>
                    ))}

                </select>
            </div>
        </div>
    );
};

export default FormOptionTemplate;