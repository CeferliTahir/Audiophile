import { useForm } from "react-hook-form";
import Input from "./İnput";
const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="bg-white rounded-[8px] w-[730px] pt-[54px] pb-[48px] px-12 flex flex-col gap-[41px]">
        <h1 className="font-bold text-[32px] leading-9 tracking-[1.143px]">
          CHECKOUT
        </h1>

        <form
          className="flex flex-col gap-[53px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-0002 uppercase">billing details</h1>

            <div className="grid grid-cols-2 gap-4 gap-y-6">
              <Input
                title="Name"
                placeholder="Alexei Ward"
                register={register}
                errors={errors}
              />
              <Input
                title="Email Address"
                placeholder="alexeiward@mail.com"
                register={register}
                errors={errors}
              />

              <Input
                title="Phone Number"
                placeholder="+1 202-555-0136"
                register={register}
                errors={errors}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-0002 uppercase">shipping info</h1>

            <div className="grid gap-4 gap-y-6">
              <div className="col-span-2">
                <Input
                  title="Address"
                  placeholder="1137 Williams Avenue"
                  register={register}
                  errors={errors}
                />
              </div>
              <Input
                title="ZIP Code"
                placeholder="10001"
                register={register}
                errors={errors}
              />
              <Input
                title="City"
                placeholder="New York"
                register={register}
                errors={errors}
              />

              <Input
                title="Country"
                placeholder="United States"
                register={register}
                errors={errors}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-0002 uppercase">payment details</h1>

            <div className="grid grid-cols-2 gap-4 gap-y-6">
              <div className="col-span-1 row-span-2">
                <p className="text-[12px] font-bold tracking-[-0.214px]">
                  Payment Method
                </p>
              </div>
              <div className="flex gap-4 border-004 border rounded-[8px] h-[56px] items-center px-[21px]">
                <input type="radio" />
                <p className="text-[14px] font-bold tracking-[-0.25px]">
                  e-Money
                </p>
              </div>
              <div className="flex gap-4 border-004 border rounded-[8px] h-[56px] items-center px-[21px]">
                <input type="radio" />
                <p className="text-[14px] font-bold tracking-[-0.25px]">
                  Cash on Delivery
                </p>
              </div>
              <Input
                title="e-Money Number"
                placeholder="238521993"
                register={register}
                errors={errors}
              />
              <Input
                title="e-Money PIN"
                placeholder="6891"
                register={register}
                errors={errors}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
