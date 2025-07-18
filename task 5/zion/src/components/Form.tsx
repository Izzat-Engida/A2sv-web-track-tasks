import {useForm,useFieldArray} from "react-hook-form"
import {DevTool} from "@hookform/devtools";

type FormValues={
    username:string,
    email:string,
    channel:string
    social:{
        telegram:string,
        tiktok:string,
    },
    phonenumber:{
    number:string
    }[],
    age:number;
}

export function Form(){
    const form=useForm<FormValues>(
        {
            defaultValues:{
                username:'izor',
                email:'izor@gmail.com',
                channel:'izorium den',
                social:{
                    telegram:'izorium',
                    tiktok:''
                },
                phonenumber:[{number:''}],
                age:0,
            }
            }
    );
    const {register,control,handleSubmit,resetField,getValues,formState}=form
    const {errors}=formState;
    const onSubmit=(data:FormValues)=>{
        console.log("you have submitted me",data)
        console.log(getValues('username'))
        console.log(getValues('email'))
        console.log(getValues('channel'))
        resetField("username")
        resetField("email")
        resetField("channel")
        
    }
const {fields,append,remove}=useFieldArray({
    name:'phonenumber',
    control
})

    return (<>
    form here
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
        
        <input className="username" placeholder="Username"
         type="text" 
         {...register ("username",{
            required:{message:"username is required",
                value:true,
            }
         })}
         />
         <p>{errors.username?.message}</p>
        <br/>
        <input className="email" placeholder="Email" type="email"
        {...register("email",{
        
            required:{
                value:true,
                message:"enter your email"
            },
            validate:(fieldvalue)=>{
                return ( fieldvalue!=="admin@example.com" || "Enter a different email adress")
            }
        })}
        />
        <p>{errors.email?.message}</p>
        <br/>
        <input className="channel" placeholder="channel" type="text"
        {...register("channel")}
        />
        <br/>
        <input className="titkok" placeholder="titkok" type="text"
        {...register('social.tiktok')}
        />
        <br/>
        <div>
            <div>
               {fields.map((field, index) => (
  <div className="form-control" key={field.id}>
    <input
      type="text"
      {...register(`phonenumber.${index}.number`, {
        required: 'Phone number is required',
      })}
    /> 
    <br/>
    {fields.length>1 && <button onClick={()=>remove(index)}>remove</button>}

    
  </div>
))}

            </div>
            <button type='button' onClick={()=>{
                append({number:''})
            }}>add phone number</button>

        
        </div>

<div>
    <input type='text' {...register('age',{
        valueAsNumber:true,
    })}/>
    <p>{errors.age?.message}</p>
</div>
<div>
    <input type='date'/>
</div>
        <button className="button" type="submit">submit</button>

    </form>
    <DevTool control={control}/>
    </>)
}