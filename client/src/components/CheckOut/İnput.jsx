const İnput = ({ register, errors, title, placeholder }) => {
  return (
    <>
      <div className="flex flex-col gap-[9px] w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-[12px] font-bold tracking-[-0.214px]">{title}</h1>
          {errors.firstName?.type === "required" && (
            <p
              className="text-[12px] font-bold tracking-[-0.214px] text-red-600"
              role="alert"
            >
              First name is required
            </p>
          )}
        </div>
        <input
          placeholder={placeholder}
          className="w-full h-[56px] text-[14px] font-bold tracking-[-0.25px]  px-6 rounded-[8px] border border-004"
          {...register("firstName", { required: true })}
          aria-invalid={errors.firstName ? "true" : "false"}
        />
      </div>
    </>
  );
};

export default İnput;
