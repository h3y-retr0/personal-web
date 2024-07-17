import { Send } from 'lucide-react'

export const Contact: React.FC = () => {
  return (
    <form className='pt-[40px]'>
      <div className=''>
        <div>
          <label>Name</label>
          <input
            className='ml-[20px] p-[5px] w-[305px] h-[34px] bg-[transparent] border-solid border-2 border-White-Custom outline-none'
            type='text'
            placeholder='Enter your name'
          />

          <label className='ml-[30px]'>Email</label>
          <input
            className='ml-[20px] p-[5px] w-[305px] h-[34px] bg-[transparent] border-solid border-2 border-White-Custom outline-none'
            type='text'
            placeholder='example@example.com'
          />
        </div>
        <div className='pt-[50px]'>
          <label>Message</label>
          <br />
          <textarea
            className='p-[5px] mt-[20px] w-[765px] h-[250px] bg-[transparent] border-solid border-2 border-White-Custom outline-none'
            placeholder='Say something !'
          />
        </div>
      </div>
      <div className='relative w-[96px]'>
        <input
          className='relative z-10 w-[96px] border-solid border-2 border-White-Custom mt-[15px] p-[7px] cursor-pointer text-left px-3 hover:bg-White-Custom/[.08]'
          type='submit'
          value='Send'
        />
        <Send className='absolute z-0 right-4 top-[47%] ' size={20} />
      </div>
    </form>
  )
}
